// ** Assets
import {googleIcon, facebookIcon, appleIcon, userEmailIcon, userPasswordIcon} from '../../../assets/icons/icons'
// ** Style
import style from '../../../style/pages/auth/signUp.module.css'
// ** Components
import InputElement from '../../../components/ui/InputElement'
import PasswordInputElement from '../../../components/ui/PasswordInputElement'



interface ISignUpPage2{
    data: {
        userEmail: string,
        userPassword: string,
        userPasswordConfirm: string
    };
    errors: {
        userEmail: string,
        userPassword: string,
        userPasswordConfirm: string
    };
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onNext: (e: React.FormEvent) => void;
    goToSignIn: ()=> void;
}



export default function SignUpPage2({data,errors,onChange,onNext,goToSignIn}:ISignUpPage2) {
    return (
        <>
            <div className={style.sign_up_container}>
                <h2>إنشاء حساب جديد</h2>
                <form className={style.sign_up_form}>
                    <InputElement id='userEmail' name='البريد الالكتروني' type='email' value={data.userEmail} placeholder='ادخل البريد الالكتروني' img= {{src:userEmailIcon,alt:"User Email Icon"}} error={errors.userEmail} onChange={onChange}/>
                    <PasswordInputElement id='userPassword' name='كلمه المرور' type='password' value={data.userPassword} placeholder='ادخل كلمه المرور' img= {{src:userPasswordIcon,alt:"User password icon"}} error={errors.userPassword} onChange={onChange}/>
                    <PasswordInputElement id='userPasswordConfirm' name='تأكيد كلمه المرور' type='password' value={data.userPasswordConfirm} placeholder='تأكيد كلمه المرور' img= {{src:userPasswordIcon,alt:"User password confirm icon"}} error={errors.userPasswordConfirm} onChange={onChange}/>
                    <div className={style.form_btn}>
                        <button onClick={onNext}>التالي</button>
                    </div>
                </form>
                <h3><span></span>او إنشاء حساب باستخدام<span></span></h3>
                <div className={style.platforms}>
                    <div className={style.platform_item}>
                        <img src={appleIcon} alt="Aplle Platform Icon" />
                    </div>
                    <div className={style.platform_item}>
                        <img src={facebookIcon} alt="Facebook Platform Icon" />
                    </div>
                    <div className={style.platform_item}>
                        <img src={googleIcon} alt="Google Platform Icon" />
                    </div>
                </div>
                <div className={style.switch_auth}>
                    <h4>هل لديك حساب؟ <button onClick={goToSignIn}>تسجيل الدخول</button></h4>
                </div>
            </div>
        </>
    )
}
