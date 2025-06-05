// ** Hooks && Tools
import axios from "axios";
// ** Interfaces
import { IChat} from "../../interfaces";

const api = axios.create({
    baseURL: import.meta.env.VITE_LOCAL_SERVER_API_URL,
    headers:{
        'Content-Type': 'application/json',
    }
})


// ** chats
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


export const addChat = async (chatData:IChat) => {
    try{
        const response = await api.post('/chats', chatData);
        return response.data;
    }
    catch(error)
    {
        console.log(error);
        throw error;
    }
}

export const editeChat = async (chatData:IChat,id:string) => {
    try{
        const response = await api.put(`/chats/${id}`, chatData);
        return response.data;
    }
    catch(error)
    {
        console.log(error);
        throw error;
    }
}

export const deleteChat = async (id:string) => {
    try{
        const response = await api.delete(`/chats/${id}`);
        return response.data;
    }
    catch(error)
    {
        console.log(error);
        throw error;
    }
}