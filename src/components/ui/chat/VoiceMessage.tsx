// ** Assets
import playIcon from '../../../assets/ui/chat/playIcon.svg'
import pauseIcon from '../../../assets/ui/chat/pauseIcon.svg'
import messageReactIcon from '../../../assets/main/chat/messageReactIcon.svg'
import messageOptionsIcon from '../../../assets/main/chat/messageOptionsIcon.svg'
import trueIcon from '../../../assets/main/chat/trueIcon.svg'
// ** Style
import { useEffect, useRef, useState } from 'react';
import style from '../../../style/components/ui/chat/message.module.css'
import emoji from 'emoji.json';





// ** Interfaces
interface IVoiceMessage{
    senderId: string,
    voiceUrl: string | undefined,
    timestamp: string
}





export default function VoiceMessage({senderId,timestamp,voiceUrl}:IVoiceMessage) {
    // ** States
    const [audioPlayerProgress,setAudioPlayerProgress] = useState(0);
    const [audioStartd,setAudioStarted] = useState<boolean>(false);
    const [audioDuration,setAudioDuration] = useState({
        minutes: 0,
        seconds: 0
    })





    // ** Refs
    const audioSliderRef = useRef<HTMLInputElement>(null);
    const audioPlayBackRef = useRef<HTMLAudioElement>(null);





    // ** Handler
    const audioSliderHandler = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        setAudioPlayerProgress(Number(value));
        if (audioSliderRef.current) 
        {
            audioSliderRef.current.style.background = `linear-gradient(to right, var(--main-color-200) ${value}%, #fff ${value}%)`;
        }

        const duration = audioPlayBackRef.current?.duration;
        if (audioPlayBackRef.current) 
        {
            audioPlayBackRef.current.currentTime = (Number(value) / 100) * duration!;
        }
    };

    const voiceRecordStateToggleHandler = ()=>{
        if(!audioStartd)
        {
            audioPlayBackRef?.current?.play();
        }
        else
        {
            audioPlayBackRef?.current?.pause();
        }
        setAudioStarted(!audioStartd);
    }

    const convertVoiceDurationHandler = (duration:number)=>{
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        setAudioDuration({
            minutes: minutes,
            seconds: seconds
        })
    }




    useEffect(() => {
        const audioElement = audioPlayBackRef.current;
        let animationFrameId: number | null = null;
        if (audioElement) {
            convertVoiceDurationHandler(audioElement.currentTime);
        }

        const updateProgress = () => {
            if (audioElement && audioStartd) {
                const value = (audioElement.currentTime / audioElement.duration) * 100;
                setAudioPlayerProgress(value);
    
                if (audioSliderRef.current) {
                    audioSliderRef.current.style.background = `linear-gradient(to right, var(--main-color-200) ${value}%, #fff ${value}%)`;
                    convertVoiceDurationHandler(audioPlayBackRef.current.currentTime);
                }
    
                animationFrameId = requestAnimationFrame(updateProgress);
                if(audioElement.currentTime === audioElement.duration && audioSliderRef.current)
                {
                    setAudioStarted(false);
                    audioElement.currentTime = 0;
                    audioSliderRef.current.style.background = `white`;
                    setAudioPlayerProgress(0);
                    audioPlayBackRef?.current?.pause();
                }
            }
        };
    
        if (audioStartd) {
            animationFrameId = requestAnimationFrame(updateProgress);
        } else if (animationFrameId !== null) {
            cancelAnimationFrame(animationFrameId);
        }
    
        return () => {
            if (animationFrameId !== null) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [audioStartd, audioPlayBackRef]);
    





    useEffect(()=>{
        const audioElement = audioPlayBackRef.current;
        if (audioElement) {
            audioElement.addEventListener('loadedmetadata', () => {
                convertVoiceDurationHandler(audioElement.duration);
            });
        }
    },[audioPlayBackRef])





    // ** States
    const emojis = [emoji[151],emoji[349],emoji[355],emoji[7],emoji[85],emoji[57]].reverse();
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

    


    return (
        <>
            <div className={`${style.message} ${senderId.includes('doc') ? style.receiver : '' }`}>
                <div className={style.message_content}>
                    <div className={style.audio_player}>
                        <input type='range' ref={audioSliderRef} min={0} max={100} step={1} value={audioPlayerProgress} onChange={(e)=>{audioSliderHandler(e)}}/>
                        <audio src={voiceUrl} ref={audioPlayBackRef} controls style={{display:'none'}}></audio>
                        <h5>{audioDuration.minutes < 10 ? '0'+audioDuration.minutes : audioDuration.minutes}:{audioDuration.seconds < 10 ? '0'+audioDuration.seconds : audioDuration.seconds}</h5>
                        <img src={audioStartd? pauseIcon : playIcon} alt=""  onClick={voiceRecordStateToggleHandler}/>
                        <div className={style.message_emoji}>{messageEmoji}</div>
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
                        <div className={style.message_emojis}>
                            {emojis.map(emoji => <div onClick={()=>{selectEmoji(emoji.char)}}> {emoji.char}</div>)}
                        </div>
                    }
                    {
                        messageOptionsContainerOpen &&
                        <div className={style.message_options_list}>
                            <ul>
                                <li>رد</li>
                                <li>تعديل الرساله</li>
                                <li>تثبيت في المحادثه</li>
                                <li>مسج الرساله</li>
                            </ul>
                        </div>
                    }
                </div>
                <h3>{timestamp}</h3>
            </div>
        </>
    )
}
