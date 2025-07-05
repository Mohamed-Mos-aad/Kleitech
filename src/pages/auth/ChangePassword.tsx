// ** Assets
import {lockIcon,userPasswordIcon} from '../../assets/icons/icons'
// ** Style
import style from '../../style/pages/auth/changePassword.module.css'
// ** Hooks && Tools
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// ** Components
import PasswordInputElement from '../../components/ui/PasswordInputElement';
// ** Api
import { changePassword } from '../../api/auth/authApi';
import { setdonePage } from '../../app/slices/donePageSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';



export default function ChangePassword() {
    // ** Defaults
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const donePageHandler = ()=>{navigate('/u/done')};
    const forgetPasswordHandler = ()=>{navigate('/u/forget-password')}



    // ** States
    const [data,setData] = useState({current_password: '',
        new_password: '',
        new_password_confirmation: ''
    })
    const [errors,setErrors] = useState({current_password: '',
        new_password: '',
        new_password_confirmation: ''
    });



    // ** Handlers
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | { target: { id: string; value: string } }) => {
        const {id,value} = e.target as HTMLInputElement;
        setErrors((prev)=>({...prev,[id]: '' }))
        setData((prev)=>({...prev,[id]: value }))
    }
    const changePasswordHandler = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        try{
            await changePassword({current_password: data.current_password,new_password: data.new_password, new_password_confirmation: data.new_password_confirmation});
            dispatch(setdonePage('passwordChange'));
            donePageHandler();
        }
        catch(error){
            console.log(error)
        }
        finally{
            setErrors({current_password: '',
                new_password: '',
                new_password_confirmation: ''
            });
        }
    }


    
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
                    <PasswordInputElement id='current_password' name='current_password' labelText='كلمه المرور القديمه' type='password' value={data.current_password} placeholder='ادخل كلمه المرور' img= {{src:userPasswordIcon,alt:"User password icon"}} error={errors.current_password} onChange={handleInputChange}/>
                    <PasswordInputElement id='new_password' name='new_password' labelText='كلمه المرور الجديده' type='password' value={data.new_password} placeholder='ادخل كلمه المرور' img= {{src:userPasswordIcon,alt:"User password icon"}} error={errors.new_password} onChange={handleInputChange}/>
                    <PasswordInputElement id='new_password_confirmation' name='new_password_confirmation' labelText='تأكيد كلمه المرور الجديده' type='password' value={data.new_password_confirmation} placeholder='تأكيد كلمه المرور' img= {{src:userPasswordIcon,alt:"User password icon"}} error={errors.new_password_confirmation} onChange={handleInputChange}/>
                    <span onClick={forgetPasswordHandler}>هل نسيت كلمه المرور؟</span>
                    <button onClick={(e)=>{changePasswordHandler(e)}}>تغير كلمه المرور</button>
                </form>
            </div>
        </>
    )
}
