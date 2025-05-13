// ** Assets
import searchIcon from '../../assets/dashboard/home/searchIcon.svg'
import deleteIcon from '../../assets/dashboard/home/deleteIcon.svg'
import blockIcon from '../../assets/dashboard/patients/blockIcon.svg'
// ** Style
import style from '../../style/pages/dashboard/patientsDashboard.module.css'
// ** Hooks && Tools
import { useEffect, useState } from 'react'
import { doctorsData } from '../../data/examples/doctorsData'


export default function Patients() {
    // ** States
    const [data,setData] = useState<{ id: number; name: string; phone: string; nationalId: string; email: string; }[]>([]);
    const [patients,setPatients] = useState<{ id: number; name: string; phone: string; nationalId: string; email: string; }[]>([]);




    // ** Handlers
    const searchHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const searchValue = e.currentTarget.value;
        const filteredData = data.filter(patient => patient.name.includes(searchValue));
        setPatients(filteredData);
    }   


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
                    <div className={style.search}>
                        <div className={style.search_container}>
                            <img src={searchIcon} alt="search icon" />
                            <input type="text" name="" id="" placeholder='بحث' onChange={(e)=>{searchHandler(e)}}/>
                        </div>
                    </div>
                </header>
                <div className={style.table_container}>
                    <table className={style.table}>
                        <thead>
                            <tr>
                                <th>الاسم</th>
                                <th>الهاتف </th>
                                <th>الرقم القومي</th>
                                <th>البريد الالكتروني</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderPatientsData}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
