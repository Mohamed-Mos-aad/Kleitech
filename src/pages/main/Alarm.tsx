// ** Assets
import waterIcon from '../../assets/main/remember/waterIcon.svg'
import medicineIcon from '../../assets/main/remember/medicineIcon.svg'
import xRayIcon from '../../assets/main/remember/xRayIcon.svg'
import addIcon from '../../assets/main/remember/addIcon.svg'
import optionsIcon from '../../assets/main/remember/optionsIcon.svg'
// ** Style
import style from '../../style/pages/main/alarm.module.css'
// ** Hooks && Tools
import { useEffect, useState } from 'react'
// ** Components
import WaterAlarm from '../../components/pages/main/WaterAlarm'
import MedicineAlarm from '../../components/pages/main/MedicineAlarm'
import XRayAlarm from '../../components/pages/main/XRayAlarm'
import { fetchAlarmData } from '../../api/main/alarmApi'



// ** Interfaces
interface IAlarmData{
    type: "Medicine"| "Water"| "xRay",
    name?: string,
    recurrence_count?: number,
    start_date?: string,
    start_time?: string,
    gender?: string,
    wake_time?: string,
    sleep_time?: string,
    reminder_interval?: string,
    weekly_sessions?: number,
    next_session_date?: string,
    session_time?: string,
}



export default function Alarm() {
    // ** States
    const [alarmTypeNavBarOpened,setAlarmTypeNavBarOpened] = useState<boolean>(false);
    const [alarmType,setAlarmType] = useState<{ type: JSX.Element, id: string }>({
        type: <></>,
        id: ''
    });
    const [alarmPopOpened,setAlarmPopOpened] = useState<boolean>(false);
    const [alarmData,setAlarmData] = useState<IAlarmData[]>([]);




    // ** Handlers
    const alarmTypeNavBarToggleHandler = ()=>{
        setAlarmTypeNavBarOpened(prev => !prev);
    }
    const changeAlarmTypeHandler = ({ type, id }: { type: JSX.Element, id: string })=>{
        setAlarmType({type,id});
        alarmTypeNavBarToggleHandler();
        setAlarmPopOpened(true);
    }



    // ** UseEffect
    useEffect(()=>{
        const loadAlarmsData = async ()=>{
            try{
                const userAlarmsData = await fetchAlarmData();
                setAlarmData(userAlarmsData)
            }
            catch(error){
                console.log(error)
            }
        }
        loadAlarmsData();
    },[])



    // ** Render
    const alarmDataRender = alarmData?.map(alarm=>{
        if(alarm.type === "Medicine")
        {
            return (
                <tr className={style.medicine_tr} key={alarm.name}>
                    <td>
                        <button>
                            <img src={optionsIcon} alt="options icon" />
                        </button>
                    </td>
                    <td>
                        <h2>اسم الدواء</h2>
                        <h3>{alarm.name}</h3>
                    </td>
                    <td>
                        <h2>عدد مرات التكرار</h2>
                        <h3>{alarm.recurrence_count}</h3>
                    </td>
                    <td>
                        <h2>ابتدءاً من</h2>
                        <h3>{alarm.start_date}</h3>
                    </td>
                    <td>
                        <h2>ابتدءاً من الساعه</h2>
                        <h3>{alarm.start_time}</h3>
                    </td>
                </tr>
            )
        }
        else if(alarm.type === "Water")
        {
            return (
                <tr className={style.water_tr} key={alarm.reminder_interval}>
                    <td>
                        <button>
                            <img src={optionsIcon} alt="options icon" />
                        </button>
                    </td>
                    <td>
                        <h2>النوع</h2>
                        <h3>{alarm.gender}</h3>
                    </td>
                    <td>
                        <h2>معاد الاستيقاظ</h2>
                        <h3>{alarm.wake_time}</h3>
                    </td>
                    <td>
                        <h2>معاد النوم</h2>
                        <h3>{alarm.sleep_time}</h3>
                    </td>
                    <td>
                        <h2>التذكير كل</h2>
                        <h3>{alarm.reminder_interval}</h3>
                    </td>
                </tr>
            )
        }
        else if(alarm.type === "xRay")
        {
            return (
                <tr className={style.xRay_tr} key={alarm.next_session_date}>
                    <td>
                        <button>
                            <img src={optionsIcon} alt="options icon" />
                        </button>
                    </td>
                    <td>
                        <h2>عدد الجلسات اسبوعياً</h2>
                        <h3>{alarm.weekly_sessions}</h3>
                    </td>
                    <td>
                        <h2>معاد الجلسه القادمه</h2>
                        <h3>{alarm.next_session_date}</h3>
                    </td>
                    <td>
                        <h2>الساعه</h2>
                        <h3>{alarm.session_time}</h3>
                    </td>
                </tr>
            )
        }
    })



    // ** Default
    const waterData = <WaterAlarm setAlarmPopOpened={()=>{setAlarmPopOpened(false)}}/>;
    const medicineData = <MedicineAlarm setAlarmPopOpened={()=>{setAlarmPopOpened(false)}}/>;
    const xRayData = <XRayAlarm setAlarmPopOpened={()=>{setAlarmPopOpened(false)}}/>;



    return (
        <>
        <div className={style.alarm}>
            <div className={style.alarm_navBar}>
                {
                    alarmTypeNavBarOpened &&
                    <ul className={style.alarm_type}>
                        <li>
                            <img className={alarmType.id === 'water' ? style.active : ''} src={waterIcon} alt="water icon" id='waterData' onClick={()=>{changeAlarmTypeHandler({type: waterData, id: 'water'})}}/>
                        </li>
                        <li>
                            <img className={alarmType.id === 'xRay' ? style.active : ''} src={xRayIcon} alt="xRay icon" id='xRayData' onClick={()=>{changeAlarmTypeHandler({type: xRayData, id: 'xRay'})}}/>
                        </li>
                        <li>
                            <img className={alarmType.id === 'medicine' ? style.active : ''} src={medicineIcon} alt="medicine icon" id='medicineData' onClick={()=>{changeAlarmTypeHandler({type: medicineData, id: 'medicine'})}}/>
                        </li>
                    </ul>
                }
                <div className={style.add_btn}>
                    <button onClick={alarmTypeNavBarToggleHandler}>
                        <img src={addIcon} alt="add button" />
                    </button>
                </div>
            </div>
            <div className={style.alarm_container}>
                {alarmPopOpened ? 
                    alarmType.type
                    : 
                    <table>
                        <tbody>
                            {alarmDataRender}
                        </tbody>
                    </table>
                }
            </div>
        </div>
        </>
    )
}
