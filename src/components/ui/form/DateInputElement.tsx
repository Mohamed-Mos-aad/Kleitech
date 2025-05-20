// ** Assets
import {userDateIcon} from '../../../assets/icons/icons'
// ** Style
import style from '../../../style/pages/auth/signUp.module.css'
// ** Hooks & Tools
import { useEffect, useRef, useState } from 'react';



// ** Interface
interface IDateInputElement{
    error: string,
    onChange: ({ target }: { target: { id: string; value: string } }) => void;
}




// ** Constans
const initialDate = {
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
}




export default function DateInputElement({error,onChange}:IDateInputElement) {
    // ** States
    const [calendarOpened,setCalendarOpened] = useState(false);
    const [userDate, setUserDate] = useState('');
    const [currentMonth,setCurrentMonth] = useState(initialDate.month);
    const [currentYear,setCurrentYear] = useState(initialDate.year);
    const [selectedDay,setSelectedDay] = useState<number>(initialDate.day);
    const calendarRef = useRef<HTMLDivElement>(null);


    // ** Handlers
    const toggleHandler = ()=>{setCalendarOpened(!calendarOpened)};
    const selectHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const day = e.currentTarget.innerText;
        const newDate = `${day.padStart(2, '0')}/${(currentMonth + 1).toString().padStart(2, '0')}/${currentYear}`;
        setUserDate(newDate);
        setSelectedDay(Number(day));
        setCalendarOpened(false);
        const event = {
            target: {
                id: 'userDate',
                value: newDate
            }
        }
        onChange(event);
    }
    const getMonthDaysHandler = (month:number,year:number)=>{
        return new Date(year,month,0).getDate();
    }
    const getMonthsNameHandler = (month:number)=>{
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return months[month]
    }
    const changeMonthHandler = (nextMonth:boolean)=>{
        if(nextMonth)
        {
            if (currentMonth === 11) 
            {
                setCurrentMonth(0);
                setCurrentYear(currentYear + 1);
            } 
            else{
                setCurrentMonth(currentMonth + 1);
            }
        }
        else
        {
            if (currentMonth === 0)
            {
                setCurrentMonth(11);
                setCurrentYear(currentYear - 1);
            }
            else
            {
                setCurrentMonth(currentMonth - 1);
            }
        }
    }
    const goToNextMonthHandler = ()=>changeMonthHandler(true);
    const goToPrevMonthHandler = ()=>changeMonthHandler(false);

    const totalDaysInMonth = getMonthDaysHandler(currentMonth + 1, currentYear);
    const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();





    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (calendarRef.current && !calendarRef.current.contains(e.target as Node)) {
                setCalendarOpened(false);
            }
        };

        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);


    return (
        <>
            <div className={style.form_date_input}>
                <label htmlFor="userDate">تاريخ التشخيص</label>
                <div className={style.input_element} ref={calendarRef}>
                    <input type="text" value={userDate} placeholder='التاريخ' readOnly onClick={toggleHandler}/>
                    {
                        calendarOpened &&
                        <div className={style.calendar}>
                            <div className={style.calendar_option}>
                                <span onClick={goToNextMonthHandler}>{'<'}</span>                                
                                <h1>{getMonthsNameHandler(currentMonth)} {currentYear}</h1>
                                <span onClick={goToPrevMonthHandler}>{'>'}</span>
                            </div>
                            <div className={style.calendar_data}>
                                <div className={style.days_name}>
                                    <ul>
                                        <li>Su</li>
                                        <li>Mo</li>
                                        <li>Tu</li>
                                        <li>We</li>
                                        <li>Th</li>
                                        <li>Fr</li>
                                        <li>Sa</li>
                                    </ul>
                                </div>
                                <div className={style.calendar_days}>
                                    <ul>
                                    {[...Array(firstDayOfWeek)].map((_, i) => <li key={`empty-${i}`}></li>)}
                                    {[...Array(totalDaysInMonth).keys()].map((day) => (
                                    <li 
                                        key={day} 
                                        onClick={selectHandler}
                                        className={selectedDay === day + 1 ? style.selected : ''}
                                    >
                                        {day + 1}
                                    </li>
                                    ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }
                    <img src={userDateIcon} alt="User date icon"/>
                </div>
                <span className={style.error}>{error}</span>
            </div>
        </>
    )
}
