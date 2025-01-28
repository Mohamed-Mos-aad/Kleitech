// ** Style
import style from '../../style/pages/auth/signUp.module.css'
// ** Assets
import googleIcon from '../../assets/auth/socialIcons/googleIcon.svg'
import facebookIcon from '../../assets/auth/socialIcons/facebookIcon.svg'
import appleIcon from '../../assets/auth/socialIcons/appleIcon.svg'
import arrowLeftIcon from '../../assets/auth/arrow-left.svg'
import arrowRightIcon from '../../assets/auth/arrow-right.svg'
// ** Other
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'






export default function SignUp() {
    // ** Defaults
    const navigate = useNavigate();
    const signUpHandler = ()=>{navigate('/u/sign-up')};
    const singUpPage1Content = (
        <div>
            <form className={style.sign_up_form}>
                <div className={style.form_row}>
                    <label htmlFor="">الإسم</label>
                    <input type="text" placeholder="ادخل الإسم بالكامل"/>
                </div>
                <div className={style.form_row}>
                    <label htmlFor="">الرقم القومي</label>
                    <input type="text" placeholder="ادخل الرقم القومي"/>
                </div>
                <div className={style.form_row}>
                    <label htmlFor="">رقم الهاتف</label>
                    <input type="text" placeholder="ادخل رقم الهاتف"/>
                </div>
                <div className={style.form_btn}>
                    <button>التالي</button>
                </div>
                <a href=''><span></span>او إنشاء حساب باستخدام<span></span></a>
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
                <h4>هل لديك حساب؟ <span onClick={signUpHandler}>تسجيل الدخول</span></h4>
            </div>
        </div>
    )
    const singUpPage2Content = (
        <div>
            <form className={style.sign_up_form}>
                <div className={style.form_row}>
                    <label htmlFor="">البريد الالكتروني</label>
                    <input type="email" placeholder="ادخل البريد الالكتروني"/>
                </div>
                <div className={style.form_row}>
                    <label htmlFor="">كلمه المرور</label>
                    <input type="password" placeholder="ادخل كلمه المرور"/>
                </div>
                <div className={style.form_row}>
                    <label htmlFor="">تأكيد كلمه المرور</label>
                    <input type="password" placeholder="تأكيد كلمه المرور"/>
                </div>
                <div className={style.form_btn}>
                    <button>التالي</button>
                </div>
                <a href=''><span></span>او إنشاء حساب باستخدام<span></span></a>
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
                <h4>هل لديك حساب؟ <span onClick={signUpHandler}>تسجيل الدخول</span></h4>
            </div>
        </div>
    )
    const singUpPage3Content = (
        <div>
            <form className={style.sign_up_form}>
                <div className={style.form_row}>
                    <label htmlFor="">هل تعاني من امراض مزمنه؟</label>
                    <div className={style.form_radios}>
                        <div className={style.form_input}>
                            <input type="radio" name="" id="" />
                            <label htmlFor="">نعم</label>    
                        </div>
                        <div className={style.form_input}>
                            <input type="radio" name="" id="" />
                            <label htmlFor="">لا</label>
                        </div>
                    </div>
                </div>
                <div className={style.form_row}>
                    <label htmlFor="">الوزن</label>
                    <input type="text" placeholder="ادخل وزنك"/>
                </div>
                <div className={style.form_row}>
                    <label htmlFor="">الطول</label>
                    <input type="text" placeholder="ادخل طولك"/>
                </div>
            </form>
        </div>
    )
    const singUpPage4Content = (
        <div>
            <form className={style.sign_up_form}>
            <div className={style.form_row}>
                    <label htmlFor="">هل تتابع مع طبيب؟</label>
                    <div className={style.form_radios}>
                        <div className={style.form_input}>
                            <input type="radio" name="" id="" />
                            <label htmlFor="">نعم</label>    
                        </div>
                        <div className={style.form_input}>
                            <input type="radio" name="" id="" />
                            <label htmlFor="">لا</label>
                        </div>
                    </div>
                </div>
                <div className={style.form_row}>
                    <label htmlFor="">تاريخ التشخيص</label>
                    <input type="text" placeholder="التاريخ"/>
                </div>
                <div className={style.form_row}>
                    <label htmlFor="">المرحله الحاليه من المرض</label>
                    <input type="text" placeholder="حالتك"/>
                </div>
                <div className={style.form_btn}>
                    <button>إنشاء الحساب</button>
                </div>
            </form>
        </div>
    )





    // ** States
    const [currentSignUpPage,setCurrentSignUpPage] = useState<number>(1);



    // ** Handlers
    const nextSignUpPage = ()=>{
        if(currentSignUpPage != 4)
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

    



    return (
        <>
            <div className={style.sign_up}>
                <div className={style.sign_up_container}>
                    <h2>إنشاء حساب جديد</h2>
                    {currentSignUpPage === 1 && singUpPage1Content}
                    {currentSignUpPage === 2 && singUpPage2Content}
                    {currentSignUpPage === 3 && singUpPage3Content}
                    {currentSignUpPage === 4 && singUpPage4Content}
                </div>
                <div className={style.sign_up_footer}>
                    <div className={style.arrow_icon} onClick={nextSignUpPage}>
                        <img src={arrowRightIcon} alt="" />
                    </div>
                    <h3>صفحه {currentSignUpPage} من 4</h3>
                    <div className={style.arrow_icon}>
                        <img src={arrowLeftIcon} alt="" onClick={prevSignUpPage}/>
                    </div>
                </div>
            </div>
        </>
    )
}
