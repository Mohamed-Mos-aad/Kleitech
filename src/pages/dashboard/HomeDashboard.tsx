// ** Assets
import searchIcon from '../../assets/dashboard/home/searchIcon.svg'
import patientsIcon from '../../assets/dashboard/home/patientsIcon.svg'
import doctorsIcon from '../../assets/dashboard/home/doctorsIcon.svg'
import visitorsIcon from '../../assets/dashboard/home/visitorsIcon.svg'
import optionsIcon from '../../assets/dashboard/home/optionsIcon.svg'
import deleteIcon from '../../assets/dashboard/home/deleteIcon.svg'
import blockIcon from '../../assets/dashboard/patients/blockIcon.svg'
// ** Style
import style from '../../style/pages/dashboard/homeDashboard.module.css'
// ** Hooks && Tools
import { useEffect, useState } from 'react'
// ** Api
import { fetchDashboardStats } from '../../api/dashboardApi'
import { deletePatient, fetchDashboardPatients } from '../../api/dashboardApi'
// ** Components
import DataTable from '../../components/dashboard/DataTable'



export default function HomeDashboard() {
    // ** States
    const [dashboardStats,setDashboardStats] = useState({
        doctors: 0,
        patients: 0,
        site_visits: 0
    })
    const [patients,setPatients] = useState<{ id: string; name: string; phone: string; national_id: string; email: string; }[]>([]);



    // ** Handlers
    const updateData = async ()=>{
        const updatedPatients = await fetchDashboardPatients();
        setPatients(updatedPatients);
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
                setPatients(dashboardPatientsData);
            }
            catch(error){
                console.log(error)
            }
        }
        loadDashboardPatients();
    },[])
    useEffect(()=>{
        const loadDashboardStats = async ()=>{
            try{
                const dashboardStatsData = await fetchDashboardStats();
                if (dashboardStatsData) {
                    console.log(dashboardStatsData);
                    setDashboardStats(dashboardStatsData);
                } else {
                    setDashboardStats({ doctors: 0, patients: 0, site_visits: 0 });
                }
            }
            catch(error){
                console.log(error)
            }
        }
        loadDashboardStats();
    },[])
    
    
    return (
        <>
            <div className={style.home_dashboard_container}>
                <div className={style.home_dashboard_data}>
                    <div className={style.search}>
                        <div className={style.search_container}>
                            <img src={searchIcon} alt="search icon" />
                            <input type="text" name="" id="" placeholder='بحث'/>
                        </div>
                    </div>
                    <div className={style.cards}>
                        <div className={style.card}>
                            <div className={style.card_title}>
                                <h2>المرضي</h2>
                            </div>
                            <div className={style.card_data}>
                                <img src={patientsIcon} alt="patients icon" />
                                <h3>{dashboardStats.patients}</h3>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.card_title}>
                                <h2>الاطباء</h2>
                            </div>
                            <div className={style.card_data}>
                                <img src={doctorsIcon} alt="doctors icon" />
                                <h3>{dashboardStats.doctors}</h3>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.card_title}>
                                <h2>الزائرين</h2>
                            </div>
                            <div className={style.card_data}>
                                <img src={visitorsIcon} alt="visitors icon" />
                                <h3>{dashboardStats.site_visits}</h3>
                            </div>
                        </div>
                    </div>
                    <div className={style.table_container}>
                        <div className={style.table_title}>
                            <h1>معلومات عن المريض</h1>
                            <button>
                                <img src={optionsIcon} alt="options icon" />
                            </button>
                        </div>
                        <DataTable renderData={renderPatientsData}/>
                    </div>
                </div>
            </div>
        </>
    )
}
