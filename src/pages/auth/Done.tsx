// ** Assets
import {logo} from '../../assets/icons/icons'
// ** Style
import style from '../../style/pages/auth/done.module.css'
// ** Hooks && Tools
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



export default function Done() {
    // ** Store
    const actionType = useSelector((state: RootState) => state.donePage.actionType);
    

    // ** Defaults
    const navigate = useNavigate();
    // ** Navigation
    const goTosignIn = ()=>{navigate('/u/sign-in')};

    const doneActions:Record<string, { title: string; message: string }> = {
        signUp :{
            title: 'تأكيد التسجيل',
            message: 'لقد تم تسجيل حسابك بنجاح انقر لتسجيل الدخول'
        },
        passwordResetSignUp : {
            title: 'اعاده تعين كلمه المرور',
            message: 'لقد تم تعير كلمه المرور بنجاح انقر لتسجيل الدخول'
        }
    }


    const actionContent = doneActions[actionType] || {
        title: 'عملية ناجحة',
        message: 'تمت العملية بنجاح، انقر لتسجيل الدخول',
    };



    return (
        <>
            <div className={style.done_container}>
                <div className={style.icon}>
                    <img src={logo} alt="Logo icon" />
                </div>
                <div className={style.content}>
                    <h2>{actionContent.title}</h2>
                    <p>{actionContent.message}</p>
                </div>
                <form>
                    <button onClick={goTosignIn}>تسجيل الدخول</button>
                </form>
            </div>
        </>
    )
}
