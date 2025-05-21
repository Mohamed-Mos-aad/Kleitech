// ** Style
import style from '../style/layouts/chatLayout.module.css'
// ** Hooks && Tools
import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';
// ** Api
import { fetchMessages } from '../api/chatApi'
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
    const [displayedChats,setDisplayedChats] = useState<IChat[]>(chats);
    const [chatSelected,setChatSelected] = useState<boolean>(false);
    const [currentChat,setCurrentChat] = useState<IChat|undefined>();
    const [emojysComponentOpened,setEmojysComponentOpened] = useState<boolean>(false);



    // ** Refs
    const messageInputRef = useRef<HTMLInputElement>(null);





    // ** Handler
    const selectChatHandler = (id:string)=>{
        setChatSelected(true);
        const findChat = displayedChats.find(chat => chat.chatId === id);
        setCurrentChat(findChat);
        openChatMobilesToggleHandler();
    }
    const sendMessageHandler = (message:IMessage)=>{
        if(message)
        {
            setCurrentChat((prev)=> {
                if(!prev) return

                return {
                    ...prev,
                    messages: [...prev.messages,message]
                }
            })
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
        const chatsList = document.getElementById('chats_list');
        if(chatsList && window.innerWidth < 767.98)
        {
            if(!chatSelected)
            {
                chatsList.style.display = 'none';
            }
            else
            {
                chatsList.style.display = 'flex';
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
                        chat.participants[0].userId === doctorFromDetails.id
                    )

                    if(existingChat)
                    {
                        setCurrentChat(existingChat);
                        setChatSelected(true);
                    }
                    else
                    {
                        const newChat: IChat = {
                            chatId: `chat${Date.now()}`,
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

                        setChats([newChat, ...chatsData]);
                        setDisplayedChats([newChat, ...chatsData]);
                        setCurrentChat(newChat  );
                        setChatSelected(true);
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
                <ChatList chats={chats} displayedChats={displayedChats} selectChatHandler={selectChatHandler} setDisplayedChats={setDisplayedChats}/>
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
                                <ChatFooter emojyComponentStateToggleHandler={emojyComponentStateToggleHandler} sendMessageHandler={sendMessageHandler} messageInputRef={messageInputRef} chatLenght={Number(currentChat?.messages.length)} receiverId={currentChat?.participants[0].userId} senderId={currentChat?.participants[1].userId}/>
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
