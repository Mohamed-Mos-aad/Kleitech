// ** Hooks && Tools
import axios from "axios";
// ** Interfaces
import { IAlarmData } from "../../interfaces";



// ** Local Storage
const storage = localStorage.getItem("kleitech_user") ? localStorage : sessionStorage;
const userString = storage.getItem("kleitech_user");
const token = userString ? JSON.parse(userString).token : null;


// ** Api
const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API_URL,
    headers:{
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    }
})



// ** Get Alarms
export const fetchAlarmData = async ()=>{
    try{
        const response = await api.get('/reminders');
        return response.data;
    }
    catch(error)
    {
        console.log(error);
    }
}
// ** Add Alarm
export const addAlarmData = async (type: string,data:IAlarmData)=>{
    try{
        const response = await api.post(`/${type}`,data);
        return response.data;
    }
    catch(error)
    {
        console.log(error);
    }
}
// ** Delete Alarm
export const deleteAlarm = async (type: string,id:string)=>{
    try{
        const response = await api.delete(`/${type.toLowerCase()}/delete/${id}`);
        return response.data;
    }
    catch(error)
    {
        console.log(error);
    }
}