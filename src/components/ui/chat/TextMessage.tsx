// ** Assets
import messageReactIcon from '../../../assets/main/chat/messageReactIcon.svg'
import messageOptionsIcon from '../../../assets/main/chat/messageOptionsIcon.svg'
import trueIcon from '../../../assets/main/chat/trueIcon.svg'
// ** Style
import style from '../../../style/components/ui/chat/message.module.css'
// ** Hooks && Tools
import emoji from 'emoji.json'
import { useState } from 'react'
import { deleteChat } from '../../../api/chat/chatApi'


// ** Interfaces
interface ITextMessage{
    chatId:string,
    senderId: string,
    messageId: string,
    text: string | undefined,
    timestamp: string
}





export default function TextMessage({senderId,messageId,timestamp,text}:ITextMessage) {
    // ** States
    const emojis = [emoji[151],emoji[349],emoji[355],emoji[7],emoji[85],emoji[57]].reverse();
    const [messageEmoji,setMessageEmoji] = useState('');
    const [messageEmojisContainerOpen,setMessageEmojisContainerOpen] = useState(false);
    const [messageOptionsContainerOpen,setMessageOptionsContainerOpen] = useState(false);






    // ** Handlers
    const messageEmojisContainerToggelHandler = ()=>{
        setMessageEmojisContainerOpen(!messageEmojisContainerOpen);
        setMessageOptionsContainerOpen(false);
    }
    const selectEmoji = (emoji:string)=>{
        setMessageEmoji(emoji);
        setMessageEmojisContainerOpen(false);
    }
    const messageOptionsContainerToggelHandler = ()=>{
        setMessageOptionsContainerOpen(!messageOptionsContainerOpen);
        setMessageEmojisContainerOpen(false);
    }
    const deleteMessage = async ()=>{
        console.log(messageId);
        try{
            await deleteChat(messageId);
        }
        catch(error){
            console.log(error)
        }
    }



    return (
        <>
            <div className={`${style.message} ${senderId.includes('doc') ? style.receiver : '' }`}>
                <div className={style.message_content}>
                    <h2>
                        {text}
                        <div className={style.message_emoji}>{messageEmoji}</div>
                        <div className={style.message_state}>
                            <img src={trueIcon} alt="True icon" />
                        </div>
                    </h2>
                    <div className={style.message_options}>
                        <img src={messageReactIcon} alt="Message react icon" onClick={messageEmojisContainerToggelHandler}/>
                        <img src={messageOptionsIcon} alt="Message options icon" onClick={messageOptionsContainerToggelHandler}/>
                    </div>
                    {
                        messageEmojisContainerOpen && 
                        <div className={style.message_emojis}>
                            {emojis.map(emoji => <div onClick={()=>{selectEmoji(emoji.char)}}> {emoji.char}</div>)}
                        </div>
                    }
                    {
                        messageOptionsContainerOpen &&
                        <div className={style.message_options_list}>
                            <ul>
                                <li>رد</li>
                                <li>تعديل الرساله</li>
                                <li>تثبيت في المحادثه</li>
                                <li onClick={deleteMessage}>مسج الرساله</li>
                            </ul>
                        </div>
                    }
                </div>
                <h3>{timestamp}</h3>
            </div>
        </>
    )
}
