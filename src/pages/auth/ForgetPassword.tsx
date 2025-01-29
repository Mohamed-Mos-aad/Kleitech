// ** Style
import style from '../../style/pages/auth/forgetPassword.module.css'
// ** assets
import keyIcon from '../../assets/auth/forgetPasswordIcon.svg'
import emailInputIcon from '../../assets/auth/formIcons/emailInputIcon.svg'





export default function ForgetPassword() {
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
                    <button>إرسال رمز التأكيد</button>
                </form>
            </div>
        </>
    )
}
