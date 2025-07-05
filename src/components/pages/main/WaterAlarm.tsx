// ** Assets
import { addAlarmData } from '../../../api/main/alarmApi';
import { genderIcon, clockIcon} from '../../../assets/icons/icons'
// ** Style
import style from '../../../style/pages/main/alarm.module.css'
// ** Components
import InputElement from '../../ui/InputElement'
import TimeInputElement from '../../ui/form/TimeInputElement';
import ListInputElement from '../../ui/form/ListInputElement';
// ** Hooks && Tools
import { useState } from 'react';


// ** Interfaces
import { IAlarmData } from '../../../interfaces';
interface IAlarmComponent{
    onSuccess: ()=> void,
    setAlarmPopOpened: ()=> void,
}



export default function WaterAlarm({setAlarmPopOpened,onSuccess}:IAlarmComponent) {
    const userTypeValues = ['ذكر', 'انثي'];



    // ** States
    const [data,setData] = useState<IAlarmData>({
        gender: "",
        wake_up_time: "",
        sleep_time: "",
        reminder_every: ""
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
            await addAlarmData('water',{...data,type:data.gender === 'ذكر' ? 'male' : 'female'});
            onSuccess();
            setAlarmPopOpened();
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
                <ListInputElement labelText='النوع' placeholder='اختر النوع' inputId='gender' listImg={genderIcon} values={userTypeValues} error={''} onChange={(e) => { inputChangeHandler(e)}}/>
                <TimeInputElement inputId='wake_up_time' labelText='معاد الاستيقاظ' onChange={(e) => { inputChangeHandler(e)}}/>
                <TimeInputElement inputId='sleep_time' labelText='معاد النوم' onChange={(e) => { inputChangeHandler(e)}}/>
                <InputElement labelText='التذكير كل' error='' id='reminder_every' name='reminder_every' img={{src: clockIcon, alt:''}} onChange={(e)=>{inputChangeHandler(e)}} type='text' value={data.reminder_every ?? ''} placeholder='اختر الوقت'/>
                <div className={style.form_btns}>
                    <button onClick={(e)=>{addAlarmHandler(e)}}>تذكير</button>     
                    <button onClick={(e)=>{closeFormHandler(e)}}>الغاء</button>
                </div>
            </form>
        </>
    )
}
