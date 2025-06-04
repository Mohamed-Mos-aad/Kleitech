// ** Assets
import { addAlarmData } from '../../../api/main/alarmApi';
import {genderIcon, clockIcon} from '../../../assets/icons/icons'
// ** Style
import style from '../../../style/pages/main/alarm.module.css'
// ** Components
import InputElement from '../../ui/InputElement'
// ** Hooks && Tools
import { useState } from 'react';


// ** Interfaces
import { IAlarmData } from '../../../interfaces';
interface IAlarmComponent{
    setAlarmPopOpened: ()=> void,
}



export default function WaterAlarm({setAlarmPopOpened}:IAlarmComponent) {
    // ** States
    const [data,setData] = useState<IAlarmData>({
        type: "Water",
        gender: "",
        wake_time: "",
        sleep_time: "",
        reminder_interval: ""
    });



    // ** Handlers
    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {value , id} = e.currentTarget;
        setData((prev)=>({
            ...prev,
            [id]: value
        }));
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
    const closeFormHandler = (e:React.FormEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        setAlarmPopOpened();
    }


    return (
        <>
            <form className={style.form}>
                <h1>التذكير بمواعيد المياه</h1>
                <InputElement name='النوع' error='' id='gender' img={{src: genderIcon, alt:''}} onChange={(e)=>{inputChangeHandler(e)}} type='text' value={data.gender ?? ''} placeholder='اختر النوع'/>
                <InputElement name='معاد الاستيقاظ' error='' id='wake_time' img={{src: clockIcon, alt:''}} onChange={(e)=>{inputChangeHandler(e)}} type='text' value={data.wake_time ?? ''} placeholder='اكتب الوقت'/>
                <InputElement name='معاد النوم' error='' id='sleep_time' img={{src: clockIcon, alt:''}} onChange={(e)=>{inputChangeHandler(e)}} type='text' value={data.sleep_time ?? ''} placeholder='اكتب الوقت'/>
                <InputElement name='التذكير كل' error='' id='reminder_interval' img={{src: clockIcon, alt:''}} onChange={(e)=>{inputChangeHandler(e)}} type='text' value={data.reminder_interval ?? ''} placeholder='اختر الوقت'/>
                <div className={style.form_btns}>
                    <button onClick={(e)=>{addAlarmHandler(e)}}>تذكير</button>     
                    <button onClick={(e)=>{closeFormHandler(e)}}>الغاء</button>
                </div>
            </form>
        </>
    )
}
