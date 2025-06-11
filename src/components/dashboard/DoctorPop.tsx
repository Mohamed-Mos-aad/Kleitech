// ** Assets
import {userNameIcon, userEmailIcon, userIdIcon, userPhoneIcon} from '../../assets/icons/icons'
// ** Style
import style from '../../style/pages/dashboard/doctorsDashboard.module.css'
// ** Components
import InputElement from '../../components/ui/InputElement'


// ** Interfaces
interface IDoctorData {
    id: string;
    name: string;
    email: string;
    password: string;
    national_id: string;
    specialty: string;
    phone: string;
}

interface IDoctorPop{
    popTitle: string,
    doctorData: IDoctorData,
    setDoctorData: (doctorData: IDoctorData)=> void,
    buttonElement: {
        title: string,
        handler: ()=> void
    },
    doctorsId: string,
}



export default function DoctorPop({popTitle,doctorData,setDoctorData,buttonElement,doctorsId}:IDoctorPop) {
    // ** Handlers
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {id, value} = e.currentTarget;
        setDoctorData({
            ...doctorData,
            [id]: value,
            id: doctorsId
        });
    }



    return (
        <>
            <div className={style.add_doctor_container}>
                <div className={style.add_doctor}>
                    <h3>{popTitle}</h3>
                    <div className={style.data_form}>
                        <InputElement error='' id='name' img={{src:userNameIcon , alt: 'userName icon'}} name='الإسم' onChange={(e)=>{onChangeHandler(e)}} placeholder='ادخل الإسم بالكامل' type='text' value={doctorData.name}/>
                        <InputElement error='' id='email' img={{src:userEmailIcon , alt: 'userEmail icon'}} name='البريد الالكتروني' onChange={(e)=>{onChangeHandler(e)}} placeholder='ادخل البريد الالكتروني' type='text' value={doctorData.email}/>
                        <InputElement error='' id='national_id' img={{src:userIdIcon , alt: 'userId icon'}} name='الرقم القومي' onChange={(e)=>{onChangeHandler(e)}} placeholder='ادخل الرقم القومي' type='text' value={doctorData.national_id}/>
                        <InputElement error='' id='phone' img={{src:userPhoneIcon , alt: 'userPhone icon'}} name='رقم الهاتف' onChange={(e)=>{onChangeHandler(e)}} placeholder='ادخل رقم الهاتف' type='text' value={doctorData.phone}/>
                    </div>
                    <button onClick={buttonElement.handler}>{buttonElement.title}</button>
                </div>
            </div>
        </>
    )
}
