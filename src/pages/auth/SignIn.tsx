// ** Style
import style from '../../style/pages/auth/signIn.module.css'
// ** Assets
import {googleIcon, facebookIcon, appleIcon, userEmailIcon, userPasswordIcon} from '../../assets/icons/icons'
// ** Hooks && Tools
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
// ** Components
import PasswordInputElement from '../../components/ui/PasswordInputElement';
import InputElement from '../../components/ui/InputElement'
// ** Store
import { loginUser } from '../../api/userApi'
import { AppDispatch } from '../../app/store'
import { useDispatch } from 'react-redux'
import { setUserLogin } from '../../app/slices/userSlice'


// ** Constants
const defaultUserData = {
    email: '',
    password: ''
}

export default function SignIn() {
    // ** Store
    const dispatch: AppDispatch = useDispatch();


    // ** Default
    const navigate = useNavigate();


    // ** Navigation
    const goToSignUpPage = ()=>{navigate('/u/sign-up')};
    const goToForgetPasswordPage = ()=>{navigate('/u/forget-password')};
    const goToHomePage = ()=>{navigate('/m')};



    // ** States
    const [userData,setUserData] = useState(defaultUserData);
    const [errors,setErrors] = useState(defaultUserData);
    const [isRememberMeChecked ,setIsRememberMeChecked ] = useState<boolean>(false)



    // ** Handlers
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | { target: { id: string; value: string } }) => {
        const {id,value} = e.target as HTMLInputElement;
        setErrors((prev)=>({...prev,[id]: '' }))
        setUserData((prev)=>({...prev,[id]: value }))
    }
    const loginUserHandler = async ()=>{
        try{
            const res = await loginUser(userData);
            if (res&& res.token && res.user)
            {
                const storage = isRememberMeChecked ? localStorage : sessionStorage;
                storage.setItem("kleitech_user", JSON.stringify({
                    token: res.token,
                    user: res.user
                }));
                dispatch(setUserLogin({ ...res.user, token: res.token, loggedIn: true }));
                goToHomePage();
            }
        }
        catch(error){
            console.log(error)
            setErrors((prev)=>({...prev,email: 'البريد الالكتروني أو كلمة المرور غير صحيحة' }));
        }
    }
    const toggleRememberMeHandler = ()=>{
        setIsRememberMeChecked(!isRememberMeChecked)
    }
    const submitLoginHandler = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        loginUserHandler();
    };







    return (
        <>
            <div className={style.sign_in_container}>
                <h2>تسجيل الدخول</h2>
                <form className={style.sign_in_form}>
                    <InputElement id='email' name='البريد الالكتروني' type='email' value={userData.email} placeholder='ادخل البريد الالكتروني' img= {{src:userEmailIcon,alt:"User Email Icon"}} error={errors.email} onChange={handleInputChange}/>
                    <PasswordInputElement id='password' name='كلمه المرور' type='password' value={userData.password} placeholder='ادخل كلمه المرور' img= {{src:userPasswordIcon,alt:"User password icon"}} error={errors.password} onChange={handleInputChange}/>
                    <div className={style.form_footer}>
                        <input type="checkbox" onChange={toggleRememberMeHandler}/>
                        <label htmlFor="">تذكرني</label>
                        <a onClick={goToForgetPasswordPage}>هل نسيت كلمه المرور؟</a>
                    </div>
                    <div className={style.form_btn}>
                        <button onClick={(e)=>{submitLoginHandler(e)}}>تسجيل الدخول</button>
                    </div>
                    <h5><span></span>او إنشاء حساب باستخدام<span></span></h5>
                </form>
                <div className={style.platforms}>
                    <div className={style.platform_item}>
                        <img src={appleIcon} alt="" />
                    </div>
                    <div className={style.platform_item}>
                        <img src={facebookIcon} alt="" />
                    </div>
                    <div className={style.platform_item}>
                        <img src={googleIcon} alt="" />
                    </div>
                </div>
                <div className={style.switch_auth}>
                    <h4>ليس لديك حساب؟ <span onClick={goToSignUpPage}>إنشاء حساب</span></h4>
                </div>
            </div>
        </>
    )
}
