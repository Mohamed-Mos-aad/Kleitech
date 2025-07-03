// ** Style
import style from '../../style/pages/main/profile.module.css'
// ** Assets
import {settingIcon, editeIcon, userNameIcon, userPhoneIcon, userIdIcon, userEmailIcon, arrowUpandDownIcon} from '../../assets/icons/icons'
import {patient1} from '../../assets/images/images'
// ** Hooks && Tools
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// ** Compontents
import InputElement from '../../components/ui/InputElement'





export default function Profile() {
    // ** Default
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('kleitech_user') || sessionStorage.getItem('kleitech_user') || 'null')

    // ** States
    const [settingOpened,setSettingOpened] = useState<boolean>(false);
    const [editeOpened,setEditeOpened] = useState<boolean>(false);



    // ** Handlers
    const settingToggelHandler = ()=>{setSettingOpened(!settingOpened)};
    const changePasswordPageHandler = ()=>{navigate('/u/change-password')}
    const editingToggelHanlder = ()=>{setEditeOpened(!editeOpened)};




    return (
        <>
            <div className={style.profile_container}>
                <section>
                    <div className={style.profile_img}>
                        <img src={patient1} alt="" />
                    </div>
                    <div className={style.user_short_data}>
                        <h1>{user.user.name}</h1>
                        <p>القاهره,الدقهليه,المنصوره </p>
                    </div>
                    <div className={style.setting_btn}>
                        <img src={settingIcon} alt="Setting icon" onClick={settingToggelHandler}/>
                        {
                            settingOpened &&
                            <div className={style.setting_list}>
                                <ul>
                                    <li onClick={changePasswordPageHandler}>تعديل كلمة المرور</li>
                                </ul>
                            </div>
                        }
                    </div>
                </section>
                {
                    editeOpened ?
                    <section className={style.editing_section}>
                        <div className={style.user_data}>
                            <ul>
                                <li>
                                    <InputElement type='text' id='' name='' img={{src: userNameIcon,alt:'UserName icon'}} labelText='الإسم'  value='' error=''  onChange={()=>{console.log('work')}} placeholder='' key={1}/>
                                </li>
                                <li>
                                    <InputElement type='text' id='' name='' img={{src: userPhoneIcon,alt:'UserPhone icon'}} labelText='رقم الهاتف'  value='' error=''  onChange={()=>{console.log('work')}} placeholder='' key={2}/>
                                </li>
                                <li>
                                    <InputElement type='text' id='' name='' img={{src: userIdIcon,alt:'UserId icon'}} labelText='الرقم القومي'  value='' error=''  onChange={()=>{console.log('work')}} placeholder='' key={3}/>
                                </li>
                                <li>
                                    <InputElement type='text' id='' name='' img={{src: userEmailIcon,alt:'UserEmail icon'}} labelText='البريد الالكتروني'  value='' error=''  onChange={()=>{console.log('work')}} placeholder='' key={4}/>
                                </li>
                                <li>
                                    <InputElement type='text' id='' name='' img={{src: arrowUpandDownIcon,alt:'arrowUpandDown icon'}} labelText='الوزن'  value='' error=''  onChange={()=>{console.log('work')}} placeholder='' key={5}/>
                                </li>
                                <li>
                                    <InputElement type='text' id='' name='' img={{src: arrowUpandDownIcon,alt:'arrowUpandDown icon'}} labelText='الطول'  value='' error=''  onChange={()=>{console.log('work')}} placeholder='' key={6}/>
                                </li>
                            </ul>
                        </div>
                        <button onClick={editingToggelHanlder}>حفظ التغيرات</button>
                    </section>
                    :
                    <>
                        <section>
                            <div className={style.edite_btn} onClick={editingToggelHanlder}>
                                تعديل
                                <img src={editeIcon} alt="Edite icon"/>
                            </div>
                            <div className={style.section_title}>
                                <h2>المعلومات الشخصيه </h2>
                            </div>
                            <div className={style.user_data}>
                                <ul>
                                    <li>
                                        <h3>الإسم</h3>
                                        <p>محمد يوسف ابراهيم احمد</p>
                                    </li>
                                    <li>
                                        <h3>رقم الهاتف</h3>
                                        <p>01283529923</p>
                                    </li>
                                    <li>
                                        <h3>الرقم القومي</h3>
                                        <p>30208051102202</p>
                                    </li>
                                    <li>
                                        <h3>البريد الالكتروني</h3>
                                        <p>user.user.email</p>
                                    </li>
                                    <li>
                                        <h3>الوزن</h3>
                                        <p>82</p>
                                    </li>
                                    <li>
                                        <h3>الطول</h3>
                                        <p>190</p>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            <div className={style.section_title}>
                                <h2>العنوان</h2>
                            </div>
                            <div className={style.user_data}>
                                <ul>
                                    <li>
                                        <h3>الدوله</h3>
                                        <p>القاهره</p>
                                    </li>
                                    <li>
                                        <h3>المحافظه / البلد</h3>
                                        <p>الدقهليه/المنصوره</p>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </>
                }
            </div>
        </>
    )
}
