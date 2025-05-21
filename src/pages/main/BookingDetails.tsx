// ** Assets
import {bookingPhoto} from '../../assets/images/images'
import {doctorIcon, patientIcon, priceIcon, phoneIcon, timerIcon, calendarIcon, locationPinIcon} from '../../assets/icons/icons'
// ** Style
import style from '../../style/pages/main/bookingDetails.module.css'
// ** Hooks && Tools
import { useRef } from 'react'
import html2canvas from 'html2canvas'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'




export default function BookingDetails() {
    const bookindDetails = useSelector((state: RootState) => state.BookingDetails);

    // ** Refs
    const bookingRef = useRef<HTMLDivElement | null>(null);



    // ** Handlers
    const downloadHandler = async ()=>{
        if(bookingRef.current)
        {
            const canvas = await html2canvas(bookingRef.current);
            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = image;
            link.download = 'xray-result.png';
            link.click();
        }
    }

    return (
        <>
            <div className={style.booking_details_container}>
                <div className={style.booking_content} ref={bookingRef}>
                    <div className={style.booking_data}>
                        <h1>تفاصيل الحجز</h1>
                        <ul>
                            <li>
                                <img src={doctorIcon} alt="Doctor icon" />
                                <h2><span>اسم الدكتور:</span>{bookindDetails.doctorName}</h2>
                            </li>
                            <li>
                                <img src={patientIcon} alt="Patient icon" />
                                <h2><span>اسم المريض:</span>{bookindDetails.patientName}</h2>
                            </li>
                            <li>
                                <img src={priceIcon} alt="Price icon" />
                                <h2><span>الكشف: {bookindDetails.cost} جنيه</span></h2>
                            </li>
                            <li>
                                <img src={phoneIcon} alt="Phone icon" />
                                <h2><span>رقم الهاتف:</span>{bookindDetails.patientPhone}</h2>
                            </li>
                            <li>
                                <img src={timerIcon} alt="Timer icon" />
                                <h2><span>مده الانتظار:</span>{bookindDetails.waitTime} دقيقة</h2>
                            </li>
                            <li>
                                <img src={calendarIcon} alt="Calendar icon" />
                                <h2><span>تاريخ الحجز:</span>٢٩ يناير، من {bookindDetails.date} الدخول بميعاد</h2>
                            </li>
                            <li>
                                <img src={locationPinIcon} alt="Location pin icon" />
                                <h2><span>عنوان العياده:</span>{bookindDetails.address}</h2>
                            </li>
                        </ul>
                    </div>
                    <div className={style.booking_photo}>
                        <img src={bookingPhoto} alt="Booking photo" />
                    </div>
                </div>
                <div className={style.booking_footer}>
                    <button onClick={downloadHandler}>تنزيل <img src="" alt="" /></button>
                </div>
            </div>
        </>
    )
}
