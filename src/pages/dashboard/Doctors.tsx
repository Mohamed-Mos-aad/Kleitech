// ** Assets
import addIcon from '../../assets/dashboard/doctors/addIcon.svg'
import deleteIcon from '../../assets/dashboard/home/deleteIcon.svg'
import editIcon from '../../assets/dashboard/home/editIcon.svg'
// ** Style
import style from '../../style/pages/dashboard/doctorsDashboard.module.css'
// ** Hooks && Tools
import { useEffect, useState } from 'react'
// ** Components
import DataTable from '../../components/dashboard/DataTable'
import SearchElement from '../../components/dashboard/SearchElement'
import DoctorPop from '../../components/dashboard/DoctorPop'
// ** Api
import { addDoctor, deleteDoctor, editeDoctor, fetchDashboardDoctors } from '../../api/dashboardApi'
import { IDoctorData } from '../../interfaces'



export default function Doctors() {
    // ** Defaults
    const defaultNewDoctor:IDoctorData = {
        id: "0",
        name: '',
        email: '',
        password: '123456789',
        national_id: '',
        specialization: 'باطنة',
        specialty: 'باطنة',
        phone: '',
        address: '',
        experience: 0,
    }
    // ** States
    const [data,setData] = useState<IDoctorData[]>([]);
    const [doctors,setDoctors] = useState<IDoctorData[]>([]);
    const [addDoctorComponentOpened,setAddDoctorComponentOpened] = useState<boolean>(false);
    const [editeDoctorComponentOpened,setEditeDoctorComponentOpened] = useState<boolean>(false);
    const [newDoctor,setNewDoctor] = useState<IDoctorData>(defaultNewDoctor);



    // ** Handlers
    const addDoctorToggleHandler = ()=>{
        setAddDoctorComponentOpened(prev => !prev);
    }
    const updateData = async ()=>{
        const updatedDoctors = await fetchDashboardDoctors();
        setDoctors(updatedDoctors);
        setData(updatedDoctors);
    }
    const addDoctorHandler = async ()=>{
        try{
            const addedDoctor = await addDoctor(newDoctor);
            await updateData();
            setData(prev => [...prev,addedDoctor]);
            setNewDoctor(defaultNewDoctor);
            addDoctorToggleHandler();
        }
        catch(error){
            console.log(error)
        }
    }
    const editeDoctorToggleHandler = (id:string)=>{
        const selectedDoctor = doctors.find(doctor => doctor.id === id);
        if(selectedDoctor)
        {
            setNewDoctor(selectedDoctor);
            setEditeDoctorComponentOpened(prev => !prev);
        }
    }
    const editedoctorHandler = async ()=>{
        try{
            const cleanedDoctorData  = {
                id: newDoctor.id,
                name: newDoctor.name || '',
                email: newDoctor.email || '',
                national_id: newDoctor.national_id || '',
                phone: newDoctor.phone || '',
                address: String(newDoctor.address || 'غير معروف'),
                experience: Number(newDoctor.experience) || 0,
                specialization: typeof newDoctor.specialization === 'string' ? newDoctor.specialization : 'باطنة',
            };
            await editeDoctor(cleanedDoctorData,Number(newDoctor.id));
            updateData();
        }
        catch(error){
            console.log(error)
        }
        finally
        {
            setNewDoctor(defaultNewDoctor);
            setEditeDoctorComponentOpened(prev => !prev);
        }
    }
    const deleteDoctorHandler =async (id:string)=>{
        try{
            await deleteDoctor(Number(id));
            updateData();
        }
        catch(error){
            console.log(error)
        }
        finally
        {
            setNewDoctor(defaultNewDoctor);
        }
    }



    // ** Renders
    const renderDoctorsData = doctors.map(doctor =>(
        <tr key={doctor.id}>
            <td>{doctor.name}</td>
            <td>{doctor.phone}</td>
            <td>{doctor.national_id}</td>
            <td>{doctor.email}</td>
            <td>
                <button onClick={()=>{editeDoctorToggleHandler(doctor.id)}}>
                    <img src={editIcon} alt="edit icon" />
                </button>
                <button onClick={()=>{deleteDoctorHandler(doctor.id)}}>
                    <img src={deleteIcon} alt="delete icon" />
                </button>
            </td>
        </tr>
    ))



    // ** UseEffet
    useEffect(()=>{
        const loadDashboardDoctors = async ()=>{
            try{
                const dashboardDoctorsData = await fetchDashboardDoctors();
                setData(dashboardDoctorsData);
                setDoctors(dashboardDoctorsData);
            }
            catch(error){
                console.log(error)
            }
        }
        loadDashboardDoctors();
    },[])



    return (
        <>
            <div className={style.dashboard_doctors_container}>
                <header className={style.header}>
                    <div className={style.dashboard_search}>
                        <SearchElement data={data} setResult={setDoctors}/>
                    </div>
                    <button onClick={addDoctorToggleHandler}>
                        <img src={addIcon} alt="add icon" />
                        <h2>اضافه دكتور</h2>
                    </button>
                </header>
                <DataTable renderData={renderDoctorsData}/>
                {
                    addDoctorComponentOpened && 
                    <DoctorPop popTitle='اضافه طبيب' doctorData={newDoctor} setDoctorData={setNewDoctor} buttonElement={{title: 'اضافه', handler: addDoctorHandler}} doctorsId={(data.length+ 1).toString()}/>
                }
                {
                    editeDoctorComponentOpened && 
                    <DoctorPop popTitle='تعديل البيانات' doctorData={newDoctor} setDoctorData={setNewDoctor} buttonElement={{title: 'تعديل', handler: editedoctorHandler}} doctorsId={newDoctor.id}/>
                }
            </div>
        </>
    )
}
