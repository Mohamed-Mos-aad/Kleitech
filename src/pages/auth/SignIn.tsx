// ** Style
import style from '../../style/pages/auth/signIn.module.css'
// ** Assets
import googleIcon from '../../assets/auth/socialIcons/googleIcon.svg'
import facebookIcon from '../../assets/auth/socialIcons/facebookIcon.svg'
import appleIcon from '../../assets/auth/socialIcons/appleIcon.svg'
import { useNavigate } from 'react-router-dom';





export default function SignIn() {
    // ** Defaults
    const navigate = useNavigate();





    // ** Handlers
    const signUpPageHandler = ()=>{navigate('/u/sign-up')};
    const forgetPasswordPageHandler = ()=>{navigate('/u/forget-password')};
    const loginHandler = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        navigate('/m')
    };




    return (
        <>
            <div className={style.sign_in_container}>
                <h2>تسجيل الدخول</h2>
                <form className={style.sign_in_form}>
                    <div className={style.form_row}>
                        <label htmlFor="">البريد الالكتروني</label>
                        <input type="text" placeholder="ادخل البريد الالكتروني"/>
                    </div>
                    <div className={style.form_row}>
                        <label htmlFor="">كلمه المرور</label>
                        <input type="password" placeholder="ادخل كلمه المرور"/>
                    </div>
                    <div className={style.form_footer}>
                        <input type="checkbox"/>
                        <label htmlFor="">تذكرني</label>
                        <a onClick={forgetPasswordPageHandler}>هل نسيت كلمه المرور؟</a>
                    </div>
                    <div className={style.form_btn}>
                        <button onClick={(e)=>{loginHandler(e)}}>تسجيل الدخول</button>
                    </div>
                    <a href=''><span></span>او إنشاء حساب باستخدام<span></span></a>
                </form>
                <div className={style.platforms}>
                    <div className={style.platform_item}>
                        <img src={appleIcon} alt="" />
                    </div>
                    <div className={style.platform_item}>
                        <img src={facebookIcon} alt="" />
                    </div>
                    <div className={style.platform_item}>
                        <img src={googleIcon} alt="" />
                    </div>
                </div>
                <div className={style.switch_auth}>
                    <h4>ليس لديك حساب؟ <span onClick={signUpPageHandler}>إنشاء حساب</span></h4>
                </div>
            </div>
        </>
    )
}
