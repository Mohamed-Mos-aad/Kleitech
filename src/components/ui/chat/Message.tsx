// ** Assets
import playIcon from '../../../assets/ui/chat/playIcon.svg'
import pauseIcon from '../../../assets/ui/chat/pauseIcon.svg'
// ** Style
import { useEffect, useRef, useState } from 'react';
import style from '../../../style/components/ui/chat/message.module.css'





// ** Interfaces
interface IMessage{
    senderId: string,
    voiceUrl: string | undefined,
    timestamp: string
}





export default function Message({senderId,timestamp,voiceUrl}:IMessage) {
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
    
        const updateProgress = () => {
            if (audioElement && audioStartd) {
                const value = (audioElement.currentTime / audioElement.duration) * 100;
                setAudioPlayerProgress(value);
    
                if (audioSliderRef.current) {
                    audioSliderRef.current.style.background = `linear-gradient(to right, var(--main-color-200) ${value}%, #fff ${value}%)`;
                    convertVoiceDurationHandler(audioPlayBackRef.current.currentTime);
                }
    
                animationFrameId = requestAnimationFrame(updateProgress);
                if(audioElement.currentTime === audioElement.duration)
                {
                    setAudioStarted(false);
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
    




    return (
        <>
            <div className={`${style.message} ${senderId.includes('doc') ? style.receiver : '' }`}>
                <div className={style.message_content}>
                    <div className={style.audio_player}>
                        <input type='range' ref={audioSliderRef} min={0} max={100} step={1} value={audioPlayerProgress} onChange={(e)=>{audioSliderHandler(e)}}/>
                        <audio src={voiceUrl} ref={audioPlayBackRef} controls style={{display:'none'}}></audio>
                        <h5>{audioDuration.minutes < 10 ? '0'+audioDuration.minutes : audioDuration.minutes}:{audioDuration.seconds < 10 ? '0'+audioDuration.seconds : audioDuration.seconds}</h5>
                        <img src={audioStartd? pauseIcon : playIcon} alt=""  onClick={voiceRecordStateToggleHandler}/>
                    </div>
                    <h3>{timestamp}</h3>
                </div>
            </div>
        </>
    )
}
