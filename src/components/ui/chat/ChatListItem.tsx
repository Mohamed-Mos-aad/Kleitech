// ** Assets
import noPhoto from '../../../assets/main/consultation/noPhoto.png'
// import silentIcon from '../../../assets/main/chat/silentIcon.svg'
// ** Style
import style from '../../../style/layouts/chatLayout.module.css'



// ** Interfaces
interface IChatListItem{
    name: string,
    lastMessage: string,
    timesTamp: string,
    photo: string,
    onClick: ()=> void
}



export default function ChatListItem({photo,name,lastMessage,timesTamp,onClick}:IChatListItem) {
    return (
        <>
            <div className={style.chats_list_item} onClick={onClick}>
                <div className={style.chats_list_item_data}>
                    <div className={style.chats_list_item_photo}>
                        <img src={photo || noPhoto} alt="User photo"/>
                    </div>
                    <div className={style.chats_list_item_content}>
                        <h2>{name}</h2>
                        <p>{lastMessage}</p>
                    </div>
                </div>
                <div className={style.chats_list_item_details}>
                    <div className={style.chat_list_item_state}>
                        {/* <div className={style.message_numebr}>
                            10
                        </div> */}
                        {/* <div className={style.message_state}>
                            <img src={silentIcon} alt="Silent icon" />
                        </div> */}
                    </div>
                    <h3>{timesTamp}</h3>
                </div>
            </div>
        </>
    )
}












