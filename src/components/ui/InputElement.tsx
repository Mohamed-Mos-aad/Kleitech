// ** Style
import style from '../../style/components/ui/inputElement.module.css'
// ** Interfaces
import { IInputElement } from './../../interfaces/index';






export default function InputElement({id,name,type,placeholder,img,error}:IInputElement) {
    return (
        <>
            <div className={style.form_input}>
                <label htmlFor={id}>{name}</label>
                <div className={style.input_element}>
                    <input type={type} placeholder={placeholder} id={id}/>
                    <img src={img.src} alt={img.alt} />
                </div>
                <span className={style.error}>{error}</span>
            </div>
        </>
    )
}
