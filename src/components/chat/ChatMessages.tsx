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
                <TextMessage messages={currentChat.messages} message={message} key={message.messageId} senderId={message.senderId} messageId={message.messageId} timestamp={convertDateTypeHandler(message.timestamp)} text={message.text}/>
            )
        }
        else if (message.type === 'voice') {
            return (
                <VoiceMessage
                    key={message.messageId}
                    messageId={message.messageId}
                    senderId={message.senderId}
                    timestamp={convertDateTypeHandler(message.timestamp)}
                    voiceUrl={message.audioUrl}
                />
            );
        } else if (message.type === 'image') {
            return (
                <PhotoMessage
                    key={message.messageId}
                    messageId={message.messageId}
                    senderId={message.senderId}
                    timestamp={convertDateTypeHandler(message.timestamp)}
                    photoUrl={message.photoUrl}
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
