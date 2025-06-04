// ** Hooks && Tools
import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_LOCAL_SERVER_LARAVEL_API_URL,
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