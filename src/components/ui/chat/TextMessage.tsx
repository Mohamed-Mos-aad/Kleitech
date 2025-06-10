// ** Assets
import messageReactIcon from '../../../assets/main/chat/messageReactIcon.svg'
import messageOptionsIcon from '../../../assets/main/chat/messageOptionsIcon.svg'
import trueIcon from '../../../assets/main/chat/trueIcon.svg'
// ** Style
import style from '../../../style/components/ui/chat/message.module.css'
// ** Hooks && Tools
import { useEffect, useState } from 'react'
// ** Api
import { deleteMessage } from '../../../api/chat/chatApi'
// ** Components
import EmojiPicker from './EmojiPicker'
import OptionsList from './OptionsList'
import { AppDispatch } from '../../../app/store'
import { useDispatch } from 'react-redux'
import { setChatDataS } from '../../../app/slices/chat/chatSlice'
import { IMessage } from '../../../interfaces'


// ** Interfaces
interface ITextMessage{
    senderId: string,
    messageId: string,
    text: string | undefined,
    timestamp: string,
    messages: IMessage[],
    message: IMessage,
}





export default function TextMessage({messages, message, senderId,messageId,timestamp,text}:ITextMessage) {
    // ** Store
    const dispatch: AppDispatch = useDispatch();

    // ** States
    const [messageEmoji,setMessageEmoji] = useState('');
    const [messageEmojisContainerOpen,setMessageEmojisContainerOpen] = useState(false);
    const [messageOptionsContainerOpen,setMessageOptionsContainerOpen] = useState(false);
    const [replayedMessage,setReplayedMessage] = useState<string | null>(null);






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
        messageOptionsContainerToggelHandler();
    }
    const deleteMessageHandler = async ()=>{
        try{
            await deleteMessage(messageId);
        }
        catch(error){
            console.log(error)
        }
        messageOptionsContainerToggelHandler();
    }


    useEffect(() => {
        if(message.isReplyTo !== null)
        {
            const getMessage = messages.find(msg => msg.messageId.trim() === message.isReplyTo?.trim());
            setReplayedMessage(getMessage?.text || null);
        }
    }, [message.isReplyTo, messages, message]);



    return (
        <>
            <div className={`${style.message} ${senderId.includes('doc') ? style.receiver : '' }`}>
                {replayedMessage && (
                    <div className={style.message_replay}>
                        <h5>{replayedMessage}</h5>
                    </div>
                )}
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
