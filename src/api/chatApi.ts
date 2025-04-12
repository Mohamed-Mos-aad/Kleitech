import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers:{
        'Content-Type': 'application/json',
    }
})


export const fetchMessages = async ()=>{
    try{
        const response = await api.get('/chats');
        return response.data;
    }
    catch(error)
    {
        console.log(error);
    }
}