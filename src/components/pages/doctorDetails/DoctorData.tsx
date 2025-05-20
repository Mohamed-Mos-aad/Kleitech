// ** Assets
import { starIcon, doctorIcon, locationPinIcon, priceIcon, chatIcon, timerIcon, phoneIcon } from '../../../assets/main/doctorDetails'
import {patient1} from '../../../assets/images/images'
// ** Style
import style from '../../../style/pages/main/doctorDetails.module.css'
// ** Interfaces
import { IDoctorsData } from './../../../interfaces/index';




// ** Interfaces
interface IDoctorData{
    doctor: IDoctorsData | undefined,
    openChat: ()=> void
}
export default function DoctorData({doctor,openChat}:IDoctorData) {
    if (!doctor) return null;

    return (
        <>
            <div className={style.doctor_details}>
                <div className={style.doctor_photo}>
                    <img src={patient1} alt={`صورة الدكتور ${doctor.name}`} />
                </div>
                <div className={style.doctor_data}>
                    <div className={style.doctor_title}>
                        <h1>{doctor.name}</h1>
                        <h2>{doctor.specialty}</h2>
                        <div className={style.doctor_rate}>
                            <img src={starIcon} alt="star icon" />
                            <img src={starIcon} alt="star icon" />
                            <img src={starIcon} alt="star icon" />
                            <img src={starIcon} alt="star icon" />
                            <img src={starIcon} alt="star icon" />
                        </div>
                        <h3>التقيم العام من {doctor.rating.avg_rating} زائراً للدكتور</h3>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <img src={doctorIcon} alt="doctor icon" />
                                <div><span>{doctor.specialty}</span></div>
                            </li>
                            <li>
                                <img src={locationPinIcon} alt="locationPin icon" />
                                <div>{doctor.location}</div>
                            </li>
                            <li>
                                <img src={priceIcon} alt="price icon" />
                                <div>الكشف: <span>{doctor.price}</span></div>
                            </li>
                            <li>
                                <img src={chatIcon} alt="chat icon" />
                                <div>لتواصل شات مجاناً اضغط <button onClick={openChat}>(هنا)</button></div>
                            </li>
                            <li>
                                <img src={timerIcon} alt="timer icon" />
                                <div>مده الانتظار: 50 دفيفة</div>
                            </li>
                            <li>
                                <img src={phoneIcon} alt="phone icon" />
                                <div>16568- سعر مكالمة عاديه</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
