// ** Hooks && Tools
import axios from "axios";
// ** Interfaces
import { IAlarmData } from "../../interfaces";

const api = axios.create({
    baseURL: import.meta.env.VITE_LOCAL_SERVER_API_URL,
    headers:{
        'Content-Type': 'application/json',
    }
})





export const fetchAlarmData = async ()=>{
    try{
        const response = await api.get('/alarm');
        return response.data;
    }
    catch(error)
    {
        console.log(error);
    }
}

export const addAlarmData = async (data:IAlarmData)=>{
    try{
        const response = await api.post('/alarm',data);
        return response.data;
    }
    catch(error)
    {
        console.log(error);
    }
}