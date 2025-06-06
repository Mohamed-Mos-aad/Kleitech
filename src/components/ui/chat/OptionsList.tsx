// ** Style
import style from '../../../style/components/ui/chat/message.module.css'



// ** Interfaces
interface IOptions{
    deleteMessage: ()=> void,
}

export default function OptionsList({deleteMessage}:IOptions) {
    return (
        <>
            <div className={style.message_options_list}>
                <ul>
                    <li>رد</li>
                    <li>تعديل الرساله</li>
                    <li>تثبيت في المحادثه</li>
                    <li onClick={deleteMessage}>مسح الرساله</li>
                </ul>
            </div>
        </>
    )
}
