// ** Style
import style from '../../style/components/ui/passwordInputElement.module.css'
// ** assets
import showPasswordIcon from '../../assets/auth/formIcons/showPasswordIcon.svg'
import hideasswordIcon from '../../assets/auth/formIcons/hidePasswordIcon.svg'
// ** Interfaces
import { IInputElement } from './../../interfaces/index';
import { useState } from 'react';






export default function PasswordInputElement({id,name,type,placeholder,img,error}:IInputElement) {
    // States
    const [passwordHidden,setPasswordHidden] = useState<boolean>(false);




    // Handlers
    const passwordInputStateToggleHandler = ()=>{setPasswordHidden(!passwordHidden)}





    return (
        <>
            <div className={style.form_input}>
                <label htmlFor={id}>{name}</label>
                <div className={style.input_element}>
                    <input type={passwordHidden? 'text' : type} placeholder={placeholder} id={id}/>
                    <img className={style.input_icon} src={img.src} alt={img.alt} />
                    <img className={style.password_state} src={passwordHidden? hideasswordIcon : showPasswordIcon} alt="Show password icon" onClick={passwordInputStateToggleHandler}/>
                </div>
                <span className={style.error}>{error}</span>
            </div>
        </>
    )
}
