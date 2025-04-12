import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers:{
        'Content-Type': 'application/json',
    }
})


export const fetchAdvices = async ()=>{
    try{
        const response = await api.get('/advices');
        return response.data;
    }
    catch(error)
    {
        console.log(error);
    }
}