// ** Style
import style from '../../style/pages/auth/signUp.module.css'
// ** Assets
import userNameIcon from '../../assets/auth/formIcons/userNameIcon.svg'
import userIdIcon from '../../assets/auth/formIcons/userIdIcon.svg'
import userPhoneIcon from '../../assets/auth/formIcons/userPhoneIcon.svg'
import userEmailIcon from '../../assets/auth/formIcons/userEmailIcon.svg'
import userPasswordIcon from '../../assets/auth/formIcons/userPasswordIcon.svg'
import userDataIcon from '../../assets/auth/formIcons/userDateIcon.svg'
import googleIcon from '../../assets/auth/socialIcons/googleIcon.svg'
import facebookIcon from '../../assets/auth/socialIcons/facebookIcon.svg'
import appleIcon from '../../assets/auth/socialIcons/appleIcon.svg'
import arrowLeftIcon from '../../assets/auth/arrow-left.svg'
import arrowRightIcon from '../../assets/auth/arrow-right.svg'
import arrowDownIcon from '../../assets/auth/formIcons/downArrowIcon.svg'
// ** Other
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import InputElement from '../../components/ui/InputElement'
import PasswordInputElement from '../../components/ui/PasswordInputElement'






export default function SignUp() {
    // ** Defaults
    const navigate = useNavigate();
    const signInPageHandler = ()=>{navigate('/u/sign-in')};
    const otpPageHandler = ()=>{navigate('/u/otp')};






    // ** States
    const [currentSignUpPage,setCurrentSignUpPage] = useState<number>(1);



    // ** Handlers
    const nextSignUpPage = ()=>{
        if(currentSignUpPage != 3)
        {
            setCurrentSignUpPage(currentSignUpPage+1);
        }
    }
    const prevSignUpPage = ()=>{
        if(currentSignUpPage != 1)
        {
            setCurrentSignUpPage(currentSignUpPage-1);
        }
    }

    




    // ** Other
    const singUpPage1Content = (
        <div className={style.sign_up_container}>
            <h2>إنشاء حساب جديد</h2>
            <form className={style.sign_up_form}>
                <InputElement id='userName' name='الإسم' type='text' placeholder='ادخل الإسم بالكامل' img= {{src:userNameIcon,alt:"User Name Icon"}} error=''/>
                <InputElement id='userId' name='الرقم القومي' type='text' placeholder='ادخل الرقم القومي' img= {{src:userIdIcon,alt:"User Id Icon"}} error=''/>
                <InputElement id='userPhone' name='رقم الهاتف' type='text' placeholder='ادخل رقم الهاتف' img= {{src:userPhoneIcon,alt:"User Phone Icon"}} error=''/>
                <div className={style.form_btn}>
                    <button onClick={nextSignUpPage}>التالي</button>
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
                <h4>هل لديك حساب؟ <span onClick={signInPageHandler}>تسجيل الدخول</span></h4>
            </div>
        </div>
    )
    const singUpPage2Content = (
        <div className={style.sign_up_container}>
            <h2>إنشاء حساب جديد</h2>
            <form className={style.sign_up_form}>
                <InputElement id='userEmail' name='البريد الالكتروني' type='email' placeholder='ادخل البريد الالكتروني' img= {{src:userEmailIcon,alt:"User Email Icon"}} error=''/>
                <PasswordInputElement id='userPassword' name='كلمه المرور' type='password' placeholder='ادخل كلمه المرور' img= {{src:userPasswordIcon,alt:"User password icon"}} error=''/>
                <PasswordInputElement id='userPasswordConfirm' name='تأكيد كلمه المرور' type='password' placeholder='تأكيد كلمه المرور' img= {{src:userPasswordIcon,alt:"User password confirm icon"}} error=''/>
                <div className={style.form_btn}>
                    <button onClick={nextSignUpPage}>التالي</button>
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
                <h4>هل لديك حساب؟ <span onClick={signInPageHandler}>تسجيل الدخول</span></h4>
            </div>
        </div>
    )
    const singUpPage3Content = (
        <div className={style.sign_up_container}>
            <form className={style.sign_up_form}>
                    <div className={style.form_radios}>
                        <h4>هل تعاني من امراض مزمنه؟</h4>
                        <div className={style.radios}>
                            <div className={style.form_input_radio}>
                                <input type="radio" name="hasIllnesses" id="hasIllnesses" />
                                <label htmlFor="hasIllnesses">نعم</label>
                            </div>
                            <div className={style.form_input_radio}>
                                <input type="radio" name="hasIllnesses" id="noIllnesses" />
                                <label htmlFor="noIllnesses">لا</label>
                            </div>
                            <span className={style.error}></span>
                        </div>
                    </div>
                    <div className={style.form_inputs}>
                    <div className={style.form_input}>
                        <label htmlFor="userWeight">الوزن</label>
                        <div className={style.input_element}>
                            <input type="text" placeholder="ادخل وزنك" id='userWeight'/>
                            <img src={userPhoneIcon} alt="User weight icon" />
                        </div>
                        <span className={style.error}></span>
                    </div>
                    <div className={style.form_input}>
                        <label htmlFor="userHeight">الطول</label>
                        <div className={style.input_element}>
                            <input type="text" placeholder="ادخل طولك" id='userHeight'/>
                            <img src={userPhoneIcon} alt="User height icon" />
                        </div>
                        <span className={style.error}></span>
                    </div>
                </div>
                <div className={style.form_radios}>
                    <h4>هل تتابع مع طبيب؟</h4>
                    <div className={style.radios}>
                        <div className={style.form_input_radio}>
                            <input type="radio" name="hasDoctor" id="hasDoctor" />
                            <label htmlFor="hasDoctor">نعم</label>
                        </div>
                        <div className={style.form_input_radio}>
                            <input type="radio" name="hasDoctor" id="noDoctor" />
                            <label htmlFor="noDoctor">لا</label>
                        </div>
                        <span className={style.error}></span>
                    </div>
                </div>
                <div className={style.form_input}>
                    <label htmlFor="userDate">تاريخ التشخيص</label>
                    <div className={style.input_element}>
                        <input type="text" placeholder="التاريخ" id='userDate'/>
                        <img src={userDataIcon} alt="User date icon" />
                    </div>
                    <span className={style.error}></span>
                </div>
                <div className={style.form_input}>
                    <label htmlFor="userState">المرحله الحاليه من المرض</label>
                    <div className={style.input_element}>
                        <input type="text" placeholder="حالتك" id='userState'/>
                        <img src={arrowDownIcon} alt="User state icon" />
                    </div>
                    <span className={style.error}></span>
                </div>
                <div className={style.form_btn}>
                    <button onClick={otpPageHandler}>إنشاء الحساب</button>
                </div>
            </form>
        </div>
    )

    return (
        <>
            <div className={style.sign_up}>
                {currentSignUpPage === 1 && singUpPage1Content}
                {currentSignUpPage === 2 && singUpPage2Content}
                {currentSignUpPage === 3 && singUpPage3Content}
                <div className={style.sign_up_footer}>
                    <div className={style.arrow_icon} onClick={nextSignUpPage}>
                        <img src={arrowRightIcon} alt="" />
                    </div>
                    <h3>صفحه {currentSignUpPage} من 3</h3>
                    <div className={style.arrow_icon} onClick={prevSignUpPage}>
                        <img src={arrowLeftIcon} alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}
