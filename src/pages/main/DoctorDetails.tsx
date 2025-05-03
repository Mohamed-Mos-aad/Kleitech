// ** Assets
import { leftIcon } from '../../assets/main/doctorDetails'
// ** Style
import style from '../../style/pages/main/doctorDetails.module.css'
// ** Hooks
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
// ** Other
import Booking from '../../components/ui/Booking'
import BookingDone from '../../components/ui/BookingDone'
import { IDoctorsData } from '../../interfaces'
import { fetchDoctors } from '../../api/doctorsApi'
import Loading from '../../components/ui/loading/Loading'
import DoctorData from '../../components/pages/doctorDetails/DoctorData';





export default function DoctorDetails() {
    // Defaults
    const { id } = useParams();
    const navigate = useNavigate();



    // ** States
    const [doctor,setDoctor] = useState<IDoctorsData>();
    const [bookingOpened,setBookingOpened] = useState<boolean>(false);
    const [bookingDoneOpened,setBookingDoneOpened] = useState<boolean>(false);
    const [isloading,setIsLoading] = useState<boolean>(true);





    // ** Handlers
    const handleBookingClick = (state:boolean)=>{
        if(!state)
        {
            setBookingOpened(!bookingOpened)
        }
    };
    const handleChatOpen = (id: number | undefined) =>
    {
        if(id && doctor)
        {

            navigate('/chats', { state: { doctor : doctor } });
        }
    };




    // ** Renders
    const renderDayTable = (dayIndex:number,label:string)=>{
        if (!doctor) return null;
        const dayData = doctor.availability[dayIndex];
        if (!dayData) return null;
        return (
            <div className={style.table}>
                <ul>
                    <li>
                        {label}
                    </li>
                    {
                    doctor.availability[dayIndex].map((day,index) =>(
                        <li className={day.status ? style.time_done : ''} key={`second${index}`} onClick={()=>{handleBookingClick(day.status)}}>
                            من {day.time}
                            <br />حتى{doctor.availability[dayIndex]?.[index+1]?.time}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }




    // ** UseEffect
    useEffect(()=>{
        const loadDoctor = async ()=>{
            try{
                const doctorData = await fetchDoctors();
                if(id)
                {
                    setDoctor(doctorData.doctors.find((doctor: IDoctorsData) => doctor.id.toString() === id));
                }
            }
            catch(error)
            {
                console.log(error)
            }
            finally
            {
                setIsLoading(false);
            }
        }
        loadDoctor();
    },[id]);


    


    return (
        <>
        {
            isloading ? 
                <Loading />
            :
            <div className={style.doctor_details_container}>
                <DoctorData doctor={doctor} openChat={()=>{handleChatOpen(doctor?.id)}}/>
                <div className={style.doctor_time_tables}>
                    <button><img src={leftIcon} alt="left icon" /></button>
                    <div className={style.tables}>
                        {renderDayTable(0, 'اليوم')}
                        {renderDayTable(1, 'غداً')}
                        {renderDayTable(2, 'اليوم الثالث')}
                    </div>
                    <button><img src={leftIcon} alt="right icon" /></button>
                </div>
                {
                    bookingOpened &&
                    <Booking setBookingOpened={setBookingOpened} setBookingDoneOpened={setBookingDoneOpened}/>
                }
                {
                    bookingDoneOpened &&
                    <BookingDone />
                }
            </div>
        }
        </>
    )
}
