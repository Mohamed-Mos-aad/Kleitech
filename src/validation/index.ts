// ** Interfaces
import { ISignUpData } from "../interfaces";
import { IBookingData } from '../interfaces'






// Handlers
const isEmpty = (val: string) => !val.trim();
const isTooShort = (val: string,min:number) => val.trim().length < min;
const isTooLong = (val: string,max:number) => val.trim().length > max;
const isInvalidNumber = (val:string) => isNaN(Number(val)) || Number(val) <= 0;
const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isInvalidEmail = (val:string) => !reg.test(val);
const isNotEqual = (val1:string,val2:string) => val1 !== val2;






// ** Validations
export function inputValidation(data:ISignUpData)
{
    const validationMessages:ISignUpData = {
        userName: '',
        userId: '',
        userPhone: '',
        userEmail: '',
        userPassword: '',
        userPasswordConfirm: '',
        hasIllnesses: null,
        userWeight: '',
        userHeight: '',
        hasDoctor: null,
        userDate: '',
        userState: ''
    }

    if(isEmpty(data.userName) || isTooShort(data.userName,8))
    {
        validationMessages.userName = "يرجى إدخال الاسم بالكامل.";
    }

    if(isEmpty(data.userId) || data.userId.length !== 14)
    {
        validationMessages.userId = "يرجى إدخال الرقم القومي بشكل صحيح.";
    }

    if(isEmpty(data.userPhone) || data.userPhone.length !== 11)
    {
        validationMessages.userPhone = "يرجى إدخال رقم الهاتف بشكل صحيح."
    }
        
    if(isEmpty(data.userEmail) || isInvalidEmail(data.userEmail))
    {
        validationMessages.userEmail = "يرجى إدخال البريد الإلكتروني بشكل صحيح.";   
    }
    
    if(isEmpty(data.userPassword) || isTooShort(data.userPassword,8) || isTooLong(data.userPassword,20))
    {
        validationMessages.userPassword = "يرجى إدخال كلمة المرور (على الأقل 8 أحرف)."; 
    }
    
    if(isEmpty(data.userPasswordConfirm) || isNotEqual(data.userPasswordConfirm,data.userPassword))
    {
        validationMessages.userPasswordConfirm = "يرجى التأكد من أن كلمة المرور تتطابق."; 
    }
    
    if(data.hasIllnesses === null)
    {
        validationMessages.hasIllnesses = "يرجى اختيار الإجابة."; 
    }
    
    if(isEmpty(data.userWeight) || isInvalidNumber(data.userWeight))
    {
        validationMessages.userWeight = "يرجى إدخال وزنك بشكل صحيح."; 
    }
    
    if(isEmpty(data.userHeight) || isInvalidNumber(data.userHeight))
    {
        validationMessages.userHeight = "يرجى إدخال طولك بشكل صحيح."; 
    }
    
    if(data.hasDoctor === null)
    {
        validationMessages.hasDoctor = "يرجى اختيار الإجابة."; 
    }
    
    if(isEmpty(data.userDate))
    {
        validationMessages.userDate = "يرجى إدخال تاريخ التشخيص بشكل صحيح."; 
    }
    
    if(isEmpty(data.userState))
    {
        validationMessages.userState = "يرجى إدخال حالتك بشكل صحيح."; 
    }


    return validationMessages;
}


export function bookingValidation({userName,userPhone}:IBookingData)
{
    const validationMessages:IBookingData = {
        userName: '',
        userPhone: ''
    }



    if(isEmpty(userName) || isTooShort(userName,8))
    {
        validationMessages.userName = "يرجى إدخال الاسم بالكامل.";
    }

    if(isEmpty(userPhone) || userPhone.length !== 11)
    {
        validationMessages.userPhone = "يرجى إدخال رقم الهاتف بشكل صحيح."
    }
    


    return validationMessages;
}