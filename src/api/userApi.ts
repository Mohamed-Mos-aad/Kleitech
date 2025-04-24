import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers:{
        'Content-Type': 'application/json',
    }
})


export const registerUser = async (userData: unknown) => {
    try{
        const response = await api.post('/register', userData);
        console.log(response.data)
        return response.data;
    }
    catch(error)
    {
        console.log(error);
    }
}