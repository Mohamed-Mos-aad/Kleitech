import axios, { AxiosProgressEvent } from "axios";



export const uploadPhoto = async (formData:FormData,onUploadProgress?: (progressEvent: AxiosProgressEvent) => void,signal?: AbortSignal)=>{

    const apiKey = import.meta.env.VITE_UPLOAD_PHOTO_API_KEY;


    try{
        const response = await axios.post(`https://api.imgbb.com/1/upload?key=${apiKey}`, formData,
            {onUploadProgress,signal}
        );
        return response.data
    }
    catch(error){
        console.log(error)
    }
}