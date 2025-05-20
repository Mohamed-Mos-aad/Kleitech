// ** Assets
import {logo,userPasswordIcon} from '../../assets/icons/icons'
// ** Style
import style from '../../style/pages/auth/changePassword.module.css'
// ** Hooks && Tools
import { useNavigate } from 'react-router-dom';





export default function ChangePassword() {
    // ** Defaults
    const navigate = useNavigate();
    const donePageHandler = ()=>{navigate('/u/done')};
    const forgetPasswordHandler = ()=>{navigate('/u/forget-password')}




    
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
                        <label htmlFor="">كلمه المرور القديمه</label>
                        <input type="email" name="" id="" placeholder='ادخل كلمه المرور'/>
                        <img src={userPasswordIcon} alt="Email input icon" />
                    </div>
                    <div className={style.form_input}>
                        <label htmlFor="">كلمه المرور الجديده</label>
                        <input type="email" name="" id="" placeholder='ادخل كلمه المرور'/>
                        <img src={userPasswordIcon} alt="Email input icon" />
                    </div>
                    <div className={style.form_input}>
                        <label htmlFor="">تأكيد كلمه المرور الجديده</label>
                        <input type="email" name="" id="" placeholder='تأكيد كلمه المرور'/>
                        <img src={userPasswordIcon} alt="Email input icon" />
                    </div>
                    <span onClick={forgetPasswordHandler}>هل نسيت كلمه المرور؟</span>
                    <button onClick={donePageHandler}>تغير كلمه المرور</button>
                </form>
            </div>
        </>
    )
}
