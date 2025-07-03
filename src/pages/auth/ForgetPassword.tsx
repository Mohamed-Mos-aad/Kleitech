// ** assets
import {keyIcon, emailInputIcon} from '../../assets/icons/icons'
// ** Style
import style from '../../style/pages/auth/forgetPassword.module.css'
// ** Hooks && Tools
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// ** Components
import InputElement from '../../components/ui/InputElement';
// ** Store
import { setOtpEmail } from '../../app/slices/auth/otpSlice';
import { AppDispatch } from '../../app/store';
import { useDispatch } from 'react-redux';



export default function ForgetPassword() {
    // ** Store
    const dispatch: AppDispatch = useDispatch();



    // ** Defaults
    const navigate = useNavigate();
    const otpPageHandler = ()=>{navigate('/u/otp')};



    // ** States
    const [data,setData] = useState({email: ''});
    const [errors,setErrors] = useState({email: ''});



    // ** Handlers
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | { target: { id: string; value: string } }) => {
        const {id,value} = e.target as HTMLInputElement;
        setErrors((prev)=>({...prev,[id]: '' }))
        setData((prev)=>({...prev,[id]: value }))
    }
    const forgetPasswordHandler = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        dispatch(setOtpEmail({ otpEmail: data.email, purpose: 'resetPassword'}));
        otpPageHandler();
    }



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
                    <InputElement error={errors.email} id='email' name='email' img={{src: emailInputIcon, alt:"Email input icon" }} labelText='البريد الالكتروني' onChange={handleInputChange} placeholder='ادخل البريد الالكتروني' type='email' value={data.email}/>
                    <button onClick={(e)=>{forgetPasswordHandler(e)}}>إرسال رمز التأكيد</button>
                </form>
            </div>
        </>
    )
}
