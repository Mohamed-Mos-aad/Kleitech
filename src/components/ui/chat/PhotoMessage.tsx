// ** Assets
import messageReactIcon from '../../../assets/main/chat/messageReactIcon.svg'
import messageOptionsIcon from '../../../assets/main/chat/messageOptionsIcon.svg'
import trueIcon from '../../../assets/main/chat/trueIcon.svg'
// ** Style
import style from '../../../style/components/ui/chat/message.module.css'
// ** Hooks && Tools
import { useState } from 'react';
// ** Components
import EmojiPicker from './EmojiPicker';
import OptionsList from './OptionsList';
// ** Api
import { AppDispatch } from '../../../app/store';
import { useDispatch } from 'react-redux';
import { setChatDataS } from '../../../app/slices/chat/chatSlice';



// ** Interfaces
interface IPhotoMessage{
    senderId: string,
    photoUrl: string | undefined,
    timestamp: string,
    messageId: string,
    deleteCurrentMessageHandler: ()=> void,
    pinCurrentMessageHandler: ()=> void,
}



export default function PhotoMessage({senderId,timestamp,photoUrl,messageId,deleteCurrentMessageHandler,pinCurrentMessageHandler}:IPhotoMessage) {
    // ** Store
    const dispatch: AppDispatch = useDispatch();
    
    
    
    // ** States
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
    const replayMessage = ()=>{
        dispatch(setChatDataS({replayId: messageId, editeId: null, pinId: null}));
        messageOptionsContainerToggelHandler();
    }
    const editeMessage = ()=>{
        dispatch(setChatDataS({replayId: null , editeId: messageId, pinId: null}));
        messageOptionsContainerToggelHandler();
    }
    const pinMessage = ()=>{
        dispatch(setChatDataS({replayId: null , editeId: null, pinId: messageId}));
        pinCurrentMessageHandler();
        messageOptionsContainerToggelHandler();
    }
    const deleteMessageHandler = ()=>{
        deleteCurrentMessageHandler();
        messageOptionsContainerToggelHandler();
    }

    
    return (
        <>
            <div className={`${style.message} ${senderId.includes('doc') ? style.receiver : '' }`}>
                <div className={style.message_content}>
                    <div className={style.photo_container}>
                        <img src={photoUrl} alt={photoUrl} />
                        <div className={style.message_emoji} onClick={messageEmojisContainerToggelHandler}>{messageEmoji}</div>
                        <div className={style.message_state}>
                            <img src={trueIcon} alt="True icon" />
                        </div>
                    </div>
                    <div className={style.message_options}>
                        <img src={messageReactIcon} alt="Message react icon" onClick={messageEmojisContainerToggelHandler}/>
                        <img src={messageOptionsIcon} alt="Message options icon" onClick={messageOptionsContainerToggelHandler}/>
                    </div>
                    {
                        messageEmojisContainerOpen && 
                        <EmojiPicker onSelect={selectEmoji}/>
                    }
                    {
                        messageOptionsContainerOpen &&
                        <OptionsList deleteMessage={deleteMessageHandler} editeMessage={editeMessage} pinMessage={pinMessage} replayMessage={replayMessage}/>

                    }
                </div>
                <h3>{timestamp}</h3>
            </div>
        </>
    )
}
