// ** Assets
import deleteIcon from '../../assets/dashboard/home/deleteIcon.svg'
import blockIcon from '../../assets/dashboard/patients/blockIcon.svg'
// ** Style
import style from '../../style/pages/dashboard/patientsDashboard.module.css'
// ** Hooks && Tools
import { useEffect, useState } from 'react'
// ** Api
import { deletePatient, fetchDashboardPatients } from '../../api/dashboardApi'
// ** Components
import DataTable from '../../components/dashboard/DataTable'
import SearchElement from '../../components/dashboard/SearchElement'



export default function Patients() {
    // ** States
    const [data,setData] = useState<{ id: string; name: string; phone: string; national_id: string; email: string; }[]>([]);
    const [patients,setPatients] = useState<{ id: string; name: string; phone: string; national_id: string; email: string; }[]>([]);



    // ** Handlers
    const updateData = async ()=>{
        const updatedDoctors = await fetchDashboardPatients();
        setPatients(updatedDoctors);
        setData(updatedDoctors);
    }
    const deletePatientHandler =async (id:string)=>{
        try{
            await deletePatient(id);
            updateData();
        }
        catch(error){
            console.log(error)
        }
    }



    // ** Renders
    const renderPatientsData = patients.map(patient =>(
        <tr key={patient.id}>
            <td>{patient.name}</td>
            <td>{patient.phone}</td>
            <td>{patient.national_id}</td>
            <td>{patient.email}</td>
            <td>
                <button>
                    <img src={blockIcon} alt="edit icon" />
                </button>
                <button onClick={()=>{deletePatientHandler(patient.id)}}>
                    <img src={deleteIcon} alt="delete icon" />
                </button>
            </td>
        </tr>
    ))



    // ** UseEffet
    useEffect(()=>{
        const loadDashboardPatients = async ()=>{
            try{
                const dashboardPatientsData = await fetchDashboardPatients();
                setData(dashboardPatientsData);
                setPatients(dashboardPatientsData);
            }
            catch(error){
                console.log(error)
            }
        }
        loadDashboardPatients();
    },[])



    return (
        <>
            <div className={style.dashboard_patients_container}>
                <header className={style.header}>
                    <div className={style.dashboard_search}>
                        <SearchElement data={data} setResult={setPatients}/>
                    </div>
                </header>
                <DataTable renderData={renderPatientsData}/>
            </div>
        </>
    )
}