// ** Style
import style from '../../../style/components/ui/chat/message.module.css'





// ** Interfaces
interface IPhotoMessage{
    senderId: string,
    photoUrl: string | undefined,
    timestamp: string
}




export default function PhotoMessage({senderId,timestamp,photoUrl}:IPhotoMessage) {
    return (
        <>
            <div className={`${style.message} ${senderId.includes('doc') ? style.receiver : '' }`}>
                <div className={style.message_content}>
                    <div className={style.photo_container}>
                        <img src={photoUrl} alt={photoUrl} />
                    </div>
                    <h3>{timestamp}</h3>
                </div>
            </div>
        </>
    )
}
