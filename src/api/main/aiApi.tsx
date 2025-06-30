// ** Hooks && Tools
import axios, { AxiosProgressEvent } from "axios";



// ** Api
const api = axios.create({
    baseURL: import.meta.env.VITE_AI_CLS_API
})



// ** Ai classification Photos
export const clsPhoto = async (formData:FormData,onUploadProgress?: (progressEvent: AxiosProgressEvent) => void,signal?: AbortSignal)=>{
    try{
        const response = await api.post(`/upload-image`, formData,
            {onUploadProgress,signal}
        );
        return response.data
    }
    catch(error){
        console.log(error)
    }
}
// ** Ai detection Photos
export const detPhoto = async (formData:FormData,onUploadProgress?: (progressEvent: AxiosProgressEvent) => void,signal?: AbortSignal)=>{
    try{
        const response = await api.post(`/predict`, formData,
            {onUploadProgress,signal}
        );
        return response.data
    }
    catch(error){
        console.log(error)
    }
}