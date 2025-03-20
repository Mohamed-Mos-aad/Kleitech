// ** Style
import style from '../../style/components/ui/booking.module.css'
// ** Assets
import userNameIcon from '../../assets/auth/formIcons/userNameIcon.svg'
// ** Hooks
import { useState } from 'react'
// ** Other 
import InputElement from '../../components/ui/InputElement'
import { bookingValidation } from '../../validation'





// ** Interface
interface IBooking{
    setBookingOpenend : React.Dispatch<React.SetStateAction<boolean>>
}
import { IBookingData } from '../../interfaces'




export default function Booking({setBookingOpenend}:IBooking) {
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
    const bookingHanlder = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        const validationResults = bookingValidation(bookingData);
        if(Object.values(validationResults).some(message => message !== '')) {
            setBookingError(validationResults);
            return;
        }
        console.log(bookingData);
    }
    
    
    
    
    
    return (
        <>
            <div className={style.booking}>
                <div className={style.booking_container}>
                    <h3>ادخل بيانات الحجز:</h3>
                    <form>
                        <InputElement type='text' id='userName' name='الإسم' error={bookingError.userName} img={{src:userNameIcon,alt:'userNameIcon'}} placeholder='ادخل الإسم بالكامل' value={bookingData.userName} onChange={inputChangeValueHandler}/>
                        <InputElement type='text' id='userPhone' name='رقم الهاتف' error={bookingError.userPhone} img={{src:userNameIcon,alt:'userNameIcon'}} placeholder='ادخل رقم الهاتف' value={bookingData.userPhone} onChange={inputChangeValueHandler}/>
                        <div className={style.form_btns}>
                            <button onClick={(e)=>{bookingHanlder(e)}}>احجز</button>
                            <button onClick={() => setBookingOpenend(false)}>الغاء</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
