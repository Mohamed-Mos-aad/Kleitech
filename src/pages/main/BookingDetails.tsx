// ** Assets
import bookingPhoto from '../../assets/main/booking/bookingPhoto.svg'
import doctorIcon from '../../assets/main/doctorDetails/doctorIcon.svg'
import patientIcon from '../../assets/main/booking/patientIcon.svg'
import priceIcon from '../../assets/main/doctorDetails/priceIcon.svg'
import phoneIcon from '../../assets/main/doctorDetails/phoneIcon.svg'
import timerIcon from '../../assets/main/doctorDetails/timerIcon.svg'
import calendarIcon from '../../assets/main/booking/calendarIcon.svg'
import locationPinIcon from '../../assets/main/doctorDetails/locationPinIcon.svg'
// ** Style
import style from '../../style/pages/main/bookingDetails.module.css'





export default function BookingDetails() {
    return (
        <>
            <div className={style.booking_details_container}>
                <div className={style.booking_content}>
                    <div className={style.booking_data}>
                        <h1>تفاصيل الحجز</h1>
                        <ul>
                            <li>
                                <img src={doctorIcon} alt="Doctor icon" />
                                <h2><span>اسم الدكتور:</span>اميره محمد</h2>
                            </li>
                            <li>
                                <img src={patientIcon} alt="Patient icon" />
                                <h2><span>اسم المريض:</span>احمد يوسف ابراهيم محمد</h2>
                            </li>
                            <li>
                                <img src={priceIcon} alt="Price icon" />
                                <h2><span>الكشف: 150 جنيه</span></h2>
                            </li>
                            <li>
                                <img src={phoneIcon} alt="Phone icon" />
                                <h2><span>رقم الهاتف:</span>01283529923</h2>
                            </li>
                            <li>
                                <img src={timerIcon} alt="Timer icon" />
                                <h2><span>مده الانتظار:</span>20دفيفة</h2>
                            </li>
                            <li>
                                <img src={calendarIcon} alt="Calendar icon" />
                                <h2><span>تاريخ الحجز:</span>٢٩ يناير، من 7.30 مساءا إلي 8.30 مساءا الدخول بميعاد</h2>
                            </li>
                            <li>
                                <img src={locationPinIcon} alt="Location pin icon" />
                                <h2><span>عنوان العياده:</span>المنصورة: شارع الترعه- الدور 1 - شقة 1 - برج الصي-الدور الاول علوي</h2>
                            </li>
                        </ul>
                    </div>
                    <div className={style.booking_photo}>
                        <img src={bookingPhoto} alt="Booking photo" />
                    </div>
                </div>
                <div className={style.booking_footer}>
                    <button>تنزيل <img src="" alt="" /></button>
                </div>
            </div>
        </>
    )
}
