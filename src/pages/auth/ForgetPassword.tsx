// ** assets
import {keyIcon, emailInputIcon} from '../../assets/icons/icons'
// ** Style
import style from '../../style/pages/auth/forgetPassword.module.css'
// ** Hooks && Tools
import { useNavigate } from 'react-router-dom';





export default function ForgetPassword() {
    // ** Defaults
    const navigate = useNavigate();
    const otpPageHandler = ()=>{navigate('/u/otp')};





    return (
        <>
            <div className={style.forget_password_container}>
                <div className={style.icon}>
                    <img src={keyIcon} alt="key Icon" />
                </div>
                <div className={style.content}>
                    <h2>هل نسيت كلمه المرور ؟</h2>
                    <p>ادخل عنوان بريدك الالكترونى المسجل به حسابك وسيتم ارسال الرمز تأكيد لإعادة تعيين كلمة 
                    المرور الخاصة بك</p>
                </div>
                <form>
                    <div className={style.form_input}>
                        <label htmlFor="">البريد الالكتروني</label>
                        <input type="email" name="" id="" placeholder='ادخل البريد الالكتروني'/>
                        <img src={emailInputIcon} alt="Email input icon" />
                    </div>
                    <button onClick={otpPageHandler}>إرسال رمز التأكيد</button>
                </form>
            </div>
        </>
    )
}
