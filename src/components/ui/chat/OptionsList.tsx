// ** Style
import style from '../../../style/components/ui/chat/message.module.css'



// ** Interfaces
interface IOptions{
    deleteMessage: ()=> void,
    replayMessage: ()=> void
}

export default function OptionsList({replayMessage,deleteMessage}:IOptions) {
    return (
        <>
            <div className={style.message_options_list}>
                <ul>
                    <li onClick={replayMessage}>رد</li>
                    <li>تعديل الرساله</li>
                    <li>تثبيت في المحادثه</li>
                    <li onClick={deleteMessage}>مسح الرساله</li>
                </ul>
            </div>
        </>
    )
}
