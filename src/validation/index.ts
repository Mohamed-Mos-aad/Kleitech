// ** Interfaces
import { ISignUpData } from "../interfaces";






// Handlers
export function inputValidation(
    {userName,
    userId,
    userPhone,
    userEmail,
    userPassword,
    userPasswordConfirm,
    hasIllnesses,
    userWeight,
    userHeight,
    hasDoctor,
    userDate,
    userState
}:ISignUpData)
{
    const validationMessages:ISignUpData = {
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

    if(!userName.trim() || userName.length < 8)
    {
        validationMessages.userName = "يرجى إدخال الاسم بالكامل.";
    }

    if(!userId.trim() || userId.length < 14)
    {
        validationMessages.userId = "يرجى إدخال الرقم القومي بشكل صحيح.";
    }

    if(!userPhone.trim() || userPhone.length < 11)
    {
        validationMessages.userPhone = "يرجى إدخال رقم الهاتف بشكل صحيح."
    }
        
    if(!userEmail.trim())
    {
        validationMessages.userEmail = "يرجى إدخال البريد الإلكتروني بشكل صحيح.";   
    }
    
    if(!userPassword.trim() || userPassword.length < 8)
    {
        validationMessages.userPassword = "يرجى إدخال كلمة المرور (على الأقل 8 أحرف)."; 
    }
    
    if(!userPasswordConfirm.trim() || userPasswordConfirm !== userPassword)
    {
        validationMessages.userPasswordConfirm = "يرجى التأكد من أن كلمة المرور تتطابق."; 
    }
    
    if(hasIllnesses === '')
    {
        validationMessages.hasIllnesses = "يرجى اختيار الإجابة."; 
    }
    
    if(!userWeight.trim() || Number(userWeight) < 1)
    {
        validationMessages.userWeight = "يرجى إدخال وزنك بشكل صحيح."; 
    }
    
    if(!userHeight.trim() || Number(userHeight) < 1)
    {
        validationMessages.userHeight = "يرجى إدخال طولك بشكل صحيح."; 
    }
    
    if(hasDoctor === '')
    {
        validationMessages.hasDoctor = "يرجى اختيار الإجابة."; 
    }
    
    if(!userDate.trim())
    {
        validationMessages.userDate = "يرجى إدخال تاريخ التشخيص بشكل صحيح."; 
    }
    
    if(!userState.trim())
    {
        validationMessages.userState = "يرجى إدخال حالتك بشكل صحيح."; 
    }


    return validationMessages;
}