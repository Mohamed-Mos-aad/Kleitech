// ** Assets
import { useNavigate } from 'react-router-dom'
import doneIcon from '../../assets/main/doctorDetails/doneIcon.svg'
// ** Style
import style from '../../style/components/ui/BookingDone.module.css'





export default function BookingDone() {
    // ** Default
    const navigate = useNavigate();





    // ** Handlers
    const bookindDetailsPageOpenHandler = ()=>{
        navigate('/m/booking-details')
    }





    return (
        <>
            <div className={style.booking_done}>
                <div className={style.booking_done_container}>
                    <img src={doneIcon} alt="Done icon" />
                    <h3>لقد تم الحجز بنجاج</h3>
                    <button onClick={bookindDetailsPageOpenHandler}>تفاصيل الحجز</button>
                </div>
            </div>
        </>
    )
}
