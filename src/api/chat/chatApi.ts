// ** Hooks && Tools
import axios from "axios";
// ** Interfaces
import { IChat, IMessage} from "../../interfaces";



// ** Api
const api = axios.create({
    baseURL: import.meta.env.VITE_LOCAL_SERVER_API_URL,
    headers:{
        'Content-Type': 'application/json',
    }
})



// ** Get chats
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
// ** New Chat
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
// ** Send Message
export const sendMessage = async (chatData:IChat,id:string) => {
    console.log('messagesended')
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
// ** Edit Message
export const editeMessage = async (message:IMessage,id:string) => {
    console.log('messageedited')
    try{
        const response = await api.put(`/chats/messages/${id}`, message);
        return response.data;
    }
    catch(error)
    {
        console.log(error);
        throw error;
    }
}
// ** Pin Message
export const pinMessage = async (message:IMessage,id:string) => {
    console.log('messageepined')
    try{
        const response = await api.put(`/chats/messages/${id}`, message);
        return response.data;
    }
    catch(error)
    {
        console.log(error);
        throw error;
    }
}
// ** Delete Message
export const deleteMessage = async (id:string) => {
    console.log('messagedeleted')
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