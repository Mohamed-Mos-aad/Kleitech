// ** Hooks && Tools
import axios from "axios";



// ** Api
const api = axios.create({
    baseURL: import.meta.env.VITE_UPLOAD_Files_API_KEY
})



// ** Upload File
export const uploadToCloudinary = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'Kleitech');
    formData.append('cloud_name', 'dmmjv26he');
    try{
        const response = await api.post('/upload',formData);
        return response.data.secure_url;
    }
    catch(error)
    {
        console.log(error);
    }
};