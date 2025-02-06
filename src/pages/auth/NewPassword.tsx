// ** Assets
import logo from '../../assets/auth/lockIcon.svg'
import passwordIcon from '../../assets/auth/formIcons/passwordInputIcon.svg'
// ** Style
import style from '../../style/pages/auth/newPassword.module.css'
import { useNavigate } from 'react-router-dom';




export default function NewPassword() {
    // ** Defaults
    const navigate = useNavigate();
    const donePageHandler = ()=>{navigate('/u/done')};




    
    return (
        <>
            <div className={style.new_password_container}>
                <div className={style.icon}>
                    <img src={logo} alt="Logo icon" />
                </div>
                <div className={style.content}>
                    <h2>تغير كلمه مرور جديده</h2>
                    <p>
                        يجب ان تكون كلمه المرور الجديده مختلفه عن كلمه المرور التي استخدمتها سابقاً
                    </p>
                </div>
                <form>
                    <div className={style.form_input}>
                        <label htmlFor="">كلمه المرور</label>
                        <input type="email" name="" id="" placeholder='ادخل كلمه المرور'/>
                        <img src={passwordIcon} alt="Email input icon" />
                    </div>
                    <div className={style.form_input}>
                        <label htmlFor="">تأكيد كلمه المرور</label>
                        <input type="email" name="" id="" placeholder='تأكيد كلمه المرور'/>
                        <img src={passwordIcon} alt="Email input icon" />
                    </div>
                    <button onClick={donePageHandler}>تغير كلمه المرور</button>
                </form>
            </div>
        </>
    )
}
