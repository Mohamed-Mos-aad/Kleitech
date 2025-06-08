// ** Style
import style from '../style/layouts/chatLayout.module.css'
// ** Hooks && Tools
import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';
// ** Api
import { addChat, editeChat, fetchMessages } from '../api/chat/chatApi'
// ** Interfaces
import { IChat, IMessage } from '../interfaces'
// ** Components
import EmojyPicker from '../components/ui/EmojyPicker'
import ChatList from '../components/chat/ChatList'
import ChatHeader from '../components/chat/ChatHeader'
import ChatFooter from '../components/chat/ChatFooter';
import ChatMessages from '../components/chat/ChatMessages';





export default function ChatLayout() {
    // ** Default 
    const location = useLocation();
    const doctorFromDetails = location.state?.doctor;



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
        setCurrentChat(findChat);
        openChatMobilesToggleHandler();
    }

    const sendMessageHandler = async (message:IMessage)=>{
        if (!message || !currentChat) return;
        
        const updatedChat: IChat = {
            ...currentChat,
            messages: [...currentChat.messages, message],
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
            await editeChat(updatedChat,currentChat.id)
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




    // ** UseEffect
    useEffect(()=>{
        const loadChat = async ()=>{
            try{
                const chatsData = await fetchMessages();
                setChats(chatsData);
                setDisplayedChats(chatsData);

                if(doctorFromDetails)
                {
                    const existingChat = chatsData.find((chat:IChat)=> 
                        chat.participants.some(p => p.userId === `doc${doctorFromDetails.id}`)
                    )

                    if(existingChat)
                    {
                        setCurrentChat(existingChat);
                        setChatSelected(true);
                    }
                    else
                    {
                        const chatId = `chat_${doctorFromDetails.id}_${Date.now()}`;

                        const newChat: IChat = {
                            id: chatId,
                            participants: [{
                                userId: `doc${doctorFromDetails.id}`,
                                name: doctorFromDetails.name,
                                photo: doctorFromDetails.photo,
                                role: doctorFromDetails.specialty,
                                isOnline: false,
                                lastSeen: doctorFromDetails.lastSeen,
                            }, {
                                userId: 'currentUserId',
                                name: 'أنا',
                                photo: '',
                                role: 'patient',
                                isOnline: true,
                                lastSeen: new Date().toISOString(),
                            }],
                            messages: [],
                            isArchived: false,
                            lastMessage: {
                                messageId: '',
                                text: '',
                                timestamp: new Date().toISOString(),
                            }
                        };
                        try{
                            await addChat(newChat);
                            setChats([newChat, ...chatsData]);
                            setDisplayedChats([newChat, ...chatsData]);
                            setCurrentChat(newChat);
                            setChatSelected(true);
                        }
                        catch(error){
                        console.log(error)
                        }
                    }
                }
            }
            catch(error)
            {
                console.log(error);
            }
        }
        loadChat();
    },[doctorFromDetails]);



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
                                <ChatFooter messages={currentChat.messages} emojyComponentStateToggleHandler={emojyComponentStateToggleHandler} sendMessageHandler={sendMessageHandler} messageInputRef={messageInputRef} chatLenght={Number(currentChat?.messages.length)} receiverId={currentChat?.participants[0].userId} senderId={currentChat?.participants[1].userId}/>
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
