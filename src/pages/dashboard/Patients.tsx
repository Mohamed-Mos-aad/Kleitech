// ** Assets
import deleteIcon from '../../assets/dashboard/home/deleteIcon.svg'
import blockIcon from '../../assets/dashboard/patients/blockIcon.svg'
// ** Style
import style from '../../style/pages/dashboard/patientsDashboard.module.css'
// ** Hooks && Tools
import { useEffect, useState } from 'react'
// ** Api
import { doctorsData } from '../../data/examples/doctorsData'
// ** Components
import DataTable from '../../components/dashboard/DataTable'
import SearchElement from '../../components/dashboard/SearchElement'



export default function Patients() {
    // ** States
    const [data,setData] = useState<{ id: number; name: string; phone: string; nationalId: string; email: string; }[]>([]);
    const [patients,setPatients] = useState<{ id: number; name: string; phone: string; nationalId: string; email: string; }[]>([]);



    // ** Renders
    const renderPatientsData = patients.map(patient =>(
        <tr key={patient.id}>
            <td>{patient.name}</td>
            <td>{patient.phone}</td>
            <td>{patient.nationalId}</td>
            <td>{patient.email}</td>
            <td>
                <button>
                    <img src={blockIcon} alt="edit icon" />
                </button>
                <button>
                    <img src={deleteIcon} alt="delete icon" />
                </button>
            </td>
        </tr>
    ))



    // ** UseEffet
    useEffect(()=>{
        setData(doctorsData);
        setPatients(doctorsData);
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