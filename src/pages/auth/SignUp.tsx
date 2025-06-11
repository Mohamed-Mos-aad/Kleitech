// ** Assets
import {arrowLeftIcon, arrowRightIcon} from '../../assets/icons/icons'
// ** Style
import style from '../../style/pages/auth/signUp.module.css'
// ** Hooks && Tools
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
// ** Store
import { AppDispatch } from '../../app/store';
import { setUserSignUpData } from '../../app/slices/userSignUpSlice';
// ** Interfaces
import { ISignUpData } from '../../interfaces'
// ** Validation
import { inputValidation } from '../../validation'
// ** Components
import SignUpPage1 from '../../components/pages/auth/signUp/SignUpPage1'
import SignUpPage2 from '../../components/pages/auth/signUp/SignUpPage2';
import SignUpPage3 from '../../components/pages/auth/signUp/SignUpPage3';



// ** Constants
const defaultUserData:ISignUpData = {
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

const SignUpSteps = {
    STEP_1: 1,
    STEP_2: 2,
    STEP_3: 3
}



export default function SignUp() {
    // ** Store
    const dispatch: AppDispatch = useDispatch();



    // ** Navigation
    const navigate = useNavigate();
    const goToOtp = ()=>{navigate('/u/otp')};



    // ** States
    const [currentStep,setCurrentStep] = useState<number>(SignUpSteps.STEP_1);
    const [userData,setUserData] = useState<ISignUpData>(defaultUserData);
    const [errors,setErrors] = useState<ISignUpData>(defaultUserData);



    // ** Handlers
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | { target: { id: string; value: string } }) => {
        const {name,value} = e.target as HTMLInputElement;
        setErrors((prev)=>({...prev,[name]: '' }))
        setUserData((prev)=>({...prev,[name]: value }))
    }
    const changeStepHandler = (e :React.FormEvent,forward:boolean) => {
        e.preventDefault();

        const validationResults = inputValidation(userData);
        const stepValidations = {
            [SignUpSteps.STEP_1]: validationResults.userName === '' && validationResults.userId === '' && validationResults.userPhone === '',
            [SignUpSteps.STEP_2]: validationResults.userEmail === '' && validationResults.userPassword === '' && validationResults.userPasswordConfirm === '',
            [SignUpSteps.STEP_3]: false
        }

        if(forward && !stepValidations[currentStep])
        {
            setErrors(validationResults);
            return;
        }

        setCurrentStep(prev=>{
            const step = forward? prev+1 : prev-1;
            if(step >= 1 && step <= 3)
            {
                return step;
            }
            return prev;
        });
        setErrors(defaultUserData);
    }
    const createAccountHandler = (e: React.FormEvent)=>{
        e.preventDefault();
        const validationResults = inputValidation(userData);
        const isStep3Valid = validationResults.hasIllnesses === null && validationResults.userWeight === '' && validationResults.userHeight === '' && validationResults.hasDoctor === null && validationResults.userDate === '' && validationResults.userState === '';
        if(!isStep3Valid) {
            setErrors(validationResults);
            return;
        }
        dispatch(setUserSignUpData(userData));
        goToOtp();
    }



    // ** Renders
    const renderCurrentStep = ()=>{
        const commonProps = {
            data:userData,
            errors:errors,
            onChange: handleInputChange
        }
        switch(currentStep)
        {
            case 1 : return <SignUpPage1 {...commonProps} onNext={(e)=>{changeStepHandler(e,true)}}/>;
            case 2 : return <SignUpPage2 {...commonProps} onNext={(e)=>{changeStepHandler(e,true)}}/>;
            case 3 : return <SignUpPage3 {...commonProps} createAccountHandler={createAccountHandler}/>;
        }
    }


    
    return (
        <>
            <div className={style.sign_up}>
                {renderCurrentStep()}
                <div className={style.sign_up_footer}>
                    <div className={style.arrow_icon} onClick={(e)=>{changeStepHandler(e,true)}} aria-label="Next step">
                        <img src={arrowRightIcon} alt="التالي"/>
                    </div>
                    <h1>صفحه {currentStep} من 3</h1>
                    <div className={style.arrow_icon} onClick={(e)=>{changeStepHandler(e,false)}} aria-label="Prev step">
                        <img src={arrowLeftIcon} alt="السابق"/>
                    </div>
                </div>
            </div>
        </>
    )
}
