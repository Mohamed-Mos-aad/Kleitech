// ** Style
import style from '../../style/layouts/chatLayout.module.css'
// ** Components
import VoiceMessage from '../../components/ui/chat/VoiceMessage'
import TextMessage from '../../components/ui/chat/TextMessage'
import PhotoMessage from '../../components/ui/chat/PhotoMessage'
// ** Utils
import { convertDateTypeHandler } from '../../utils/date'
// ** Interfaces
import { IChat, IMessage } from '../../interfaces'
import { deleteMessage, pinMessage } from '../../api/chat/chatApi'


// ** Interface 
interface IChatMessages{
    currentChat: IChat | undefined,
}



export default function ChatMessages({currentChat}:IChatMessages) {
    // ** States
    const messagesArray:IMessage[] = Array.isArray(currentChat?.messages) ? currentChat.messages : Object.values(currentChat?.messages || {});



    // ** Handlers
    const deleteCurrentMessageHandler =  async (chatId:string,messageId:string)=>{
            try{
                await deleteMessage(chatId,messageId);
            }
            catch(error){
                console.log(error)
            }
    }
    const pinCurrentMessageHandler = async (chatId: string, messageId: string, isPinned: boolean) => {
        try{
            await pinMessage(chatId,messageId,isPinned);
        }
        catch(error){
            console.log(error)
        }
    }



    // ** Render
    const chatMessagesRender = messagesArray.filter((_, index) => index !== 0).slice().reverse().map(message =>
    {
        if(message.type === 'text')
        {
            return(
                <TextMessage deleteCurrentMessageHandler={()=>{deleteCurrentMessageHandler(currentChat?.id ?? '',message.messageId)}}
                    pinCurrentMessageHandler={()=>{pinCurrentMessageHandler(currentChat?.id ?? '',message.messageId,true)}}
                    messages={messagesArray} message={message} key={message.messageId} senderId={message.senderId} messageId={message.messageId} timestamp={convertDateTypeHandler(message.timestamp)} text={message.text}/>
            )
        }
        else if (message.type === 'voice') {
            return (
                <VoiceMessage
                    deleteCurrentMessageHandler={()=>{deleteCurrentMessageHandler(currentChat?.id ?? '',message.messageId)}}
                    pinCurrentMessageHandler={()=>{pinCurrentMessageHandler(currentChat?.id ?? '',message.messageId,true)}}
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
                    deleteCurrentMessageHandler={()=>{deleteCurrentMessageHandler(currentChat?.id ?? '',message.messageId)}}
                    pinCurrentMessageHandler={()=>{pinCurrentMessageHandler(currentChat?.id ?? '',message.messageId,true)}}
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
