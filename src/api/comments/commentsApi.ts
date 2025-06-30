// ** Hooks && Tools
import axios from "axios";



// ** Api
const api = axios.create({
    baseURL: import.meta.env.VITE_LOCAL_SERVER_LARAVEL_API_URL,
})



// ** Get Comments
export const getComments = async () => {
    try{
        const response = await api.get('/comments');
        return response.data;
    }
    catch(error)
    {
        console.log(error);
        throw error;
    }
}
// ** Get Comment By Id
export const getSpecialComment = async (id:string) => {
    try{
        const response = await api.get(`/comments${id}`);
        return response.data;
    }
    catch(error)
    {
        console.log(error);
        throw error;
    }
}
// ** Add Comment
export const addComment = async (userData: {user_id: number ,f_name: string,l_name: string,email: string,massage: string}) => {
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
// ** Delete Comment
export const deleteSpecialComment = async (id:string) => {
    try{
        const response = await api.delete(`/comments${id}`);
        return response.data;
    }
    catch(error)
    {
        console.log(error);
        throw error;
    }
}