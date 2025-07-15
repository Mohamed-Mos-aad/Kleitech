// ** Style
import style from '../style/layouts/mainLayout.module.css'
// ** Components
import NavBar from "../components/navbar/NavBar";
// ** Hooks && Tools
import { Outlet, useNavigate } from "react-router-dom";
import { checkAndRedirectReminder } from '../utils/alarmReminder';
import { useEffect, useState } from 'react';
// ** Api
import { fetchAlarmData } from '../api/main/alarmApi';
// ** Interfaces
import { IAlarmData } from '../interfaces';




export default function MainLayout() {
    // ** Defaults
    const navigate = useNavigate();
    
    
    
    // ** States
    const [alarmData,setAlarmData] = useState<IAlarmData[]>([]);



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
    useEffect(() => {
        const interval = setInterval(() => {
            checkAndRedirectReminder(alarmData, navigate);
        }, 60 * 1000);
        return () => clearInterval(interval);
    }, [alarmData,navigate]);


    
    return (
        <>
            <div className={style.main_layout}>
                <NavBar />
                <div className={style.pages}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}
