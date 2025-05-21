import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_STATIC_API_URL,
    headers:{
        'Content-Type': 'application/json',
    }
})


// ** Stats
export const fetchDashboardStats = async ()=>{
    try{
        const response = await api.get('/dashboard/stats');
        console.log(response.data)
        return response.data;
    }
    catch(error)
    {
        console.log(error);
    }
}



// ** Doctors
export const fetchDashboardDoctors = async ()=>{
    try{
        const response = await api.get('/dashboard/doctors');
        return response.data;
    }
    catch(error)
    {
        console.log(error);
    }
}

export const addDoctor = async (doctorData: {name: string, email: string, nationalId: string, phone: string}) => {
    try{
        const response = await api.post('/dashboard/doctors', doctorData);
        return response.data;
    }
    catch(error)
    {
        console.log(error);
        throw error;
    }
}

export const editeDoctor = async (doctorData: {name: string, email: string, nationalId: string, phone: string},id:number) => {
    try{
        const response = await api.put(`/dashboard/doctors/${id}`, doctorData);
        return response.data;
    }
    catch(error)
    {
        console.log(error);
        throw error;
    }
}

export const deleteDoctor = async (id:number) => {
    try{
        const response = await api.delete(`/dashboard/doctors/${id}`);
        return response.data;
    }
    catch(error)
    {
        console.log(error);
        throw error;
    }
}