import axios, { AxiosProgressEvent } from "axios";



export const uploadPhoto = async (formData:FormData,onUploadProgress?: (progressEvent: AxiosProgressEvent) => void,signal?: AbortSignal)=>{

const storage = localStorage.getItem("kleitech_user") ? localStorage : sessionStorage;
const userString = storage.getItem("kleitech_user");
const token = userString ? JSON.parse(userString).token : null;


    const api = axios.create({
        baseURL: import.meta.env.VITE_LOCAL_SERVER_LARAVEL_API_URL,
        headers:{
            // 'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
        }
    })

    try{
        console.log(storage);
        const response = await api.post(`send-image`, formData,
            {onUploadProgress,signal}
        );
        console.log('Upload successful:' +  response.data);
        return response.data
    }
    catch(error){
        console.log(error)
    }
}