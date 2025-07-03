// ** Assets
import { addAlarmData } from '../../../api/main/alarmApi';
import {clockIcon, medicineIcon, repeatIcon, calendarIcon} from '../../../assets/icons/icons'
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



export default function MedicineAlarm({setAlarmPopOpened}:IAlarmComponent) {
    // ** States
    const [data,setData] = useState<IAlarmData>({
        type: "Medicine",
        name: "",
        recurrence_count: 0,
        start_date: "",
        start_time: ""
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
    
    
    
    // ** Handlers
    const closeFormHandler = (e:React.FormEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        setAlarmPopOpened();
    }



    return (
        <>
            <form className={style.form}>
                <h1>التذكير بمواعيد العلاج</h1>
                <InputElement labelText='اسم الدواء' error='' id='name' name='name' img={{src: medicineIcon, alt:''}} onChange={(e)=>{inputChangeHandler(e)}} type='text' value={data.name ?? ""} placeholder='ادخل اسم الدواء'/>
                <InputElement labelText='عدد المرات التكرار' error='' id='recurrence_count' name='recurrence_count' img={{src: repeatIcon, alt:''}} onChange={(e)=>{inputChangeHandler(e)}} type='text' value={data.recurrence_count?.toString() ?? ""} placeholder='ادخل عدد المرات'/>
                <InputElement labelText='الفتره الزمنيه' error='' id='start_date' name='start_date' img={{src: calendarIcon, alt:''}} onChange={(e)=>{inputChangeHandler(e)}} type='text' value={data.start_date ?? ""} placeholder='اختر الفتره'/>
                <InputElement labelText='تناول الدواء ابتداءاً من الساعه ' error='' id='start_time' name='start_time' img={{src: clockIcon, alt:''}} onChange={(e)=>{inputChangeHandler(e)}} type='text' value={data.start_time ?? ""} placeholder='اكتب الوقت'/>
                <div className={style.form_btns}>
                    <button onClick={(e)=>{addAlarmHandler(e)}}>تذكير</button>     
                    <button onClick={(e)=>{closeFormHandler(e)}}>الغاء</button>
                </div>
            </form>
        </>
    )
}