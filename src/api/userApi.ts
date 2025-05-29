// ** Hooks && Tools
import axios from "axios";
// ** Interfaces
import { ISignUpData } from "../interfaces";



const storage = localStorage.getItem("kleitech_user") ? localStorage : sessionStorage;
const userString = storage.getItem("kleitech_user");
const token = userString ? JSON.parse(userString).token : null;

const api = axios.create({
    baseURL: import.meta.env.VITE_LOCAL_SERVER_LARAVEL_API_URL,
    headers:{
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    }
})



export const registerUser = async (userData: ISignUpData) => {
    try{
        const formattedDate = new Date(userData.userDate).toISOString().split('T')[0];
        const apiData = {
            name: userData.userName,
            email: userData.userEmail,
            password: userData.userPassword,
            password_confirmation: userData.userPasswordConfirm,
            role: "patient",
            national_id: userData.userId,
            phone: userData.userPhone,
            weight: parseFloat(userData.userWeight) || 0,
            height: parseFloat(userData.userHeight) || 0,
            has_chronic_diseases: userData.hasIllnesses ? 1 : 0,
            is_following_with_doctor: userData.hasDoctor ? 1 : 0,
            diagnosis_date: formattedDate,
            disease_stage: userData.userState || "",
            latitude: "",
            longitude: "",
            specialization: null,
            experience: null,
            address: "Cairo, Egypt"
        };
        const response = await api.post('/register', apiData);
        return response.data;
    }
    catch(error)
    {
        console.log(error);
    }
}

export const loginUser = async (userData: {email: string, password: string}) => {
    try{
        const response = await api.post('/login', userData);
        return response.data;
    }
    catch(error)
    {
        console.log(error);
        throw error;
    }
}

export const changePassword = async (userData: {current_password: string,new_password: string,new_password_confirmation: string}) => {
    try{
        const response = await api.post('/change-password', userData);
        return response.data;
    }
    catch(error)
    {
        console.log(error);
        throw error;
    }
}

export const forgotPassword = async (userData: {email: string}) => {
    try{
        const response = await api.post('/change-password', userData);
        return response.data;
    }
    catch(error)
    {
        console.log(error);
        throw error;
    }
}
