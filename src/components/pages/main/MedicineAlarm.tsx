// ** Assets
import { addAlarmData } from '../../../api/main/alarmApi';
import { medicineIcon, repeatIcon} from '../../../assets/icons/icons'
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



export default function MedicineAlarm({setAlarmPopOpened,onSuccess}:IAlarmComponent) {
    // ** States
    const [data,setData] = useState<IAlarmData>({
        medicine_name: "",
        dose_count: 0,
        period: "",
        time: ""
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
            await addAlarmData('medication',data);
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
                <h1>التذكير بمواعيد العلاج</h1>
                <InputElement labelText='اسم الدواء' error='' id='medicine_name' name='medicine_name' img={{src: medicineIcon, alt:''}} onChange={(e)=>{inputChangeHandler(e)}} type='text' value={data.medicine_name ?? ""} placeholder='ادخل اسم الدواء'/>
                <InputElement labelText='عدد المرات التكرار' error='' id='dose_count' name='dose_count' img={{src: repeatIcon, alt:''}} onChange={(e)=>{inputChangeHandler(e)}} type='text' value={data.dose_count?.toString() ?? ""} placeholder='ادخل عدد المرات'/>
                <DateInputElement inputId='period' labelText='الفتره الزمنيه'  placeholder='اكتب التاريخ' error={''} onChange={(e) => { inputChangeHandler(e)}}/>
                <TimeInputElement inputId='time' labelText='تناول الدواء ابتداءاً من الساعه ' onChange={(e) => { inputChangeHandler(e)}}/>
                <div className={style.form_btns}>
                    <button onClick={(e)=>{addAlarmHandler(e)}}>تذكير</button>     
                    <button onClick={(e)=>{closeFormHandler(e)}}>الغاء</button>
                </div>
            </form>
        </>
    )
}