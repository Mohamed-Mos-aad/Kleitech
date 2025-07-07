// ** Hooks && Tools
import axios from "axios";



// ** Api Instance Dynamic
const getApiInstance = () => {
    const storage = localStorage.getItem("kleitech_user") ? localStorage : sessionStorage;
    const userString = storage.getItem("kleitech_user");
    const token = userString ? JSON.parse(userString).token : null;

    return axios.create({
        baseURL: import.meta.env.VITE_BACKEND_API_URL,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    });
}



// ** Add Comment
export const addComment = async (userData: {user_id: number ,f_name: string,l_name: string,email: string,massage: string}) => {
    try{
        const api = getApiInstance();
        const response = await api.post('/comments', userData);
        return response.data;
    }
    catch(error)
    {
        console.log(error);
        throw error;
    }
}
// ** Get Comments
export const fetchComments = async () => {
    try{
        const api = getApiInstance();
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
        const api = getApiInstance();
        const response = await api.get(`/comments/${id}`);
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
        const api = getApiInstance();
        const response = await api.delete(`/comments/${id}`);
        return response.data;
    }
    catch(error)
    {
        console.log(error);
        throw error;
    }
}