// ** Assets
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/auth/doneIcon.svg'
// ** Style
import style from '../../style/pages/auth/done.module.css'



export default function Done() {
    // ** Defaults
    const navigate = useNavigate();
    const signInHandler = ()=>{navigate('/u/sign-in')};






    return (
        <>
            <div className={style.done_container}>
                <div className={style.icon}>
                    <img src={logo} alt="Logo icon" />
                </div>
                <div className={style.content}>
                    <h2>اعاده تعين كلمه المرور </h2>
                    <p>
                        لقد تم تعير كلمه المرور بنجاح انقر لتسجيل الدخول
                    </p>
                </div>
                <form>
                    <button onClick={signInHandler}>تسجيل الدخول</button>
                </form>
            </div>
        </>
    )
}
