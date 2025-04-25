// ** Hooks && Tools
import axios from "axios";
// ** Interfaces
import { ISignUpData } from "../interfaces";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers:{
        'Content-Type': 'application/json',
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
        localStorage.setItem("kleitech_user", JSON.stringify({
            token: response.data.token,
            user: response.data.user
        }));
        return response.data;
    }
    catch(error)
    {
        console.log(error);
    }
}