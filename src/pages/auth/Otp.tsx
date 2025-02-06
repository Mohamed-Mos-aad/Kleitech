// ** Assets
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/auth/otpIcon.svg'
// ** Style
import style from '../../style/pages/auth/otp.module.css'





export default function Otp() {
    // ** Defaults
    const navigate = useNavigate();
    const newPasswordPageHandler = ()=>{navigate('/u/new-password')};




    
    return (
        <>
            <div className={style.otp_container}>
                <div className={style.icon}>
                    <img src={logo} alt="Logo icon" />
                </div>
                <div className={style.content}>
                    <h2>التحقق من الكود</h2>
                    <p>
                        الرجاء ادخال الكود الذي ارسلناه الي البريد الالكتروني 
                        klity******@gamil.com
                    </p>
                </div>
                <form>
                    <div className={style.timer}>
                        00:30
                    </div>
                    <div className={style.otp_code}>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                    <button onClick={newPasswordPageHandler}>إرسال رمز التأكيد</button>
                    <h4>لم يتم ارسال رمز تأكيد ؟<span> ارسل مره اخري</span></h4>
                </form>
            </div>
        </>
    )
}
