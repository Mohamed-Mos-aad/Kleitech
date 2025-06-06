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
// ** Interfaces
import { IMessage } from '../../interfaces'
import { uploadToCloudinary } from '../../api/chat/filesApi'



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
    const [recordingStatus,setRecordingStatus] = useState<'idle' | 'recording' | 'recorded'>('idle');


    // ** Refs
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
                setRecordingStatus('recorded');
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
                stream.getTracks().forEach(track => track.stop());
                setAttachment(new File([audioBlob], 'voice.wav'));
            };
    
            recorder.start();
            setMediaRecorder(recorder);
            setRecordStarted(true);
            setRecordingStatus('recording');
        } catch (error) {
            console.error("Error accessing the microphone", error);
            setRecordingStatus('idle');
        }
    };


    const handleSendMessage = async ()=>{
        if ((messageInputRef.current && messageInputRef.current.value.trim()) || attachment)
        {
            let message:IMessage = {
                messageId: `msg${chatLenght+1}`,
                senderId: senderId,
                receiverId: receiverId,
                timestamp: new Date().toISOString(),
                status: "delivered",
                type: 'text',
                reactions: []
            };
            

            if (attachment) {
                const fileName = attachment.name.toLowerCase();
                if (
                    attachment.type.startsWith('audio/') ||
                    fileName.endsWith('.wav') ||
                    fileName.endsWith('.mp3') ||
                    fileName.endsWith('.webm')
                ) {
                    console.log('audio')
                    try {
                        const audioUrl = await uploadToCloudinary(attachment);
                        message = {
                            ...message,
                            type: 'voice',
                            audioUrl: audioUrl
                        };
                    } catch (error) {
                        console.error('فشل في رفع الصوت إلى Cloudinary:', error);
                        alert('فشل في رفع الملف. حاول مجددًا.');
                        return;
                    }
                }
                else if (fileName.endsWith('.jpg') || fileName.endsWith('.jpeg') || fileName.endsWith('.png') || fileName.endsWith('.gif')) {
                    console.log('photo')
                    message = {
                        ...message,
                        type: 'image',
                        photoUrl: URL.createObjectURL(attachment)
                    };
                } else {
                    console.log('document')
                    message = {
                        ...message,
                        type: 'document',
                        file: attachment
                    };
                }
            } 
            else if (messageInputRef?.current?.value) {
                message = {
                    ...message,
                    type: 'text',
                    text: messageInputRef.current.value
                };
            }


            sendMessageHandler(message);
            messageInputRef.current!.value = '';
            setAttachment(null);
            setRecordStarted(false);
            setRecordingStatus("idle");
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
                        <img src={micIcon} onClick={startRecordHandler} className={`${recordingStatus=== 'recording'? `${style.recording}`: ''} ${recordingStatus === 'recorded' ? style.recorded : ''}`} alt="Mic icon" />
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
