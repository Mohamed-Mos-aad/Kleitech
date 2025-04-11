// ** Assets
import userPhoto from '../../../assets/landingPage/PatientReviews/PatientReview-1.png'
// import silentIcon from '../../../assets/main/chat/silentIcon.svg'
// ** Style
import style from '../../../style/layouts/chatLayout.module.css'






// ** Interfaces
interface IChatListItem{
    name: string,
    lastMessage: string,
    timesTamp: string,
    onClick: ()=> void
}





export default function ChatListItem({name,lastMessage,timesTamp,onClick}:IChatListItem) {
    return (
        <>
            <div className={style.chats_list_item} onClick={onClick}>
                <div className={style.chats_list_item_data}>
                    <div className={style.chats_list_item_photo}>
                        <img src={userPhoto} alt="User photo"/>
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
                    <h4>{timesTamp}</h4>
                </div>
            </div>
        </>
    )
}












