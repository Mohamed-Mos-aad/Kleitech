// ** Assets
import imojySolidIcon from '../../assets/main/chat/imojySolidIcon.svg'
import sendIcon from '../../assets/main/chat/sendIcon.svg'
import studioIcon from '../../assets/main/chat/studioIcon.svg'
import attachFileIcon from '../../assets/main/chat/attachFileIcon.svg'
import micIcon from '../../assets/main/chat/micIcon.svg'
// ** Style
import style from '../../style/layouts/chatLayout.module.css'
// ** Hooks && Tools
import { useRef, useState } from 'react'
import { IMessage } from '../../interfaces'



// ** Interface
interface IChatFooter{
    emojyComponentStateToggleHandler: ()=> void,
    sendMessageHandler: (message: IMessage) => void,
    messageInputRef: React.RefObject<HTMLInputElement>,
    chatLenght: number,
    senderId: string,
    receiverId: string,
}




export default function ChatFooter({emojyComponentStateToggleHandler,sendMessageHandler,messageInputRef,chatLenght, receiverId, senderId}:IChatFooter) {
    // ** States
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
    const [recordStarted,setRecordStarted] = useState<boolean>(false);
    const [attachment, setAttachment] = useState<File | null>(null);


    // ** Refs
    const audioPlayBackRef = useRef<HTMLAudioElement>(null);
    const imgUploadRef = useRef<HTMLInputElement | null>(null);
    const fileUploadRef = useRef<HTMLInputElement | null>(null);

    

    // ** Handlers
    const fileUploadHandler = ()=>{
        fileUploadRef?.current?.click();
    }
    const imgUploadHandler = ()=>{
        imgUploadRef?.current?.click();
    }
    const startRecordHandler = async () => {
        
        if (recordStarted) {
            if (mediaRecorder) {
                mediaRecorder.stop();
                setRecordStarted(false);
            }
            return;
        }
    


        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const recorder = new MediaRecorder(stream);
            const audioChunks: BlobPart[] = [];
    

            recorder.ondataavailable = (event: BlobEvent) => {
                audioChunks.push(event.data);
            };
    
            recorder.onstop = () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                const audioUrl = URL.createObjectURL(audioBlob);

    
                
                if (audioPlayBackRef.current) {
                    audioPlayBackRef.current.src = audioUrl;
                }
    
                stream.getTracks().forEach(track => track.stop());
                setAttachment(new File([audioBlob], 'voice.wav'));
            };
    
            recorder.start();
            setMediaRecorder(recorder);
            setRecordStarted(true);
        } catch (error) {
            console.error("Error accessing the microphone", error);
        }
    };


    const handleSendMessage = ()=>{
        if (messageInputRef && messageInputRef.current || attachment)
        {
            const message:IMessage = {
                messageId: `msg${chatLenght+1}`,
                senderId: senderId,
                receiverId: receiverId,
                timestamp: new Date().toISOString(),
                status: "delivered",
                type: attachment ? 'file' : 'text',
                reactions: []
            };
                

            if (attachment) {
                message.type = attachment.type.startsWith('audio') ? 'voice' : 'file';
                message['file'] = attachment;
            } else if (messageInputRef?.current?.value) {
                message['text'] = messageInputRef.current.value;
            }


            sendMessageHandler(message);
            messageInputRef.current!.value = '';
            setAttachment(null);
        }
    }



    return (
        <>
            <div className={style.chat_footer}>
                <div className={style.send_input}>
                    <input type="text" placeholder='اكتب رسالتك' ref={messageInputRef} onKeyDown={(e) => {if (e.key === 'Enter') handleSendMessage()}}/>
                    <div className={style.imojy}>
                        <img src={imojySolidIcon} alt="Imojy solid icon" onClick={emojyComponentStateToggleHandler}/>
                    </div>
                    <div className={style.message_media}>
                        <img src={micIcon} onClick={startRecordHandler} className={recordStarted? `${style.delete_record}`: ''} alt="Mic icon" />
                        <input type="file" ref={fileUploadRef} style={{display:'none'}} accept='.pdf'/> 
                        <img src={attachFileIcon} alt="Attach File icon" onClick={fileUploadHandler} />
                        <input type="file" ref={imgUploadRef} style={{display:'none'}} accept='.jpg, .jpeg, .png, .gif'/> 
                        <img src={studioIcon} alt="Studio icon" onClick={imgUploadHandler}/>
                    </div>
                </div>
                <button onClick={handleSendMessage}>
                    <img src={sendIcon} alt="Send icon" />
                </button>
            </div>
        </>
    )
}
