// ** Assets
import flagsIcon from '../../assets/ui/flagsIcon.svg'
import symbolsIcon from '../../assets/ui/symbolsIcon.svg'
import objectsIcon from '../../assets/ui/objectsIcon.svg'
import activityIcon from '../../assets/ui/activityIcon.svg'
import travelPlacesIcon from '../../assets/ui/travel&PlacesIcon.svg'
import foodDrinkIcon from '../../assets/ui/food&DrinkIcon.svg'
import animalsNatureIcon from '../../assets/ui/animals&NatureIcon.svg'
import smileysEmotionIcon from '../../assets/ui/smileys&PeopleIcon.svg'
// ** Style
import style from '../../style/components/ui/emojyPicker.module.css'
// ** Hooks && Tools
import { useState } from 'react'
import emoji from 'emoji.json'



// ** Interfaces
interface IEmojiPicker{
    addEmojiHandler: (emoji:string)=> void
}





export default function EmojyPicker({addEmojiHandler}:IEmojiPicker) {
    // ** States
    const [emojisData,setEmojisData] = useState(emoji.filter(emojiItem => emojiItem.group === 'Smileys & Emotion' || emojiItem.group === 'People & Body'));
    const [groupTitle,setGroupTitle] = useState<string>('Smileys & Emotion');




    // ** Handlers
    const changeEmojisListHandler = (e:React.MouseEvent<HTMLLIElement, MouseEvent>)=>{
        const groupName = e.currentTarget.id;
        setGroupTitle(e.currentTarget.id)
        setEmojisData(emoji.filter(emojiItem => groupName.includes(emojiItem.group)));
    }






    // ** Render
    const emojiListRender = emojisData.map(item=> <li key={item.codes} onClick={()=>{addEmojiHandler(item.char)}}>{item.char}</li>)







    return (
        <>
            <div className={style.emojy_component}>
                <h1>{groupTitle}</h1>
                <div className={style.emojisList}>
                    <ul>
                        {emojiListRender}
                    </ul>
                </div>
                <nav className={style.emojisGroups}>
                    <ul>
                        <li id='Flags' onClick={(e)=>{changeEmojisListHandler(e)}}>
                            <img src={flagsIcon} alt="Flags icon"/>
                        </li>
                        <li id='Symbols' onClick={(e)=>{changeEmojisListHandler(e)}}>
                            <img src={symbolsIcon} alt="Symbols icon"/>
                        </li>
                        <li id='Objects Component' onClick={(e)=>{changeEmojisListHandler(e)}}>
                            <img src={objectsIcon} alt="Objects icon"/>
                        </li>
                        <li id='Activities' onClick={(e)=>{changeEmojisListHandler(e)}}>
                            <img src={activityIcon} alt="Activity icon"/>
                        </li>
                        <li id='Travel & Places' onClick={(e)=>{changeEmojisListHandler(e)}}>
                            <img src={travelPlacesIcon} alt="Travel Places icon"/>
                        </li>
                        <li id='Food & Drink' onClick={(e)=>{changeEmojisListHandler(e)}}>
                            <img src={foodDrinkIcon} alt="Food & Drink icon"/>
                        </li>
                        <li id='Animals & Nature' onClick={(e)=>{changeEmojisListHandler(e)}}>
                            <img src={animalsNatureIcon} alt="Animals & Nature icon"/>
                        </li>
                        <li id='Smileys & Emotion People & Body' onClick={(e)=>{changeEmojisListHandler(e)}}>           
                            <img src={smileysEmotionIcon} alt="Smileys & Emotion icon"/>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
