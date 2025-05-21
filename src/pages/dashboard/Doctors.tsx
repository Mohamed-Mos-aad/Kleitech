// ** Assets
import searchIcon from '../../assets/dashboard/home/searchIcon.svg'
import addIcon from '../../assets/dashboard/doctors/addIcon.svg'
import deleteIcon from '../../assets/dashboard/home/deleteIcon.svg'
import editIcon from '../../assets/dashboard/home/editIcon.svg'
import {userNameIcon, userEmailIcon, userIdIcon, userPhoneIcon} from '../../assets/icons/icons'
// ** Style
import style from '../../style/pages/dashboard/doctorsDashboard.module.css'
// ** Hooks && Tools
import { useEffect, useState } from 'react'
// ** Components
import InputElement from '../../components/ui/InputElement'
import { addDoctor, deleteDoctor, editeDoctor, fetchDashboardDoctors } from '../../api/dashboardApi'



export default function Doctors() {
    // ** Defaults
    const defaultNewDoctor = {
        id: 0,
        name: '',
        email: '',
        nationalId: '',
        phone: '',
    }
    // ** States
    const [data,setData] = useState<{ id: number; name: string; phone: string; nationalId: string; email: string; }[]>([]);
    const [doctors,setDoctors] = useState<{ id: number; name: string; phone: string; nationalId: string; email: string; }[]>([]);
    const [addDoctorComponentOpened,setAddDoctorComponentOpened] = useState<boolean>(false);
    const [editeDoctorComponentOpened,setEditeDoctorComponentOpened] = useState<boolean>(false);
    const [newDoctor,setNewDoctor] = useState<{id: number, name: string, email: string, nationalId: string, phone: string,}>(defaultNewDoctor);



    // ** Handlers
    const searchHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const searchValue = e.currentTarget.value.toLowerCase();
        const filteredData = data.filter(doctor =>
            doctor.name.toLowerCase().includes(searchValue) ||
            doctor.email.toLowerCase().includes(searchValue) ||
            doctor.nationalId.includes(searchValue) || 
            doctor.phone.includes(searchValue)
        );
        setDoctors(filteredData);
    }
    const addDoctorToggleHandler = ()=>{
        setAddDoctorComponentOpened(prev => !prev);
    }
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {id, value} = e.currentTarget;
        setNewDoctor(prev => ({
            ...prev,
            [id]: value
        }))
    }
    const adddoctorHandler = async ()=>{
        try{
            const res = await addDoctor(newDoctor);
            setDoctors(prev => [newDoctor,...prev]);
            setData(prev => [newDoctor,...prev]);
            console.log(res);
        }
        catch(error){
            console.log(error)
        }
        finally
        {
            setNewDoctor(defaultNewDoctor);
            addDoctorToggleHandler();
        }
    }
    const editeDoctorToggleHandler = (id:number)=>{
        const selectedDoctor = doctors.find(doctor => doctor.id === id);
        if(selectedDoctor)
        {
            setNewDoctor(selectedDoctor);
            setEditeDoctorComponentOpened(prev => !prev);
        }
    }
    const editedoctorHandler = async ()=>{
        try{
            const res = await editeDoctor(newDoctor,newDoctor.id);
            console.log(res);
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
    const deleteDoctorHandler =async (id:number)=>{
        try{
            const res = await deleteDoctor(id);
            await console.log(res);
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
            <td>{doctor.nationalId}</td>
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
        const loadDashboardStats = async ()=>{
            try{
                const dashboardDoctorsData = await fetchDashboardDoctors();
                setData(dashboardDoctorsData);
                setDoctors(dashboardDoctorsData);
            }
            catch(error){
                console.log(error)
            }
            finally
            {
                // setIsLoading(false);
            }
        }
        loadDashboardStats();
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
                                <InputElement error='' id='name' img={{src:userNameIcon , alt: 'userName icon'}} name='الإسم' onChange={(e)=>{onChangeHandler(e)}} placeholder='ادخل الإسم بالكامل' type='text' value={newDoctor.name}/>
                                <InputElement error='' id='email' img={{src:userEmailIcon , alt: 'userEmail icon'}} name='البريد الالكتروني' onChange={(e)=>{onChangeHandler(e)}} placeholder='ادخل البريد الالكتروني' type='text' value={newDoctor.email}/>
                                <InputElement error='' id='nationalId' img={{src:userIdIcon , alt: 'userId icon'}} name='الرقم القومي' onChange={(e)=>{onChangeHandler(e)}} placeholder='ادخل الرقم القومي' type='text' value={newDoctor.nationalId}/>
                                <InputElement error='' id='phone' img={{src:userPhoneIcon , alt: 'userPhone icon'}} name='رقم الهاتف' onChange={(e)=>{onChangeHandler(e)}} placeholder='ادخل رقم الهاتف' type='text' value={newDoctor.phone}/>
                            </div>
                            <button onClick={adddoctorHandler}>اضافه</button>
                        </div>
                    </div>
                }
                {
                    editeDoctorComponentOpened && 
                    <div className={style.add_doctor_container}>
                        <div className={style.add_doctor}>
                            <h3>تعديل البيانات</h3>
                            <div className={style.data_form}>
                                <InputElement error='' id='name' img={{src:userNameIcon , alt: 'userName icon'}} name='الإسم' onChange={(e)=>{onChangeHandler(e)}} placeholder='ادخل الإسم بالكامل' type='text' value={newDoctor.name}/>
                                <InputElement error='' id='email' img={{src:userEmailIcon , alt: 'userEmail icon'}} name='البريد الالكتروني' onChange={(e)=>{onChangeHandler(e)}} placeholder='ادخل البريد الالكتروني' type='text' value={newDoctor.email}/>
                                <InputElement error='' id='nationalId' img={{src:userIdIcon , alt: 'userId icon'}} name='الرقم القومي' onChange={(e)=>{onChangeHandler(e)}} placeholder='ادخل الرقم القومي' type='text' value={newDoctor.nationalId}/>
                                <InputElement error='' id='phone' img={{src:userPhoneIcon , alt: 'userPhone icon'}} name='رقم الهاتف' onChange={(e)=>{onChangeHandler(e)}} placeholder='ادخل رقم الهاتف' type='text' value={newDoctor.phone}/>
                            </div>
                            <button onClick={editedoctorHandler}>تعديل</button>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}
