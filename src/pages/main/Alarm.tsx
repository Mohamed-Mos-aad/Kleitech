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
    import { deleteAlarm, fetchAlarmData } from '../../api/main/alarmApi'
    // ** Interfaces
    import { IAlarmData } from '../../interfaces'



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
        const deleteAlarmHandler = async (type:string ,id:string)=>{
            if(id !== undefined) {
                try{
                    await deleteAlarm(type,id);
                    loadAlarmsData();
                }
                catch(error){
                    console.log(error)
                }
            }
        }
        const loadAlarmsData = async ()=>{
            try{
                const userAlarmsData = await fetchAlarmData();
                const mergedAlarms = [
                    ...userAlarmsData.medications.map((item:IAlarmData) => ({ ...item, type: "Medicine" })),
                    ...userAlarmsData.waters.map((item:IAlarmData) => ({ ...item, type: "Water" })),
                    ...userAlarmsData.dialysis.map((item:IAlarmData) => ({ ...item, type: "xRay" })),
                ];
                setAlarmData(mergedAlarms);
            }
            catch(error){
                console.log(error)
            }
        }


        // ** UseEffect
        useEffect(()=>{
            loadAlarmsData();
        },[])


        
        // ** Render
        const alarmDataRender = alarmData?.map((alarm:IAlarmData)=>{
            if(alarm.type === "Medicine")
            {
                return (
                    <tr className={style.medicine_tr} key={alarm.type+alarm.id}>
                        <td>
                            <button>
                                <img src={optionsIcon} alt="options icon" 
                                onClick={() => {
                                    deleteAlarmHandler('medication', alarm.id ?? '');
                                }}/>
                            </button>
                        </td>
                        <td>
                            <h2>اسم الدواء</h2>
                            <h3>{alarm.medicine_name}</h3>
                        </td>
                        <td>
                            <h2>عدد مرات التكرار</h2>
                            <h3>{alarm.dose_count}</h3>
                        </td>
                        <td>
                            <h2>ابتدءاً من</h2>
                            <h3>{alarm.period}</h3>
                        </td>
                        <td>
                            <h2>ابتدءاً من الساعه</h2>
                            <h3>{alarm.time}</h3>
                        </td>
                    </tr>
                )
            }
            else if(alarm.type === "Water")
            {
                return (
                    <tr className={style.water_tr} key={alarm.type+alarm.id}>
                        <td>
                            <button>
                                <img src={optionsIcon} alt="options icon" 
                                onClick={() => {
                                    deleteAlarmHandler('water', alarm.id ?? '');
                                }}/>
                            </button>
                        </td>
                        <td>
                            <h2>النوع</h2>
                            <h3>شرب الماء</h3>
                        </td>
                        <td>
                            <h2>معاد الاستيقاظ</h2>
                            <h3>{alarm.wake_up_time}</h3>
                        </td>
                        <td>
                            <h2>معاد النوم</h2>
                            <h3>{alarm.sleep_time}</h3>
                        </td>
                        <td>
                            <h2>التذكير كل</h2>
                            <h3>{alarm.reminder_every}</h3>
                        </td>
                    </tr>
                )
            }
            else if(alarm.type === "xRay")
            {
                return (
                    <tr className={style.xRay_tr} key={alarm.type+alarm.id}>
                        <td>
                            <button>
                                <img src={optionsIcon} alt="options icon" 
                                onClick={() => {
                                    deleteAlarmHandler('dialysis' , alarm.id ?? '');
                                }}/>
                            </button>
                        </td>
                        <td>
                            <h2>عدد الجلسات اسبوعياً</h2>
                            <h3>{alarm.sessions_per_week}</h3>
                        </td>
                        <td>
                            <h2>معاد الجلسه القادمه</h2>
                            <h3>{alarm.start_date}</h3>
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
        const waterData = <WaterAlarm setAlarmPopOpened={()=>{setAlarmPopOpened(false)}} onSuccess={loadAlarmsData}/>;
        const medicineData = <MedicineAlarm setAlarmPopOpened={()=>{setAlarmPopOpened(false)}} onSuccess={loadAlarmsData}/>;
        const xRayData = <XRayAlarm setAlarmPopOpened={()=>{setAlarmPopOpened(false)}} onSuccess={loadAlarmsData}/>;



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
