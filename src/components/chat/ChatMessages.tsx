// ** Style
import style from '../../style/layouts/chatLayout.module.css'
// ** Components
import VoiceMessage from '../../components/ui/chat/VoiceMessage'
import TextMessage from '../../components/ui/chat/TextMessage'
import PhotoMessage from '../../components/ui/chat/PhotoMessage'
// ** Utils
import { convertDateTypeHandler } from '../../utils/date'
// ** Interfaces
import { IChat } from '../../interfaces'


// ** Interface 
interface IChatMessages{
    currentChat: IChat | undefined,
}



export default function ChatMessages({currentChat}:IChatMessages) {
    // ** Render
    const chatMessagesRender = currentChat?.messages.slice().reverse().map(message =>
    {
        if(message.type === 'text')
        {
            return(
                <TextMessage chatId={currentChat.id} senderId={message.senderId} messageId={message.messageId} timestamp={convertDateTypeHandler(message.timestamp)} text={message.text} key={message.messageId}/>
            )
        }
        else if (message.type === 'voice') {
            return (
                <VoiceMessage
                    key={message.messageId}
                    senderId={message.senderId}
                    timestamp={convertDateTypeHandler(message.timestamp)}
                    voiceUrl={message.file ? URL.createObjectURL(message.file) : message.file}
                />
            );
        } else if (message.type === 'file') {
            return (
                <PhotoMessage
                    key={message.messageId}
                    senderId={message.senderId}
                    timestamp={convertDateTypeHandler(message.timestamp)}
                    photoUrl={message.file ? URL.createObjectURL(message.file) : message.file}
                />
            );
        }
    
        return null;
    });





    return (
        <>
            <div className={style.chat_messages_content}>
                {chatMessagesRender}
            </div>
        </>
    )
}
