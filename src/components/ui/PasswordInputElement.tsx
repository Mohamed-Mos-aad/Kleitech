// ** assets
import {showPasswordIcon, hideasswordIcon} from '../../assets/icons/icons'
// ** Style
import style from '../../style/components/ui/passwordInputElement.module.css'
// ** Interfaces
import { IInputElement } from './../../interfaces/index';
// ** Hooks && Tools
import { useState } from 'react';






export default function PasswordInputElement({id,name,type,value,placeholder,img,error,onChange}:IInputElement) {
    // States
    const [passwordHidden,setPasswordHidden] = useState<boolean>(false);




    // Handlers
    const passwordInputStateToggleHandler = ()=>{setPasswordHidden(!passwordHidden)}





    return (
        <>
            <div className={style.form_input}>
                <label htmlFor={id}>{name}</label>
                <div className={style.input_element}>
                    <input type={passwordHidden? 'text' : type} value={value} placeholder={placeholder} id={id} onChange={onChange}/>
                    <img className={style.input_icon} src={img.src} alt={img.alt} />
                    <img className={style.password_state} src={passwordHidden? hideasswordIcon : showPasswordIcon} alt="Show password icon" onClick={passwordInputStateToggleHandler}/>
                </div>
                <span className={style.error}>{error}</span>
            </div>
        </>
    )
}
