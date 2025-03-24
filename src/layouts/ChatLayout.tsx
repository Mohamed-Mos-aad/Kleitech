// ** Assets
import userPhoto from '../assets/landingPage/PatientReviews/PatientReview-1.png'
import searchIcon from '../assets/main/chat/searchIcon.svg'
import imojySolidIcon from '../assets/main/chat/imojySolidIcon.svg'
import sendIcon from '../assets/main/chat/sendIcon.svg'
import studioIcon from '../assets/main/chat/studioIcon.svg'
import attachFileIcon from '../assets/main/chat/attachFileIcon.svg'
import micIcon from '../assets/main/chat/micIcon.svg'
// ** Style
import style from '../style/layouts/chatLayout.module.css'
import { useState } from 'react'
import { chats } from './../data/index';
// ** Components
import EmojyPicker from '../components/ui/EmojyPicker'


// ** Interfaces
interface IFindChat{
    chatId: string;
    participants: {
        userId: string;
        name: string;
        photo: string;
        role: string;
        isOnline: boolean;
        lastSeen: string;
    }[];
    messages: {
        messageId: string;
        senderId: string;
        receiverId: string;
        text: string;
        timestamp: string;
        status: string;
        type: string;
        reactions: { userId: string; reaction: string }[];
    }[];
    isArchived: boolean;
    lastMessage: {
        messageId: string;
        text: string;
        timestamp: string
    };
}





export default function ChatLayout() {
    // ** Default
    const chatsData = chats;





    // ** States
    const [displayedChats,setDisplayedChats] = useState(chatsData);
    const [chatSelected,setChatSelected] = useState<boolean>(false);
    const [currentChat,setCurrentChat] = useState<IFindChat|undefined>();
    const [emojysComponentOpened,setEmojysComponentOpened] = useState<boolean>(false);






    // ** Handler
    const convertDateTypeHandler = (date:string)=>{
        const newDateType = new Date(date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
        return newDateType;
    }
    const chatsSearchHandler = (e: React.FormEvent<HTMLInputElement>)=>{
        const searchValue = e.currentTarget.value;
        const searchResult = chats.filter(chat => chat.participants[0].name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
        setDisplayedChats(searchResult);
    }
    const selectChatHandler = (id:string)=>{
        setChatSelected(true);
        const findChat = displayedChats.find(chat => chat.chatId === id);
        setCurrentChat(findChat);
    }
    const sendMessageHandler = ()=>{
        const messageInput = document.getElementById('messageInput') as HTMLInputElement;
        if(messageInput)
        {
            const newMessage = {
                messageId: `msg${Number(currentChat?.messages.length)+1}`,
                senderId: `${currentChat?.participants[1].userId}`,
                receiverId: `${currentChat?.participants[0].userId}`,
                text: messageInput.value,
                timestamp: new Date().toISOString(),
                status: "delivered",
                type: "text",
                reactions: []
            }

            setCurrentChat((prev)=> {
                if(!prev) return

                return {
                    ...prev,
                    messages: [...prev.messages,newMessage]
                }
            })


            messageInput.value = '';
            setEmojysComponentOpened(false);
        }
    }
    const emojyComponentStateToggleHandler = ()=>{setEmojysComponentOpened(!emojysComponentOpened)};
    const addEmojiHandler = (emoji:string)=>{
        const messageInput = document.getElementById('messageInput') as HTMLInputElement;
        if(messageInput)
        {
            messageInput.value += emoji;
        }
    }




    // ** Render
    const chatsListRender = displayedChats.map(chatItme =>
        <div className={style.chats_list_item} key={chatItme.chatId} onClick={()=>{selectChatHandler(chatItme.chatId)}}>
            <div className={style.chats_list_item_data}>
                <div className={style.chats_list_item_photo}>
                    <img src={userPhoto} alt="User photo"/>
                </div>
                <div className={style.chats_list_item_content}>
                    <h2>{chatItme.participants[0].name}</h2>
                    <p>{chatItme.lastMessage.text}</p>
                </div>
            </div>
            <div className={style.chats_list_item_details}>
                <h4>{convertDateTypeHandler(chatItme.lastMessage.timestamp)}</h4>
            </div>
        </div>
    )
    const chatMessagesRender = currentChat?.messages.slice().reverse().map(message =>
        <div className={`${style.message} ${message.senderId.includes('doc') ? style.receiver : '' }`} key={message.messageId}>
            <div className={style.message_content} key={message.messageId}>
                <h2>{message.text}</h2>
                <h3>{convertDateTypeHandler(message.timestamp)}</h3>
            </div>
        </div>
    )


    



    return (
        <>
            <div className={style.chats_container}>
                <div className={style.chats_list_container}>
                    <div className={style.search}>
                        <input type="text" placeholder='بحث' onInput={(e)=>{chatsSearchHandler(e)}}/>
                        <img src={searchIcon} alt="Search icon" />
                    </div>
                    <div className={style.chats_list}>
                        {chatsListRender}
                    </div>
                </div>
                <div className={style.chat_content}>
                    {
                        !chatSelected ? 
                        <h1>اختر شات للبدأ</h1> 
                        :
                        <div className={style.chat}>
                            <div className={style.chat_header}>
                                <div className={style.chat_photo}>
                                    <img src={userPhoto} alt="User photo" />
                                </div>
                                <div className={style.chat_title}>
                                    <h2>{currentChat?.participants[0].name}</h2>
                                    <h3 className={currentChat?.participants[0].isOnline ? `${style.active}` : ''}>{currentChat?.participants[0].isOnline ? 'متصل' : 'غير متصل'}</h3>
                                </div>
                            </div>
                            <div className={style.chat_messages_content}>
                                {chatMessagesRender}
                            </div>
                            <div className={style.chat_footer}>
                                <div className={style.send_input}>
                                    <input type="text" placeholder='اكتب رسالتك' id='messageInput'/>
                                    <div className={style.imojy}>
                                        <img src={imojySolidIcon} alt="Imojy solid icon" onClick={emojyComponentStateToggleHandler}/>
                                    </div>
                                    <div className={style.message_media}>
                                        <img src={micIcon} alt="Mic icon" />
                                        <img src={attachFileIcon} alt="Attach File icon" />
                                        <img src={studioIcon} alt="Studio icon" />
                                    </div>
                                </div>
                                <button onClick={sendMessageHandler}>
                                    <img src={sendIcon} alt="Send icon" />
                                </button>
                            </div>
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
