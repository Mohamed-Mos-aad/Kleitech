// ** Assets
import searchIcon from '../../assets/dashboard/home/searchIcon.svg'
import addIcon from '../../assets/dashboard/doctors/addIcon.svg'
import deleteIcon from '../../assets/dashboard/home/deleteIcon.svg'
import editIcon from '../../assets/dashboard/home/editIcon.svg'
// ** Assets
import userNameIcon from '../../assets/auth/formIcons/userNameIcon.svg'
import userEmailIcon from '../../assets/auth/formIcons/userEmailIcon.svg'
import userIdIcon from '../../assets/auth/formIcons/userIdIcon.svg'
import userPhoneIcon from '../../assets/auth/formIcons/userPhoneIcon.svg'
// ** Style
import style from '../../style/pages/dashboard/doctorsDashboard.module.css'
// ** Hooks && Tools
import { useEffect, useState } from 'react'
import { doctorsData } from '../../data/examples/doctorsData'
import InputElement from '../../components/ui/InputElement'



export default function Doctors() {
    // ** States
    const [data,setData] = useState<{ id: number; name: string; phone: string; nationalId: string; email: string; }[]>([]);
    const [doctors,setDoctors] = useState<{ id: number; name: string; phone: string; nationalId: string; email: string; }[]>([]);
    const [addDoctorComponentOpened,setAddDoctorComponentOpened] = useState<boolean>(false);




    // ** Handlers
    const searchHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const searchValue = e.currentTarget.value;
        const filteredData = data.filter(doctor => doctor.name.includes(searchValue));
        setDoctors(filteredData);
    }
    const addDoctorToggleHandler = ()=>{
        setAddDoctorComponentOpened(prev => !prev);
    }


    // ** Renders
    const renderDoctorsData = doctors.map(doctor =>(
        <tr key={doctor.id}>
            <td>{doctor.name}</td>
            <td>{doctor.phone}</td>
            <td>{doctor.nationalId}</td>
            <td>{doctor.email}</td>
            <td>
                <button>
                    <img src={editIcon} alt="edit icon" />
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
        setDoctors(doctorsData);
    },[])



    return (
        <>
            <div className={style.dashboard_doctors_container}>
                <header className={style.header}>
                    <div className={style.search}>
                        <div className={style.search_container}>
                            <img src={searchIcon} alt="search icon" />
                            <input type="text" name="" id="" placeholder='بحث' onChange={(e)=>{searchHandler(e)}}/>
                        </div>
                    </div>
                    <button onClick={addDoctorToggleHandler}>
                        <img src={addIcon} alt="add icon" />
                        <h2>اضافه دكتور</h2>
                    </button>
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
                            {renderDoctorsData}
                        </tbody>
                    </table>
                </div>
                {
                    addDoctorComponentOpened && 
                    <div className={style.add_doctor_container}>
                        <div className={style.add_doctor}>
                            <h3>اضافه طبيب</h3>
                            <div className={style.data_form}>
                                <InputElement error='' id='' img={{src:userNameIcon , alt: 'userName icon'}} name='الإسم' onChange={()=>{}} placeholder='ادخل الإسم بالكامل' type='text' value=''/>
                                <InputElement error='' id='' img={{src:userEmailIcon , alt: 'userEmail icon'}} name='البريد الالكتروني' onChange={()=>{}} placeholder='ادخل البريد الالكتروني' type='text' value=''/>
                                <InputElement error='' id='' img={{src:userIdIcon , alt: 'userId icon'}} name='الرقم القومي' onChange={()=>{}} placeholder='ادخل الرقم القومي' type='text' value=''/>
                                <InputElement error='' id='' img={{src:userPhoneIcon , alt: 'userPhone icon'}} name='رقم الهاتف' onChange={()=>{}} placeholder='ادخل رقم الهاتف' type='text' value=''/>
                            </div>
                            <button onClick={addDoctorToggleHandler}>اضافه</button>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}
