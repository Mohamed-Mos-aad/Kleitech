// ** Assets
import { useNavigate } from 'react-router-dom'
import {doneIcon} from '../../assets/icons/icons'
// ** Style
import style from '../../style/components/ui/BookingDone.module.css'
// ** Hooks && Tools
import { AppDispatch } from '../../app/store';
import { useDispatch } from 'react-redux';
import { setBookingDetails } from '../../app/slices/bookingDetails';



interface IBookingData{
    doctorName: string,
    patientName: string,
    cost: string,
    patientPhone: string,
    waitTime: string,
    date: string,
    address: string
}

export default function BookingDone(data:IBookingData) {
    // ** Store
    const dispatch: AppDispatch = useDispatch();
    
    
    // ** Default
    const navigate = useNavigate();





    // ** Handlers
    const bookingDetailsPageOpenHandler = ()=>{
        dispatch(setBookingDetails({...data}));
        navigate('/m/booking-details');
    }





    return (
        <>
            <div className={style.booking_done}>
                <div className={style.booking_done_container}>
                    <img src={doneIcon} alt="Done icon" />
                    <h3>لقد تم الحجز بنجاج</h3>
                    <button onClick={bookingDetailsPageOpenHandler}>تفاصيل الحجز</button>
                </div>
            </div>
        </>
    )
}
