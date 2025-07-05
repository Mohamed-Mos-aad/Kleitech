    // ** Hooks && Tools
    import axios, { AxiosProgressEvent } from "axios";



    // ** Api
    const api = axios.create({
        baseURL: import.meta.env.VITE_AI_API
    })



    // ** Ai
    export const clsPhoto = async (formData:FormData,onUploadProgress?: (progressEvent: AxiosProgressEvent) => void,signal?: AbortSignal)=>{
        try{
            const response = await api.post(`/analyze/`, formData,
                {responseType: 'blob',onUploadProgress,signal}
            );
            const contentType = response.headers['content-type'];
            const classification_result= response.headers["classification"];
            if (contentType.includes('application/json')) {
                const text = await response.data.text();
                const json = JSON.parse(text);
                return json
            } 
            else if (contentType.includes('image')) {
                const imageUrl = URL.createObjectURL(response.data);
                return {imageUrl,classification_result};
            }
        }
        catch(error){
            console.log(error)
        }
    }