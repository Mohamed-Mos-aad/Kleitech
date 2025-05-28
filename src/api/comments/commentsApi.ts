// ** Hooks && Tools
import axios from "axios";



const storage = localStorage.getItem("kleitech_user") ? localStorage : sessionStorage;
const userString = storage.getItem("kleitech_user");
const token = userString ? JSON.parse(userString).token : null;

const api = axios.create({
    baseURL: import.meta.env.VITE_LOCAL_SERVER_LARAVEL_API_URL,
    headers:{
        Authorization: `Bearer ${token}`,
    }
})



export const addComment = async (userData: {f_name: string,l_name: string,email: string,massage: string}) => {
    try{
        const response = await api.post('/comments', userData);
        return response.data;
    }
    catch(error)
    {
        console.log(error);
        throw error;
    }
}