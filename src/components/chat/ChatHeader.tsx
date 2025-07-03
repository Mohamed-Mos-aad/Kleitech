// ** Assets
import backIcon from '../../assets/main/chat/backIcon.svg'
import noPhoto from '../../assets/main/consultation/noPhoto.png'
// ** Style
import style from '../../style/layouts/chatLayout.module.css'
// ** Interface
import { IChat, IMessage } from '../../interfaces'
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { useEffect, useState } from 'react';



// ** Interface
interface IChatHeader{
    currentChat: IChat | undefined,
    openChatMobilesToggleHandler: ()=> void,
}



export default function ChatHeader({currentChat,openChatMobilesToggleHandler}:IChatHeader) {
    // ** Store 
    const chatDataS = useSelector((state: RootState) => state.chatDataS);



    // ** States
    const [pinMessage,setPinMessage] = useState<string | null>(null);
    const messagesArray:IMessage[] = Array.isArray(currentChat?.messages) ? currentChat.messages : Object.values(currentChat?.messages || {});



    // ** UseEffect
    useEffect(()=>{
        if(currentChat)
        {
            const getMessage = messagesArray.find(message => message.messageId === chatDataS.pinId || message.isPinned);
            setPinMessage(getMessage?.text || null);
        }
    },[currentChat,messagesArray,chatDataS.pinId])



    return (
        <>
            <div className={style.chat_header}>
                {
                    pinMessage && 
                    <div className={style.pin_message}>
                        {pinMessage}
                    </div>
                }
                <div className={style.chat_photo}>
                    <img src={currentChat?.participants[0].photo || noPhoto} alt="User photo" />
                </div>
                <div className={style.chat_title}>
                    <h2>{currentChat?.participants[0].name}</h2>
                    <h3 className={currentChat?.participants[0].isOnline ? `${style.active}` : ''}>{currentChat?.participants[0].isOnline ? 'متصل' : 'غير متصل'}</h3>
                </div>
                <div className={style.back_btn}>
                    <button onClick={openChatMobilesToggleHandler}>
                        <img src={backIcon} alt="Back icon"/>
                    </button>
                </div>
            </div>
        </>
    )
}
