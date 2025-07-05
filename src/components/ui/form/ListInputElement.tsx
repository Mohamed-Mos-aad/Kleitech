// ** Style
import style from '../../../style/components/ui/form/listInputElement.module.css'
// ** Hooks && Tools
import { useState } from 'react';



interface IListInputElement{
    listImg: string,
    labelText: string,
    placeholder: string,
    error: string,
    values: string[],
    inputId: string,
    onChange: ({ target }: { target: { id: string; value: string } }) => void;
}


export default function ListInputElement({labelText,placeholder,inputId,error,values,onChange,listImg}:IListInputElement) {
    // ** States
    const [listOpened,setListOpened] = useState(false);
    const [userValue, setUserValue] = useState('');




    // ** Handlers
    const toggleHandler = ()=>{setListOpened(!listOpened)};
    const selectHandler = (value:string) => {
        setUserValue(value);
        setListOpened(false);
        const event = {
            target: {
                id: inputId,
                value: value,
                name: inputId,
            }
        }
        onChange(event);
    }




    // ** Renders
    const listItemsRender = values.map(item =>
        <li onClick={()=>{selectHandler(item)}} key={item}>{item}</li>
    )


    return (
        <>
            <div className={style.form_list_input}>
                <label htmlFor="userValue">{labelText}</label>
                <div className={style.input_element}>
                    <input type="text" value={userValue} placeholder={placeholder} readOnly onClick={toggleHandler}/>
                    {
                        listOpened &&
                        <ul>
                            {listItemsRender}
                        </ul>
                    }
                    <img src={listImg} alt="List input icon" />
                </div>
                <span className={style.error}>{error}</span>
            </div>
        </>
    )
}
