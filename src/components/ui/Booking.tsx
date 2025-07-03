// ** Assets
import {userNameIcon, userPhoneIcon} from '../../assets/icons/icons'
// ** Style
import style from '../../style/components/ui/booking.module.css'
// ** Hooks && Tools
import { useState } from 'react'
import { bookingValidation } from '../../validation'
// ** Components 
import InputElement from '../../components/ui/InputElement'





// ** Interface
interface IBooking{
    setBookingOpened : React.Dispatch<React.SetStateAction<boolean>>
    setBookingDoneOpened : React.Dispatch<React.SetStateAction<boolean>>,
    saveBookingData: (userName: string, userPhone: string, bookingDate: string)=> void,
    bookingDate: string
}
import { IBookingData } from '../../interfaces'




export default function Booking({setBookingOpened,setBookingDoneOpened,saveBookingData,bookingDate}:IBooking) {
    // ** Defaults
    const defaultBookingData:IBookingData = {
        userName: '',
        userPhone: ''
    }
    const defaultBookingError:IBookingData =  {
        userName: '',
        userPhone: ''
    }





    // ** States
    const [bookingData,setBookingData] = useState<IBookingData>(defaultBookingData)
    const [bookingError,setBookingError] = useState<IBookingData>(defaultBookingError)







    // ** Handlers
    const inputChangeValueHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setBookingError((prev)=>{
            return{
                ...prev,
                [e.target.id]: '' 
            }
        })
        setBookingData((prev)=>{
            return{
                ...prev,
                [e.target.id]: e.target.value
            }
        })
    }
    
    const bookingHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        const validationResults = bookingValidation(bookingData);
        if(Object.values(validationResults).some(message => message !== '')) {
            setBookingError(validationResults);
            return;
        }
        
        saveBookingData(bookingData.userName, bookingData.userPhone, bookingDate);
        setBookingOpened(false);
        setBookingDoneOpened(true);
    }
    
    
    
    
    
    return (
        <>
            <div className={style.booking}>
                <div className={style.booking_container}>
                    <h3>ادخل بيانات الحجز:</h3>
                    <form>
                        <InputElement type='text' id='userName' name='userName' labelText='الإسم' error={bookingError.userName} img={{src:userNameIcon,alt:'userNameIcon'}} placeholder='ادخل الإسم بالكامل' value={bookingData.userName} onChange={inputChangeValueHandler}/>
                        <InputElement type='text' id='userPhone' name='userPhone' labelText='رقم الهاتف' error={bookingError.userPhone} img={{src:userPhoneIcon,alt:'userPhoneIcon'}} placeholder='ادخل رقم الهاتف' value={bookingData.userPhone} onChange={inputChangeValueHandler}/>
                        <div className={style.form_btns}>
                            <button onClick={(e)=>{bookingHandler(e)}}>احجز</button>
                            <button onClick={() => setBookingOpened(false)}>الغاء</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
