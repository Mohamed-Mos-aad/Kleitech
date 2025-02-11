// ** Style
import style from '../../style/pages/auth/signUp.module.css'
// ** Interfaces
import { IInputElement } from './../../interfaces/index';






export default function InputElement({id,type,placeholder,img,error}:IInputElement) {
    return (
        <>
            <div className={style.form_input}>
                <label htmlFor={id}>الإسم</label>
                <div className={style.input_element}>
                    <input type={type} placeholder={placeholder} id={id}/>
                    <img src={img.src} alt={img.alt} />
                </div>
                <span className={style.error}>{error}</span>
            </div>
        </>
    )
}
