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
import arrowUpandDownIcon from '../../assets/auth/formIcons/arrowsUpandDownIcon.svg'
// ** Other
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import InputElement from '../../components/ui/InputElement'
import PasswordInputElement from '../../components/ui/PasswordInputElement'
import { ISignUpData } from '../../interfaces'
import { inputValidation } from '../../validation'






export default function SignUp() {
    // ** Defaults
    const navigate = useNavigate();
    const signInPageHandler = ()=>{navigate('/u/sign-in')};
    const otpPageHandler = ()=>{navigate('/u/otp')};
    const defaultuserSignUpData:ISignUpData = {
        userName: '',
        userId: '',
        userPhone: '',
        userEmail: '',
        userPassword: '',
        userPasswordConfirm: '',
        hasIllnesses: '',
        userWeight: '',
        userHeight: '',
        hasDoctor: '',
        userDate: '',
        userState: ''
    }
    const defaultuserSignUpDataErrors:ISignUpData = {
        userName: '',
        userId: '',
        userPhone: '',
        userEmail: '',
        userPassword: '',
        userPasswordConfirm: '',
        hasIllnesses: '',
        userWeight: '',
        userHeight: '',
        hasDoctor: '',
        userDate: '',
        userState: ''
    }




    // ** States
    const [currentSignUpPage,setCurrentSignUpPage] = useState<number>(1);
    const [userSignUpData,setUserSignUpData] = useState<ISignUpData>(defaultuserSignUpData);
    const [userSignUpDataErrors,setUserSignUpDataErrors] = useState<ISignUpData>(defaultuserSignUpDataErrors);





    // ** Handlers
    const nextSignUpPageHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const validationResults = inputValidation(userSignUpData);
        if(currentSignUpPage === 1)
        {
            if(validationResults.userName !== '' || validationResults.userId !== '' || validationResults.userPhone !== '') {
                setUserSignUpDataErrors(validationResults);
                return;
            }
        }
        if(currentSignUpPage === 2)
        {
            if(validationResults.userEmail !== '' || validationResults.userPassword !== '' || validationResults.userPasswordConfirm !== '') {
                setUserSignUpDataErrors(validationResults);
                return;
            }
        }
        
        if(currentSignUpPage != 3)
        {
            setUserSignUpDataErrors(defaultuserSignUpDataErrors);
            setCurrentSignUpPage(currentSignUpPage+1);
        }
    }
    const prevSignUpPageHandler =(e: React.FormEvent) => {
        e.preventDefault();
        if(currentSignUpPage != 1)
        {
            setCurrentSignUpPage(currentSignUpPage-1);
        }
    }
    const inputChangeValueHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setUserSignUpDataErrors((prev)=>{
            return{
                ...prev,
                [e.target.id]: '' 
            }
        })
        setUserSignUpData((prev)=>{
            return{
                ...prev,
                [e.target.id]: e.target.value 
            }
        })
    }
    const creatAccountHandler = (e: React.FormEvent)=>{
        e.preventDefault();
        const validationResults = inputValidation(userSignUpData);
        if(validationResults.hasIllnesses !== '' || validationResults.userWeight !== '' || validationResults.userHeight !== '' || validationResults.hasDoctor !== '' || validationResults.userDate !== '' || validationResults.userState !== '') {
            setUserSignUpDataErrors(validationResults);
            return;
        }

        otpPageHandler();
    }
    




    // ** Other
    const singUpPage1Content = (
        <div className={style.sign_up_container}>
            <h2>إنشاء حساب جديد</h2>
            <form className={style.sign_up_form}>
                <InputElement id='userName' name='الإسم' type='text' value={userSignUpData.userName} placeholder='ادخل الإسم بالكامل' img= {{src:userNameIcon,alt:"User Name Icon"}} error={userSignUpDataErrors.userName} onChange={(e)=>{inputChangeValueHandler(e)}}/>
                <InputElement id='userId' name='الرقم القومي' type='text' value={userSignUpData.userId} placeholder='ادخل الرقم القومي' img= {{src:userIdIcon,alt:"User Id Icon"}} error={userSignUpDataErrors.userId} onChange={(e)=>{inputChangeValueHandler(e)}}/>
                <InputElement id='userPhone' name='رقم الهاتف' type='text' value={userSignUpData.userPhone} placeholder='ادخل رقم الهاتف' img= {{src:userPhoneIcon,alt:"User Phone Icon"}} error={userSignUpDataErrors.userPhone} onChange={(e)=>{inputChangeValueHandler(e)}}/>
                <div className={style.form_btn}>
                    <button onClick={nextSignUpPageHandler}>التالي</button>
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
                <InputElement id='userEmail' name='البريد الالكتروني' type='email' value={userSignUpData.userEmail} placeholder='ادخل البريد الالكتروني' img= {{src:userEmailIcon,alt:"User Email Icon"}} error={userSignUpDataErrors.userEmail} onChange={(e)=>{inputChangeValueHandler(e)}}/>
                <PasswordInputElement id='userPassword' name='كلمه المرور' type='password' value={userSignUpData.userPassword} placeholder='ادخل كلمه المرور' img= {{src:userPasswordIcon,alt:"User password icon"}} error={userSignUpDataErrors.userPassword} onChange={(e)=>{inputChangeValueHandler(e)}}/>
                <PasswordInputElement id='userPasswordConfirm' name='تأكيد كلمه المرور' type='password' value={userSignUpData.userPasswordConfirm} placeholder='تأكيد كلمه المرور' img= {{src:userPasswordIcon,alt:"User password confirm icon"}} error={userSignUpDataErrors.userPasswordConfirm} onChange={(e)=>{inputChangeValueHandler(e)}}/>
                <div className={style.form_btn}>
                    <button onClick={nextSignUpPageHandler}>التالي</button>
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
                                <input type="radio" name="hasIllnesses" id="hasIllnesses"/>
                                <label htmlFor="hasIllnesses">نعم</label>
                            </div>
                            <div className={style.form_input_radio}>
                                <input type="radio" name="hasIllnesses" id="noIllnesses"/>
                                <label htmlFor="noIllnesses">لا</label>
                            </div>
                            <span className={style.error}>{userSignUpDataErrors.hasIllnesses}</span>
                        </div>
                    </div>
                    <div className={style.form_inputs}>
                    <div className={style.form_input}>
                        <label htmlFor="userWeight">الوزن</label>
                        <div className={style.input_element}>
                            <input type="text" value={userSignUpData.userWeight} placeholder="ادخل وزنك" id='userWeight' onChange={(e)=>{inputChangeValueHandler(e)}}/>
                            <img src={arrowUpandDownIcon} alt="User weight icon" />
                        </div>
                        <span className={style.error}>{userSignUpDataErrors.userWeight}</span>
                    </div>
                    <div className={style.form_input}>
                        <label htmlFor="userHeight">الطول</label>
                        <div className={style.input_element}>
                            <input type="text" value={userSignUpData.userHeight} placeholder="ادخل طولك" id='userHeight' onChange={(e)=>{inputChangeValueHandler(e)}}/>
                            <img src={arrowUpandDownIcon} alt="User height icon" />
                        </div>
                        <span className={style.error}>{userSignUpDataErrors.userHeight}</span>
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
                        <span className={style.error}>{userSignUpDataErrors.hasDoctor}</span>
                    </div>
                </div>
                <div className={style.form_input}>
                    <label htmlFor="userDate">تاريخ التشخيص</label>
                    <div className={style.input_element}>
                        <input type="text" placeholder="التاريخ" id='userDate'/>
                        <img src={userDataIcon} alt="User date icon" />
                    </div>
                    <span className={style.error}>{userSignUpDataErrors.userDate}</span>
                </div>
                <div className={style.form_input}>
                    <label htmlFor="userState">المرحله الحاليه من المرض</label>
                    <div className={style.input_element}>
                        <input type="text" placeholder="حالتك" id='userState'/>
                        <img src={arrowDownIcon} alt="User state icon" />
                    </div>
                    <span className={style.error}>{userSignUpDataErrors.userState}</span>
                </div>
                <div className={style.form_btn}>
                    <button onClick={creatAccountHandler}>إنشاء الحساب</button>
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
                    <div className={style.arrow_icon} onClick={nextSignUpPageHandler}>
                        <img src={arrowRightIcon} alt="" />
                    </div>
                    <h3>صفحه {currentSignUpPage} من 3</h3>
                    <div className={style.arrow_icon} onClick={prevSignUpPageHandler}>
                        <img src={arrowLeftIcon} alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}
