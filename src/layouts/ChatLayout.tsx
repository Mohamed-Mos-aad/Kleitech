// ** Style
import style from '../style/layouts/chatLayout.module.css'
// ** Hooks && Tools
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
// ** Api
import { addChat, sendMessage, editeMessage, fetchMessages } from '../api/chat/chatApi'
import { getDatabase, onValue, ref, set } from 'firebase/database';

// ** Interfaces
import { IChat, IDoctorsData, IMessage } from '../interfaces'
// ** Components
import EmojyPicker from '../components/ui/EmojyPicker'
import ChatList from '../components/chat/ChatList'
import ChatHeader from '../components/chat/ChatHeader'
import ChatFooter from '../components/chat/ChatFooter';
import ChatMessages from '../components/chat/ChatMessages';
// ** Api
import { fetchDoctors } from '../api/doctorsApi';
// ** Firebase
import { onAuthStateChanged, getAuth } from "firebase/auth";





export default function ChatLayout() {
    // ** Default 
    const { id } = useParams();
    const navigate = useNavigate();



    // ** States
    const [chats,setChats] = useState<IChat[]>([]);
    const [displayedChats,setDisplayedChats] = useState<IChat[]>([]);
    const [chatSelected,setChatSelected] = useState<boolean>(false);
    const [currentChat,setCurrentChat] = useState<IChat|undefined>();
    const [emojysComponentOpened,setEmojysComponentOpened] = useState<boolean>(false);
    const [showChatList,setShowChatList] = useState<boolean>(true);



    // ** Refs
    const messageInputRef = useRef<HTMLInputElement>(null);





    // ** Handler
    const selectChatHandler = (id: string) => {
        setChatSelected(true);
        const findChat = displayedChats.find(chat => chat.id === id);
        navigate(`/chats/${id}`);
        setCurrentChat(findChat);
        openChatMobilesToggleHandler();
    }
    const sendMessageHandler = async (message:IMessage)=>{
        if (!message || !currentChat) return;
        
        const messagesArray:IMessage[] = Array.isArray(currentChat.messages)? currentChat.messages: Object.values(currentChat.messages);
        const updatedChat: IChat = {
            ...currentChat,
            messages: [...messagesArray, message],
            lastMessage: {
                messageId: message.messageId,
                text: message.text || '',
                timestamp: message.timestamp
            }
        }
        setCurrentChat(updatedChat);

        const updateChatsList = (prevChats: IChat[]) => {
            const updatedChats = prevChats.map(chat => 
                chat.id === currentChat.id ? updatedChat : chat
            );

            return updatedChats.sort((a, b) => 
                new Date(b.lastMessage.timestamp).getTime() - 
                new Date(a.lastMessage.timestamp).getTime()
            );
        };
        setChats(updateChatsList);
        setDisplayedChats(updateChatsList);


        try{
            await sendMessage(message,currentChat.id)
        }
        catch(error){
            console.log(error);
            setCurrentChat(currentChat);
            setChats(prevChats => prevChats.map(chat => 
                chat.id === currentChat.id ? currentChat : chat
            ));
            setDisplayedChats(prevChats => prevChats.map(chat => 
                chat.id === currentChat.id ? currentChat : chat
            ));
        }
        finally{
            setEmojysComponentOpened(false);
        }
    }
    const editMessageHandler = async (message: IMessage) =>{
        if(currentChat)
        {
            try{
                await editeMessage(message,currentChat.id)
            }
            catch(error){
                console.log(error);
            }
            finally{
                setEmojysComponentOpened(false);
            }
        }
    }
    const emojyComponentStateToggleHandler = ()=>{setEmojysComponentOpened(!emojysComponentOpened)};
    const addEmojiHandler = (emoji:string)=>{
        if(messageInputRef.current)
        {
            messageInputRef.current.value += emoji;
        }
    }
    const openChatMobilesToggleHandler = ()=>{
        if(window.innerWidth < 767.98)
        {
            if(!chatSelected)
            {
                setShowChatList(false);
            }
            else
            {
                setShowChatList(true);
                setChatSelected(false);
            }
        }
    }



    useEffect(()=>{
        const auth = getAuth();

        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const currentUserId = user.uid;

                const fetchedChats = await fetchMessages(currentUserId);
                const sortedChats = fetchedChats.sort((a, b) =>
                    new Date(b.lastMessage.timestamp).getTime() - new Date(a.lastMessage.timestamp).getTime()
                );
                setChats(sortedChats);
                setDisplayedChats(sortedChats);

                const response = await fetchDoctors();
                const doctorsData: IDoctorsData[] = response.doctors;
                const doctor = doctorsData.find(doc => doc.id.toString() === id);

                if (doctor) {
                    const existingChat = fetchedChats.find(chat =>
                        chat.participants.some(p => p.userId === `doc${doctor.id}`)
                    );

                    if (existingChat) {
                        setCurrentChat(existingChat);
                        setChatSelected(true);
                    } else {
                        const chatId = `${doctor.id}`;
                        const newChat: IChat = {
                            id: chatId,
                            participants: [
                                {
                                    userId: `doc${doctor.id}`,
                                    name: doctor.name,
                                    photo: doctor.photo ?? '',
                                    role: doctor.specialty,
                                    isOnline: false,
                                    lastSeen: '',
                                },
                                {
                                    userId: currentUserId,
                                    name: 'أنا',
                                    photo: '',
                                    role: 'patient',
                                    isOnline: true,
                                    lastSeen: new Date().toISOString(),
                                },
                            ],
                            messages: [{
                                messageId: '__init__',
                                senderId: '',
                                receiverId: '',
                                text: '',
                                timestamp: '',
                                status: '',
                                type: 'text',
                                reactions: [],
                                isPinned: false,
                                isReplyTo: null
                            }],
                            isArchived: false,
                            lastMessage: {
                                messageId: '',
                                text: '',
                                timestamp: new Date().toISOString(),
                            }
                        };

                        await addChat(newChat);

                        const db = getDatabase();
                        await Promise.all([
                            set(ref(db, `users/${currentUserId}/chats/${chatId}`), true),
                            set(ref(db, `users/doc${doctor.id}/chats/${chatId}`), true)
                        ]);

                        const cleanedChat = { ...newChat, messages: [] };
                        setChats([cleanedChat, ...fetchedChats]);
                        setDisplayedChats([cleanedChat, ...fetchedChats]);
                        setCurrentChat(cleanedChat);
                        setChatSelected(true);
                    }
                }
            } else {
                console.warn("❌ No user logged in");
            }
        });

        return () => unsubscribe();
    }, [id]);



    useEffect(() => {
        if (!currentChat?.id) return;

        const db = getDatabase();
        const messagesRef = ref(db, `chats/${currentChat.id}/messages`);

        const unsubscribe = onValue(messagesRef, (snapshot) => {
            const data = snapshot.val();
            const messages:IMessage[] = data ? Object.values(data) as IMessage[] : [];
            const lastMessage = messages.length > 0 ? messages[messages.length - 1] : undefined;
            

            
            setCurrentChat(prevChat => {
                if (!prevChat) return undefined;
                return {
                    ...prevChat,
                    messages: messages,
                    lastMessage: lastMessage ? {
                    messageId: lastMessage.messageId,
                    text: lastMessage.type === 'text' ? lastMessage.text || '' 
                        : lastMessage.type === 'image' ? '📷 صورة'
                        : lastMessage.type === 'voice' ? '🎤 تسجيل صوتي'
                        : '',
                    timestamp: lastMessage.timestamp
                } : prevChat.lastMessage,
                };
            });
            setDisplayedChats(prevChats => {
                return prevChats.map(chat => {
                    if (chat.id === currentChat.id) {
                        return {
                            ...chat,
                            messages: messages,
                            lastMessage: lastMessage ? {
                                messageId: lastMessage.messageId,
                                text: lastMessage.type === 'text' ? lastMessage.text || ''
                                    : lastMessage.type === 'image' ? '📷 صورة'
                                    : lastMessage.type === 'voice' ? '🎤 تسجيل صوتي'
                                    : '',
                                timestamp: lastMessage.timestamp
                            } : chat.lastMessage
                        };
                    }
                    return chat;
                });
});
        });

        return () => unsubscribe();
    }, [currentChat?.id]);



    return (
        <>
            <div className={style.chats_container}>
                {
                    showChatList && <ChatList chats={chats} displayedChats={displayedChats} selectChatHandler={selectChatHandler} setDisplayedChats={setDisplayedChats}/>
                }
                <div className={style.chat_content}>
                    {
                        !chatSelected ? 
                        <h1>اختر شات للبدأ</h1> 
                        :
                        <div className={style.chat}>
                            <ChatHeader currentChat={currentChat} openChatMobilesToggleHandler={openChatMobilesToggleHandler}/>
                            <ChatMessages currentChat={currentChat}/>
                            {
                                currentChat && 
                                <ChatFooter messages={currentChat.messages} emojyComponentStateToggleHandler={emojyComponentStateToggleHandler} sendMessageHandler={sendMessageHandler} editMessageHandler={editMessageHandler} messageInputRef={messageInputRef} chatLenght={currentChat?.messages.length || 0} receiverId={currentChat?.participants[0].userId} senderId={currentChat?.participants[1].userId}/>
                            }
                            {
                                emojysComponentOpened && 
                                <EmojyPicker addEmojiHandler={addEmojiHandler}/>
                            }
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
