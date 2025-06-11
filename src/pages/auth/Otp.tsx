// ** Assets
import {otpIcon} from '../../assets/icons/icons'
// ** Style
import style from '../../style/pages/auth/otp.module.css'
// ** Hooks & Tools
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
// ** Store
import { setdonePage } from '../../app/slices/donePageSlice';
// ** Api
import { registerUser } from '../../api/userApi';



export default function Otp() {
    // ** Store
    const dispatch: AppDispatch = useDispatch();
    const userData = useSelector((state: RootState) => state.userSignUp);



    const navigate = useNavigate();



    // ** Navigation
    const goToDonePage = ()=>{navigate('/u/done')};



    // ** States
    const [emailSent,setEmailSent] = useState<boolean>(false);
    const [timer,setTimer] = useState({minutes: 2,seconds: 0})
    const [userInput,setUserInput] = useState(Array(6).fill(''));
    const [codeWrong,setCodeWrong] = useState(false);
    const [otpCode,setOtpCode] = useState('');
    const [resendAllowed, setResendAllowed] = useState(false);



    // ** Handlers
    const generateOtpCodeHandler = ()=>{
        const code = Math.floor(100000 + Math.random() * 900000);
        setOtpCode(code.toString());
        return code;
    }
    const sendEmailHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        setUserInput(Array(6).fill(''));
        const code = generateOtpCodeHandler();
        emailjs.send("service_e75s08c","template_aw2uz9z",{
            passcode: code,
            email: userData.userEmail,
            },'3PaUw5fPoj59Hzt83');
        setEmailSent(true);
    }
    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value.replace(/[^0-9]/g,'');
        const index = +e.target.id - 1
        const next = document.getElementById((index+2).toString());
        const prev = document.getElementById((index).toString());

        setUserInput(prevInputs=>{
            const newInputs = [...prevInputs];
            if(value.length === 1)
            {
                newInputs[index] = value;
                if(index < 5)
                {
                    next?.focus();
                }
            }
            else if(value === '' && index < 6)
            {
                newInputs[index] = '';
                prev?.focus();
            }
            return newInputs;
        });
        setCodeWrong(false);
    }
    const userRegisterHandler = async ()=>{
        try{
            await registerUser(userData);
            dispatch(setdonePage('signUp'));
            goToDonePage();
        }
        catch (error){
            console.error("Registration failed:", error);
        }
    }
    const submitCodeHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        const codeInput = userInput.join('');
        if (codeInput.length < 6)
        {
            setCodeWrong(true);
            return;
        }
        
        if(codeInput === otpCode)
        {
            setCodeWrong(false);
            userRegisterHandler();
        }
        else
        {
            setCodeWrong(true);
        }
    }
    const resendCode = ()=>{
        setTimer({minutes: 2,seconds: 0});
        setEmailSent(false);
    }



    // ** Render
    const renderInput = userInput.map((value,index)=>(
        <input type="tel" maxLength={1} id={`${index+1}`} className={codeWrong ? style.wrong_code : ''} value={value} key={index} onChange={(e)=>{inputChangeHandler(e)}}/>
    ))



    // ** UseEffect
    // Timer
    useEffect(()=>{
        if (!emailSent) return;
        const timerId = setInterval(()=>{
            setTimer(prev=>{
                const totalSeconds = prev.minutes * 60 + prev.seconds;
                if (totalSeconds <= 1) {
                    clearInterval(timerId);
                    return { minutes: 0, seconds: 0 };
                }
                const newTotalSeconds = totalSeconds - 1;
                return {
                    minutes: Math.floor(newTotalSeconds / 60),
                    seconds: newTotalSeconds % 60,
                }
            })
        },1000);
        return () => clearInterval(timerId);
    },[emailSent])
    // Resend
    useEffect(() => {
        if (!emailSent) return;
    
        const allowResendTimer = setTimeout(() => {
            setResendAllowed(true);
        }, 30000);
    
        return () => clearTimeout(allowResendTimer);
    }, [emailSent]);



    return (
        <>
            <div className={style.otp_container}>
                <div className={style.icon}>
                    <img src={otpIcon} alt="Logo icon" />
                </div>
                <div className={style.content}>
                    <h2>التحقق من الكود</h2>
                    <p>
                        الرجاء ادخال الكود الذي ارسلناه الي البريد الالكتروني 
                        {userData.userEmail?.replace(/(.{3})(.*)(@.*)/, (_, a, b, c) => `${a}${'*'.repeat(b.length)}${c}`)}
                    </p>
                </div>
                <form>
                    <div className={style.timer}>
                        {timer.minutes.toString().padStart(2, '0')}:{timer.seconds.toString().padStart(2, '0')}
                    </div>
                    <div className={style.otp_code}>
                        {renderInput}
                    </div>
                    {codeWrong && <p className={style.error_message}>الكود غير صحيح، حاول مرة أخرى</p>}
                    {emailSent ?
                        <button onClick={(e)=>{submitCodeHandler(e)}}>تأكيد</button>                    
                    : 
                        <button onClick={(e)=>{sendEmailHandler(e)}}>إرسال رمز التأكيد</button>
                    }
                    {
                        emailSent && resendAllowed &&
                        <h4>لم يتم ارسال رمز تأكيد ؟<span onClick={resendCode}> ارسل مره اخري</span></h4>
                    }
                </form>
            </div>
        </>
    )
}
