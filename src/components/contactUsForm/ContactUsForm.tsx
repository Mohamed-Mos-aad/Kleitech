// ** Assets
import {userNameIcon, userEmailIcon} from '../../assets/icons/icons'
// ** Style
import style from '../../style/pages/landing/sections/contactUs.module.css'
// ** Component
import InputElement from '../ui/InputElement'
// ** Hooks && Tools
import { useState } from 'react'




export default function ContactUsForm() {
    // ** States
    const [message,setMessage] = useState({
        userFirstName: '',
        userSecondName: '',
        userEmail: '',
        userMessage: '',
        userAgreeToTerms: false
    })



    // ** Handlers
    const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const {id, type, value} = e.currentTarget;
        if(type === 'checkbox')
        {
            const checked = (e.currentTarget as HTMLInputElement).checked;
            setMessage(prev => ({
                ...prev,
                [id]: checked,
            }))
        }
        else
        {
            setMessage(prev => ({
                ...prev,
                [id]: value,
            }))
        }
    }
    const sendMessage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        if(message.userFirstName !== '' && message.userSecondName !== '' && message.userEmail !== '' && message.userMessage !== '')
        {
            console.log(message);
            setMessage({
                userFirstName: '',
                userSecondName: '',
                userEmail: '',
                userMessage: '',
                userAgreeToTerms: false,
            });
        }        
    }




    return (
        <>
            <form className={style.contact_us_form}>
                <div className={style.form_row}>
                    <InputElement error='' id='userFirstName' img={{src: userNameIcon, alt: 'user name icon'}} name='الاسم الاول' onChange={(e)=>{onchangeHandler(e)}} placeholder='ادخل الإسم  الاول' type='text' value={message.userFirstName}/>
                    <InputElement error='' id='userSecondName' img={{src: userNameIcon, alt: 'user name icon'}} name='الاسم الثاني' onChange={(e)=>{onchangeHandler(e)}} placeholder='ادخل الإسم  الثاني' type='text' value={message.userSecondName}/>
                </div>
                    <InputElement error='' id='userEmail' img={{src: userEmailIcon, alt: 'user email icon'}} name='البريد الالكتروني' onChange={(e)=>{onchangeHandler(e)}} placeholder='ادخل البريد الالكتروني' type='email' value={message.userEmail}/>
                <div className={style.form_input}>
                    <label htmlFor="message">الرساله</label>
                    <textarea name="" id="userMessage" placeholder='اكتب رسالتك' onChange={(e)=>{onchangeHandler(e)}} value={message.userMessage}></textarea>
                </div>
                <div className={style.form_terms}>
                    <input type="checkbox" name="agreeToTerms" id="userAgreeToTerms" onChange={onchangeHandler} checked={message.userAgreeToTerms === true}/>
                    <label htmlFor="userAgreeToTerms">انت توافق علي <a href="">سياسيه الخصوصيه</a> الخاصه بنا</label>
                </div>
                <button onClick={(e)=>{sendMessage(e)}}>إرسال الرساله</button>
            </form>
        </>
    )
}
