// ** Assets
import backIcon from '../../assets/main/chat/backIcon.svg'
import noPhoto from '../../assets/main/consultation/noPhoto.png'
// ** Style
import style from '../../style/layouts/chatLayout.module.css'
// ** Interface
import { IChat } from '../../interfaces'



// ** Interface
interface IChatHeader{
    currentChat: IChat | undefined,
    openChatMobilesToggleHandler: ()=> void,
}
export default function ChatHeader({currentChat,openChatMobilesToggleHandler}:IChatHeader) {

    return (
        <>
            <div className={style.chat_header}>
                <div className={style.chat_photo}>
                    <img src={currentChat?.participants[0].photo || noPhoto} alt="User photo" />
                </div>
                <div className={style.chat_title}>
                    <h2>{currentChat?.participants[0].name}</h2>
                    <h3 className={currentChat?.participants[0].isOnline ? `${style.active}` : ''}>{currentChat?.participants[0].isOnline ? 'متصل' : 'غير متصل'}</h3>
                </div>
                <div className={style.back_btn}>
                    <button>
                        <img src={backIcon} alt="Back icon" onClick={openChatMobilesToggleHandler}/>
                    </button>
                </div>
            </div>
        </>
    )
}
