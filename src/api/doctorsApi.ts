import axios from "axios"

const api = axios.create({
    baseURL: import.meta.env.VITE_STATIC_API_URL,
    headers:{
        'Content-Type': 'application/json',
    }
})


export const fetchDoctors = async ()=>{
    try{
        const response = await api.get('/doctors');
        return response.data;
    }
    catch(error)
    {
        console.log(error);
    }
}