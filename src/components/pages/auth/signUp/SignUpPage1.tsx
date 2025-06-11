// ** Style
import style from '../../../../style/pages/auth/signUp.module.css'
// ** Assets
import {userNameIcon, userIdIcon, userPhoneIcon} from '../../../../assets/icons/icons'
// ** Components
import InputElement from '../../../ui/InputElement'
import PlatformsAuth from '../PlatformsAuth';
import SwitchAuth from '../SwitchAuth';



// ** Interfaces
interface ISignUpPage1{
    data: {
        userName: string,
        userId: string,
        userPhone: string
    };
    errors: {
        userName: string,
        userId: string,
        userPhone: string
    };
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onNext: (e: React.FormEvent) => void;
}



export default function SignUpPage1({data,errors,onChange,onNext}:ISignUpPage1) {
    return (
        <>
            <div className={style.sign_up_container}>
                <h2>إنشاء حساب جديد</h2>
                <form className={style.sign_up_form}>
                    <InputElement id='userName' name='الإسم' type='text' value={data.userName} placeholder='ادخل الإسم بالكامل' img= {{src:userNameIcon,alt:"User Name Icon"}} error={errors.userName} onChange={onChange}/>
                    <InputElement id='userId' name='الرقم القومي' type='text' value={data.userId} placeholder='ادخل الرقم القومي' img= {{src:userIdIcon,alt:"User Id Icon"}} error={errors.userId} onChange={onChange}/>
                    <InputElement id='userPhone' name='رقم الهاتف' type='text' value={data.userPhone} placeholder='ادخل رقم الهاتف' img= {{src:userPhoneIcon,alt:"User Phone Icon"}} error={errors.userPhone} onChange={onChange}/>
                    <div className={style.form_btn}>
                        <button onClick={onNext}>التالي</button>
                    </div>
                </form>
                <h3><span></span>او إنشاء حساب باستخدام<span></span></h3>
                <PlatformsAuth />
                <SwitchAuth currentAuthState="signUp"/>
            </div>
        </>
    )
}
