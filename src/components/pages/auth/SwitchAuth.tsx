// ** Style
import style from '../../../style/components/pages/auth/switchAuth.module.css'
// ** Hooks && Tools
import { useNavigate } from "react-router-dom";



// ** Interfaces
interface ISwitchAuth{
    currentAuthState: 'signIn' | 'signUp',
}



export default function SwitchAuth({currentAuthState}:ISwitchAuth) {
    // ** Default
    const navigate = useNavigate();



    // ** Navigations
    const goToSignUpPage = ()=>{navigate('/u/sign-up')};
    const goToSignInPage = ()=>{navigate('/u/sign-in')};



    return (
        <>
            <div className={style.switch_auth}>
                {
                    currentAuthState === 'signIn' ? 
                        <h1>ليس لديك حساب؟ <span onClick={goToSignUpPage}>إنشاء حساب</span></h1>
                        :
                        <h1>لديك حساب؟ <span onClick={goToSignInPage}>تسجيل دخول</span></h1>
                }
            </div>
        </>
    )
}
