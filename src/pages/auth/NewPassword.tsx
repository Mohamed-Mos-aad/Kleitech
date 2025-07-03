// ** Assets
import {lockIcon,userPasswordIcon} from '../../assets/icons/icons'
// ** Style
import style from '../../style/pages/auth/newPassword.module.css'
// ** Hooks && Tools
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// ** Store
import { AppDispatch, RootState } from '../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { setdonePage } from '../../app/slices/donePageSlice';
// ** Components
import PasswordInputElement from '../../components/ui/PasswordInputElement';
// ** Api
import { resetPassword } from '../../api/auth/authApi';
// ** Firebase
import { changeFirebasePassword } from '../../firebase/firebaseApis';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase-config';



export default function NewPassword() {
    // ** Store
    const dispatch: AppDispatch = useDispatch();
    const userEmail = useSelector((state: RootState) => state.otpEmail);



    // ** Defaults
    const navigate = useNavigate();
    const donePageHandler = ()=>{navigate('/u/done')};
    dispatch(setdonePage('passwordReset'));



    // ** States
    const [data,setData] = useState({
        email: userEmail.otpEmail,
        password: '',
        password_confirmation: '',
        token: userEmail.token
    })
    const [errors,setErrors] = useState({
        password: '',
        password_confirmation: ''
    });
    


    // ** Handler
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | { target: { id: string; value: string } }) => {
        const {id,value} = e.target as HTMLInputElement;
        setErrors((prev)=>({...prev,[id]: '' }))
        setData((prev)=>({...prev,[id]: value }))
    }
    const resetPasswordHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        try{
            if(userEmail.otpEmail && data.email)
            {
                await resetPassword({email: data.email, password: data.password, password_confirmation: data.password_confirmation,token: data.token?? ''});
                await signInWithEmailAndPassword(auth, data.email, data.password);
                await changeFirebasePassword(data.password)
                donePageHandler();
            }
        }
        catch(error){
            console.log(error);
        }
    }
    


    useEffect(()=>{
        if(!userEmail.otpEmail)
        {
            navigate('/u');
        }
    },[userEmail.otpEmail,navigate])



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
                    <PasswordInputElement id='password' name='password' labelText='كلمه المرور الجديدة' type='password' value={data.password} placeholder='ادخل كلمه المرور' img= {{src:userPasswordIcon,alt:"User password icon"}} error={errors.password} onChange={handleInputChange}/>
                    <PasswordInputElement id='password_confirmation' name='password_confirmation' labelText='كلمه المرور الجديدة' type='password' value={data.password_confirmation} placeholder='ادخل كلمه المرور' img= {{src:userPasswordIcon,alt:"User password icon"}} error={errors.password_confirmation} onChange={handleInputChange}/>
                    <button onClick={(e)=>{resetPasswordHandler(e)}}>تغير كلمه المرور</button>
                </form>
            </div>
        </>
    )
}
