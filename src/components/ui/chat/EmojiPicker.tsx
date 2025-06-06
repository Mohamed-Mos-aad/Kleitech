// ** Style
import style from '../../../style/components/ui/chat/message.module.css';
// ** Data
import emoji from 'emoji.json';



// ** Interfaces
interface MessageEmojiPickerProps {
    onSelect: (emoji: string) => void;
}



export default function EmojiPicker({ onSelect }: MessageEmojiPickerProps) {
    // ** Constant
    const emojis = [emoji[151],emoji[349],emoji[355],emoji[7],emoji[85],emoji[57]].reverse();



    return (
        <>
            <div className={style.message_emojis}>
                {emojis.map(emoji => <div onClick={()=>{onSelect(emoji.char)}} key={emoji.char}> {emoji.char}</div>)}
            </div>
        </>
    )
}
