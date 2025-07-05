// ** Hooks && Tools
import axios from "axios";
// ** Interfaces
import { ISignUpData } from "../../interfaces";



// ** Local Storage
const storage = localStorage.getItem("kleitech_user") ? localStorage : sessionStorage;
const userString = storage.getItem("kleitech_user");
const token = userString ? JSON.parse(userString).token : null;



// ** Api
const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API_URL,
    headers:{
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    }
})



// ** Register User
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
// ** Login User
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
// ** Change Password
export const changePassword = async (userData: {current_password: string,new_password: string,new_password_confirmation: string}) => {
    try{
        const storage = localStorage.getItem("kleitech_user") ? localStorage : sessionStorage;
        const userString = storage.getItem("kleitech_user");
        const token = userString ? JSON.parse(userString).token : null;
            
        const response = await api.post('/change-password', userData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }
    catch(error)
    {
        console.log(error);
        throw error;
    }
}
// ** Forget Password
export const forgetPassword = async (userData: {email: string}) => {
    try{
        const response = await api.post('/forgot-password', userData);
        return response.data;
    }
    catch(error)
    {
        console.log(error);
        throw error;
    }
}
// ** Verify Reset Code
export const verifyResetCode = async (userData: {email: string,token: string}) => {
    try{
        const response = await api.post('/verify-reset-code', userData);
        return response.data.status;
    }
    catch(error)
    {
        console.log(error);
        throw error;
    }
}
// ** Reset Password
export const resetPassword = async (userData: {email: string,password: string,password_confirmation: string,token:string}) => {
    try{
        const response = await api.post('/reset-password', userData);
        return response.data;
    }
    catch(error)
    {
        console.log(error);
        throw error;
    }
}
// ** Update Profile
export const updateUserProfile = async (userData: {
    name: string;
    phone: string;
    email: string;
    weight: number | string;
    height: number | string;
    has_chronic_diseases?: boolean;
}) => {
    try{
        const storage = localStorage.getItem("kleitech_user") ? localStorage : sessionStorage;
        const userString = storage.getItem("kleitech_user");
        const user = userString ? JSON.parse(userString) : null;
        const token = user?.token;
        const userId = user?.user?.id;

        const response = await api.put(`/patients/${userId}`, userData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }
    catch(error)
    {
        console.log(error);
        throw error;
    }
}