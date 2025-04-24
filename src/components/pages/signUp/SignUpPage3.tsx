// ** Style
import style from '../../../style/pages/auth/signUp.module.css'
// ** Assets
import arrowUpandDownIcon from '../../../assets/auth/formIcons/arrowsUpandDownIcon.svg'
// ** Hooks
import ListInputElement from '../../ui/form/ListInputElement';
import DateInputElement from '../../ui/form/DateInputElement';


interface ISignUpPage3{
    data: {
        hasIllnesses: string | boolean | null,
        userWeight: string,
        userHeight: string,
        hasDoctor: string | boolean | null,
        userDate: string,
        userState: string
    };
    errors: {
        hasIllnesses: string | boolean | null,
        userWeight: string,
        userHeight: string,
        hasDoctor: string | boolean | null,
        userDate: string,
        userState: string
    };
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | { target: { id: string; value: string } }) => void;
    createAccountHandler: (e: React.FormEvent) => void;
}

export default function SignUpPage3({data,errors,onChange,createAccountHandler}:ISignUpPage3) {
    return (
        <>
            <div className={style.sign_up_container}>
                <form className={style.sign_up_form}>
                        <div className={style.form_radios}>
                            <h4>هل تعاني من امراض مزمنه؟</h4>
                            <div className={style.radios}>
                                <div className={style.form_input_radio}>
                                    <input type="radio" name="hasIllnesses" id='hasIllnesses' checked={data.hasIllnesses === 'true'} value={'true'} onChange={onChange}/>
                                    <label htmlFor="hasIllnesses">نعم</label>
                                </div>
                                <div className={style.form_input_radio}>
                                    <input type="radio" name="hasIllnesses" id='hasIllnesses' checked={data.hasIllnesses === 'false'} value={'false'} onChange={onChange}/>
                                    <label htmlFor="noIllnesses">لا</label>
                                </div>
                                <span className={style.error}>{errors.hasIllnesses}</span>
                            </div>
                        </div>
                        <div className={style.form_inputs}>
                        <div className={style.form_input}>
                            <label htmlFor="userWeight">الوزن</label>
                            <div className={style.input_element}>
                                <input type="text" value={data.userWeight} placeholder="ادخل وزنك" id='userWeight' onChange={onChange}/>
                                <img src={arrowUpandDownIcon} alt="User weight icon" />
                            </div>
                            <span className={style.error}>{errors.userWeight}</span>
                        </div>
                        <div className={style.form_input}>
                            <label htmlFor="userHeight">الطول</label>
                            <div className={style.input_element}>
                                <input type="text" value={data.userHeight} placeholder="ادخل طولك" id='userHeight' onChange={onChange}/>
                                <img src={arrowUpandDownIcon} alt="User height icon" />
                            </div>
                            <span className={style.error}>{errors.userHeight}</span>
                        </div>
                    </div>
                    <div className={style.form_radios}>
                        <h4>هل تتابع مع طبيب؟</h4>
                        <div className={style.radios}>
                            <div className={style.form_input_radio}>
                                <input type="radio" name="hasDoctor" id='hasDoctor' checked={data.hasDoctor === 'true'} value={'true'} onChange={onChange}/>
                                <label htmlFor="hasDoctor">نعم</label>
                            </div>
                            <div className={style.form_input_radio}>
                                <input type="radio" name="hasDoctor" id='hasDoctor' checked={data.hasDoctor === 'false'} value={'false'} onChange={onChange}/>
                                <label htmlFor="noDoctor">لا</label>
                            </div>
                            <span className={style.error}>{errors.hasDoctor}</span>
                        </div>
                    </div>
                    <DateInputElement error={errors.userDate} onChange={onChange}/>
                    <ListInputElement error={errors.userState} onChange={onChange}/>
                    <div className={style.form_btn}>
                        <button onClick={createAccountHandler}>إنشاء الحساب</button>
                    </div>
                </form>
            </div>
        </>
    )
}
