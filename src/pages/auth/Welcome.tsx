// ** Style
import style from '../../style/pages/auth/welcome.module.css'
// ** Hooks && Tools
import { useNavigate } from 'react-router-dom';



export default function Welcome() {
    // ** Defaults
    const navigate = useNavigate();
    const pagesRoutes = {
        sign_in: '/u/sign-in',
        sign_up: '/u/sign-up',
    };


    
    // ** Handlers
    const signInHandler = ()=>{navigate(pagesRoutes.sign_in)};
    const signUpHandler = ()=>{navigate(pagesRoutes.sign_up)};



    return (
        <>
            <main className={style.welcome_container}>
                <div className={style.welcome_title}>
                    <h2>مرحباً بك في كليّتِك</h2>
                    <p>للحصول على تجربة مميزة، يمكنك تسجيل الدخول أو إنشاء حساب جديد</p>    
                </div>
                <div className={style.auth_btns}>
                    <button onClick={signInHandler} aria-label="تسجيل الدخول إلى حسابك">تسجيل دخول</button>
                    <button onClick={signUpHandler} aria-label="إنشاء حساب جديد في كليتك">إنشاء حساب</button>
                </div>
            </main>
        </>
    )
}
