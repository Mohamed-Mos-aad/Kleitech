// ** Assets
import {lockIcon,userPasswordIcon} from '../../assets/icons/icons'
// ** Style
import style from '../../style/pages/auth/newPassword.module.css'
// ** Hooks
import { useNavigate } from 'react-router-dom';
// ** Store
import { AppDispatch } from '../../app/store';
import { useDispatch } from 'react-redux';
import { setdonePage } from '../../app/slices/donePageSlice';



export default function NewPassword() {
    // ** Store
    const dispatch: AppDispatch = useDispatch();
    // ** Defaults
    const navigate = useNavigate();
    const donePageHandler = ()=>{navigate('/u/done')};
    dispatch(setdonePage('passwordReset'));

    

    return (
        <>
            <div className={style.new_password_container}>
                <div className={style.icon}>
                    <img src={lockIcon} alt="Logo icon" />
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
                        <img src={userPasswordIcon} alt="Email input icon" />
                    </div>
                    <div className={style.form_input}>
                        <label htmlFor="">تأكيد كلمه المرور</label>
                        <input type="email" name="" id="" placeholder='تأكيد كلمه المرور'/>
                        <img src={userPasswordIcon} alt="Email input icon" />
                    </div>
                    <button onClick={donePageHandler}>تغير كلمه المرور</button>
                </form>
            </div>
        </>
    )
}
