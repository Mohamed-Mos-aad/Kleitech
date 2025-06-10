// ** Hooks && Tools
import axios from "axios";



// ** Api
const api = axios.create({
    baseURL: import.meta.env.VITE_LOCAL_SERVER_API_URL,
    headers:{
        'Content-Type': 'application/json',
    }
})



// ** Get Stats
export const fetchDashboardStats = async ()=>{
    try{
        const response = await api.get('/stats');
        return response.data;
    }
    catch(error)
    {
        console.log(error);
    }
}
// ** Get Doctors
export const fetchDashboardDoctors = async ()=>{
    try{
        const response = await api.get('/doctors');
        return response.data;
    }
    catch(error)
    {
        console.log(error);
    }
}
// ** Add Doctor
export const addDoctor = async (doctorData: {name: string, email: string, nationalId: string, phone: string}) => {
    try{
        const response = await api.post('/doctors', doctorData);
        return response.data;
    }
    catch(error)
    {
        console.log(error);
        throw error;
    }
}
// ** Edit Doctor
export const editeDoctor = async (doctorData: {name: string, email: string, nationalId: string, phone: string},id:number) => {
    try{
        const response = await api.put(`/doctors/${id}`, doctorData);
        return response.data;
    }
    catch(error)
    {
        console.log(error);
        throw error;
    }
}
// ** Delete Doctor
export const deleteDoctor = async (id:number) => {
    try{
        const response = await api.delete(`/doctors/${id}`);
        return response.data;
    }
    catch(error)
    {
        console.log(error);
        throw error;
    }
}
// ** Get Patients
export const fetchDashboardPatients = async ()=>{
    try{
        const response = await api.get('/patients');
        return response.data;
    }
    catch(error)
    {
        console.log(error);
    }
}
// ** Delete Patients
export const deletePatient = async (id:string) => {
    try{
        const response = await api.delete(`/patients/${id}`);
        return response.data;
    }
    catch(error)
    {
        console.log(error);
        throw error;
    }
}