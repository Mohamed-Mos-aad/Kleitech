// ** Assets
import { addAlarmData } from '../../../api/main/alarmApi';
import {clockIcon, repeatIcon, calendarIcon} from '../../../assets/icons/icons'
import { IAlarmData } from '../../../interfaces';
// ** Style
import style from '../../../style/pages/main/alarm.module.css'
// ** Components
import InputElement from '../../ui/InputElement'
// ** Hooks && Tools
import { useState } from 'react';



// ** Interfaces
interface IAlarmComponent{
    setAlarmPopOpened: ()=> void,
}



export default function XRayAlarm({setAlarmPopOpened}:IAlarmComponent) {
    // ** States
    const [data,setData] = useState<IAlarmData>({
        type: "xRay",
        weekly_sessions: 0,
        next_session_date: "",
        session_time: ""
    });



    // ** Handlers
    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {value , id} = e.currentTarget;
        setData((prev)=>({
            ...prev,
            [id]: value
        }));
        console.log(data);
    }
    const addAlarmHandler = async (e: React.FormEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        try{
            await addAlarmData(data);
        }
        catch(error){
            console.log(error)
        }
    }
    
    
    
    // ** Handlers
    const closeFormHandler = (e:React.FormEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        setAlarmPopOpened();
    }



    return (
        <>
            <form className={style.form}>
                <h1>التذكير بمواعيد الجلسات</h1>
                <InputElement labelText='عدد الجلسات اسبوعياً' error='' id='weekly_sessions' name='weekly_sessions' img={{src: repeatIcon, alt:''}} onChange={(e)=>{inputChangeHandler(e)}} type='text' value={data.weekly_sessions?.toString() ?? ''} placeholder='اختر العدد'/>
                <InputElement labelText='معاد الجلسه القادم' error='' id='next_session_date' name='next_session_date' img={{src: calendarIcon, alt:''}} onChange={(e)=>{inputChangeHandler(e)}} type='text' value={data.next_session_date ?? ''} placeholder='اكتب التاريخ'/>
                <InputElement labelText='في تمام الساعه' error='' id='session_time' name='session_time' img={{src: clockIcon, alt:''}} onChange={(e)=>{inputChangeHandler(e)}} type='text' value={data.session_time ?? ''} placeholder='اكتب الساعه'/>
                <div className={style.form_btns}>
                    <button onClick={(e)=>{addAlarmHandler(e)}}>تذكير</button>     
                    <button onClick={(e)=>{closeFormHandler(e)}}>الغاء</button>
                </div>
            </form>
        </>
    )
}