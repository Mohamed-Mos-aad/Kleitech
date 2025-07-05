// ** Assets
import { addAlarmData } from '../../../api/main/alarmApi';
import { repeatIcon } from '../../../assets/icons/icons'
import { IAlarmData } from '../../../interfaces';
// ** Style
import style from '../../../style/pages/main/alarm.module.css'
import DateInputElement from '../../ui/form/DateInputElement';
import TimeInputElement from '../../ui/form/TimeInputElement';
// ** Components
import InputElement from '../../ui/InputElement'
// ** Hooks && Tools
import { useState } from 'react';



// ** Interfaces
interface IAlarmComponent{
    onSuccess: ()=> void,
    setAlarmPopOpened: ()=> void,
}



export default function XRayAlarm({setAlarmPopOpened,onSuccess}:IAlarmComponent) {
    // ** States
    const [data,setData] = useState<IAlarmData>({
        sessions_per_week: 0,
        start_date: "",
        session_time: ""
    });



    // ** Handlers
    const inputChangeHandler = (e: { target: { id: string; value: string } })=>{
        const {value , id} = e.target;
        setData((prev)=>({
            ...prev,
            [id]: value
        }));
    }
    const addAlarmHandler = async (e: React.FormEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        try{
            if(!data.start_date) return;
            const [day, month, year] = data.start_date.split('/');
            const formattedDate = `${year}-${month}-${day}`;

            await addAlarmData('dialysis',{...data,start_date: formattedDate});
            onSuccess();

            setAlarmPopOpened();
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
                <InputElement labelText='عدد الجلسات اسبوعياً' error='' id='sessions_per_week' name='sessions_per_week' img={{src: repeatIcon, alt:''}} onChange={(e)=>{inputChangeHandler(e)}} type='text' value={data.sessions_per_week?.toString() ?? ''} placeholder='اختر العدد'/>
                <DateInputElement inputId='start_date' labelText='معاد الجلسه القادم'  placeholder='اكتب التاريخ' error={''} onChange={(e) => { inputChangeHandler(e)}}/>
                <TimeInputElement inputId='session_time' labelText='في تمام الساعه' onChange={(e) => { inputChangeHandler(e)}}/>
                <div className={style.form_btns}>
                    <button onClick={(e)=>{addAlarmHandler(e)}}>تذكير</button>     
                    <button onClick={(e)=>{closeFormHandler(e)}}>الغاء</button>
                </div>
            </form>
        </>
    )
}