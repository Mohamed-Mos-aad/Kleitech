// ** Assets
import { useEffect, useState } from 'react'
import { clockIcon } from '../../../assets/icons/icons'
// ** Style
import style from '../../../style/components/ui/form/timeInputElement.module.css'
// ** Components
import InputElement from '../../ui/InputElement'



// ** Interfaces
interface ITimeInputElement{
    labelText: string,
    inputId: string,
    onChange: ({ target }: { target: { id: string; value: string } }) => void;
}

export default function TimeInputElement({onChange,inputId,labelText}:ITimeInputElement) {
    // ** States
    const [time,setTime] = useState({
        hour: 0,
        minute: 0,
        part: 'am'
    })
    const [timeListOpened,setTimeListOpened] = useState<boolean>(false);


    
    // ** Handlers
    const setTimeHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>)=>{
        const type = e.currentTarget.dataset.type as 'hour' | 'minute' | 'part';
        const value = e.currentTarget.innerText;
        const updatedTime = {
            ...time,
            [type]: type === 'part' ? value : parseInt(value),
        };
        const hour = updatedTime.part === 'pm' && updatedTime.hour !== 12
            ? updatedTime.hour + 12
            : updatedTime.part === 'am' && updatedTime.hour === 12
            ? 0
            : updatedTime.hour;
        const formattedTime = `${hour.toString().padStart(2, '0')}:${updatedTime.minute.toString().padStart(2, '0')}`;
        onChange({
            target: {
                id: inputId,
                value: formattedTime,
            }
        });
        setTime(updatedTime);
        setTimeListOpened(false);
    }



    useEffect(() => {
        if (time.hour && time.minute && time.part) {
            setTimeListOpened(false);
        }
    }, [time]);


    
    return (
        <>
            <div className={style.time_input_element}>
                <InputElement labelText={labelText} onClick={() => setTimeListOpened(true)} error='' id={inputId} name={inputId} img={{src: clockIcon, alt:''}} onChange={onChange} type='text' 
                    value={`${time.hour.toString().padStart(2, '0')}:${time.minute.toString().padStart(2, '0')} ${time.part}`} placeholder='اكتب الوقت'/>
                {
                    timeListOpened && 
                    <div className={style.time_list}>
                        <ul>
                            {['am', 'pm'].map(p => (
                                <li key={p} data-type="part" onClick={setTimeHandler}>{p}</li>
                            ))}
                        </ul>
                        <ul>
                            {[...Array(60).keys()].map((m, i) => (
                                <li key={i} onClick={setTimeHandler} data-type="minute">{m}</li>
                            ))}
                        </ul>
                        <ul>
                            {[...Array(12).keys()].map(h => (
                                <li key={h+1} data-type="hour" onClick={setTimeHandler}>{h+1}</li>
                            ))}
                        </ul>
                    </div>
                }
            </div>
        </>
    )
}
