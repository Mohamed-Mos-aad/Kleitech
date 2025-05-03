// ** Style
import style from '../../../style/components/ui/consultation/doctorSkeleton.module.css';




export default function DoctorSkeleton() {
    return (
        <div className={style.doctors_container}>
            <div className={style.doctor}>
                <div className={style.doctor_img + ' ' + style.skeleton}></div>
                <div className={style.doctor_data}>
                    <div className={style.skeleton_text}></div>
                    <div className={style.skeleton_text + ' ' + style.small}></div>
                </div>
            </div>
            <div className={style.doctor}>
                <div className={style.doctor_img + ' ' + style.skeleton}></div>
                <div className={style.doctor_data}>
                    <div className={style.skeleton_text}></div>
                    <div className={style.skeleton_text + ' ' + style.small}></div>
                </div>
            </div>
            <div className={style.doctor}>
                <div className={style.doctor_img + ' ' + style.skeleton}></div>
                <div className={style.doctor_data}>
                    <div className={style.skeleton_text}></div>
                    <div className={style.skeleton_text + ' ' + style.small}></div>
                </div>
            </div>
            <div className={style.doctor}>
                <div className={style.doctor_img + ' ' + style.skeleton}></div>
                <div className={style.doctor_data}>
                    <div className={style.skeleton_text}></div>
                    <div className={style.skeleton_text + ' ' + style.small}></div>
                </div>
            </div>
        </div>
    );
}