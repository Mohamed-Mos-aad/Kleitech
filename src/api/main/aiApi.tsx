// ** Hooks && Tools
import axios, { AxiosProgressEvent } from "axios";



const api = axios.create({
    baseURL: import.meta.env.VITE_AI_API
})



export const clsPhoto = async (formData:FormData,onUploadProgress?: (progressEvent: AxiosProgressEvent) => void,signal?: AbortSignal)=>{
    try{
        const response = await api.post(`/upload-image`, formData,
            {onUploadProgress,signal}
        );
        console.log('Upload successful:' +  response.data);
        return response.data
    }
    catch(error){
        console.log(error)
    }
}