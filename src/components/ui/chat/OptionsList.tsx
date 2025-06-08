// ** Style
import style from '../../../style/components/ui/chat/message.module.css'



// ** Interfaces
interface IOptions{
    replayMessage: ()=> void,
    editeMessage: ()=> void,
    pinMessage: ()=> void,
    deleteMessage: ()=> void,
}

export default function OptionsList({replayMessage, editeMessage, pinMessage, deleteMessage}:IOptions) {
    return (
        <>
            <div className={style.message_options_list}>
                <ul>
                    <li onClick={replayMessage}>رد</li>
                    <li onClick={editeMessage}>تعديل الرساله</li>
                    <li onClick={pinMessage}>تثبيت في المحادثه</li>
                    <li onClick={deleteMessage}>مسح الرساله</li>
                </ul>
            </div>
        </>
    )
}
