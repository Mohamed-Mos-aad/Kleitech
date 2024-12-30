// ** Style
import style from '../../style/pages/auth/welcome.module.css'





export default function Welcome() {
    return (
        <>
            <div className={style.welcome_container}>
                <div className={style.welcome_title}>
                    <h2>مرحباً بك في كليّتِك</h2>
                    <p>للحصول على تجربة مميزة، يمكنك تسجيل الدخول أو إنشاء حساب جديد</p>    
                </div>
                <div className={style.auth_btns}>
                    <button>إنشاء حساب</button>
                    <button>تسجيل دخول</button>
                </div>
            </div>
        </>
    )
}
