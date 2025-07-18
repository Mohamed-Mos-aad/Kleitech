// ** Style
import style from '../../style/pages/auth/signIn.module.css'
// ** Assets
import {userEmailIcon, userPasswordIcon} from '../../assets/icons/icons'
// ** Hooks && Tools
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { useMessagePop } from '../../hooks/useMessagePop';
// ** Components
import PasswordInputElement from '../../components/ui/PasswordInputElement';
import InputElement from '../../components/ui/InputElement'
import PlatformsAuth from '../../components/pages/auth/PlatformsAuth';
import SwitchAuth from '../../components/pages/auth/SwitchAuth';
// ** Store
import { AppDispatch } from '../../app/store'
import { useDispatch } from 'react-redux'
import { setUserLogin } from '../../app/slices/userSlice'
// ** Api
import { loginUser } from '../../api/auth/authApi';
// ** Firebase
import { auth } from '../../firebase/firebase-config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';




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
    const { showMessage } = useMessagePop();



    // ** Navigation
    const goToForgetPasswordPage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        navigate('/u/forget-password')
    };
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
        if(userData.email.trim() === '' )
        {
            setErrors(prev => ({
                ...prev,
                email: "يرجي كتابة البريد الالكتروني."
            }))
            return;
        }
        else if(userData.password.trim() === '' )
        {
            setErrors(prev => ({
                ...prev,
                password: "يرجي كتابة كلمة السر."
            }))
            return;
        }

        try{
            showMessage({state:'loading', content: 'جاري تسجيل الدخول'});            
            const res = await loginUser(userData);
            if (res&& res.token && res.user)
            {
                const storage = isRememberMeChecked ? localStorage : sessionStorage;
                storage.setItem("kleitech_user", JSON.stringify({
                    token: res.token,
                    user: res.user
                }));
                try {
                    await signInWithEmailAndPassword(auth, userData.email, userData.email);
                }
                catch (firebaseError: unknown) {
                    if (firebaseError instanceof FirebaseError) {
                        if (firebaseError.code === "auth/user-not-found" || firebaseError.code === "auth/invalid-credential") {
                            await createUserWithEmailAndPassword(auth, userData.email, userData.email);
                        } else {
                            console.error(firebaseError);
                            throw new Error("فشل تسجيل الدخول على فايربيز");
                        }   
                    }
                    else {
                        console.error('Unexpected error:', firebaseError);
                    }
                }
                dispatch(setUserLogin({ ...res.user, token: res.token, loggedIn: true }));
                goToHomePage();
            }
        }
        catch(error){
            console.log(error);
            setErrors((prev)=>({...prev,email: 'البريد الالكتروني أو كلمة المرور غير صحيحة' }));
            showMessage({state:'error', content: 'فشل تسجيل الدخول'});
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
                <h1>تسجيل الدخول</h1>
                <form className={style.sign_in_form}>
                    <InputElement id='email' name='email' labelText='البريد الالكتروني' type='email' value={userData.email} placeholder='ادخل البريد الالكتروني' img= {{src:userEmailIcon,alt:"User Email Icon"}} error={errors.email} onChange={handleInputChange}/>
                    <PasswordInputElement id='password' name='password' labelText='كلمه المرور' type='password' value={userData.password} placeholder='ادخل كلمه المرور' img= {{src:userPasswordIcon,alt:"User password icon"}} error={errors.password} onChange={handleInputChange}/>
                    <div className={style.form_footer}>
                        <input id='rememberMe' type="checkbox" onChange={toggleRememberMeHandler}/>
                        <label htmlFor="rememberMe">تذكرني</label>
                        <button type="button" onClick={goToForgetPasswordPage}>هل نسيت كلمه المرور؟</button>
                    </div>
                    <div className={style.form_btn}>
                        <button type="submit" onClick={submitLoginHandler}>تسجيل الدخول</button>
                    </div>
                    <h2>او إنشاء حساب باستخدام</h2>
                </form>
                <PlatformsAuth />
                <SwitchAuth currentAuthState="signIn"/>
            </div>
        </>
    )
}