// ** Style
import style from '../../../style/components/ui/chat/message.module.css'



// ** Interfaces
interface ITextMessage{
    senderId: string,
    text: string | undefined,
    timestamp: string
}





export default function TextMessage({senderId,timestamp,text}:ITextMessage) {
    return (
        <>
            <div className={`${style.message} ${senderId.includes('doc') ? style.receiver : '' }`}>
                <div className={style.message_content}>
                    <h2>{text}</h2>
                    <h3>{timestamp}</h3>
                </div>
            </div>
        </>
    )
}
