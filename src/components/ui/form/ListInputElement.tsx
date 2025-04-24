// ** Style
import style from '../../../style/pages/auth/signUp.module.css'
// ** Assets
import arrowDownIcon from '../../../assets/auth/formIcons/downArrowIcon.svg'
import { useState } from 'react';



interface IListInputElement{
    error: string,
    onChange: ({ target }: { target: { id: string; value: string } }) => void;
}


export default function ListInputElement({error,onChange}:IListInputElement) {
    // ** States
    const [listOpened,setListOpened] = useState(false);
    const [userState, setUserState] = useState('');




    // ** Handlers
    const toggleHandler = ()=>{setListOpened(!listOpened)};
    const selectHandler = (value:string) => {
        setUserState(value);
        setListOpened(false);
        const event = {
            target: {
                id: 'userState',
                value: value
            }
        }
        onChange(event);
    }




    return (
        <>
            <div className={style.form_list_input}>
                <label htmlFor="userState">المرحله الحاليه من المرض</label>
                <div className={style.input_element}>
                    <input type="text" value={userState} placeholder='حالتك' readOnly onClick={toggleHandler}/>
                    {
                        listOpened &&
                        <ul>
                            <li onClick={()=>{selectHandler('خفيفة جدًا')}}>خفيفة جدًا</li>
                            <li onClick={()=>{selectHandler('خفيفة')}}>خفيفة</li>
                            <li onClick={()=>{selectHandler('متوسطة')}}>متوسطة</li>
                            <li onClick={()=>{selectHandler('شديدة')}}>شديدة</li>
                            <li onClick={()=>{selectHandler('الفشل الكلوي')}}>الفشل الكلوي</li>
                        </ul>
                    }
                    <img src={arrowDownIcon} alt="User state icon" />
                </div>
                <span className={style.error}>{error}</span>
            </div>
        </>
    )
}
