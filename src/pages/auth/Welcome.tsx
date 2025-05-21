// ** Style
import style from '../../style/pages/auth/welcome.module.css'
// ** Hooks && Tools
import { useNavigate } from 'react-router-dom';




export default function Welcome() {
    // ** Defaults
    const navigate = useNavigate();





    // ** Handlers
    const signInHandler = ()=>{navigate('/u/sign-in')};
    const signUpHandler = ()=>{navigate('/u/sign-up')};





    return (
        <>
            <div className={style.welcome_container}>
                <div className={style.welcome_title}>
                    <h2>مرحباً بك في كليّتِك</h2>
                    <p>للحصول على تجربة مميزة، يمكنك تسجيل الدخول أو إنشاء حساب جديد</p>    
                </div>
                <div className={style.auth_btns}>
                    <button onClick={signUpHandler}>إنشاء حساب</button>
                    <button onClick={signInHandler}>تسجيل دخول</button>
                </div>
            </div>
        </>
    )
}
