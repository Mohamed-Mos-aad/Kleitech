// ** Style
import style from '../../style/pages/main/profile.module.css'
// ** Assets
import {settingIcon, editeIcon, userNameIcon, userPhoneIcon, userIdIcon, userEmailIcon, arrowUpandDownIcon} from '../../assets/icons/icons'
import noPhoto from '../../assets/main/consultation/noPhoto.png'
// ** Hooks && Tools
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// ** Compontents
import InputElement from '../../components/ui/InputElement'
import { updateUserProfile } from './../../api/auth/authApi';





export default function Profile() {
    // ** Default
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('kleitech_user') || sessionStorage.getItem('kleitech_user') || 'null')


    
    // ** States
    const [settingOpened,setSettingOpened] = useState<boolean>(false);
    const [editeOpened,setEditeOpened] = useState<boolean>(false);
    const [editedUser, setEditedUser] = useState({
        name: user.user.name || '',
        phone: user.user.phone || '',
        national_id: user.user.national_id || '',
        email: user.user.email || '',
        weight: user.user.weight || '',
        height: user.user.height || ''
    });



    // ** Handlers
    const settingToggelHandler = ()=>{setSettingOpened(!settingOpened)};
    const changePasswordPageHandler = ()=>{navigate('/u/change-password')}
    const updateUserProfileHandler =  async () => {
        try {
            await updateUserProfile({
                name: editedUser.name,
                email: user.user.email,
                phone: editedUser.phone,
                height: Number(editedUser.height),
                weight: Number(editedUser.weight),
                has_chronic_diseases: user.user.has_chronic_diseases
            });
            editingToggelHanlder();
        } catch (error) {
            console.error(error);
        }
    };
    const editingToggelHanlder = ()=>{
        setEditeOpened(!editeOpened);
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedUser(prev => ({
            ...prev,
            [name]: value
        }));
    };



    return (
        <>
            <div className={style.profile_container}>
                <section>
                    <div className={style.profile_img}>
                        <img src={user.user.photo || noPhoto} alt="" />
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
                                    <InputElement
                                        type='text'
                                        id='name'
                                        name='name'
                                        img={{ src: userNameIcon, alt: 'UserName icon' }}
                                        labelText='الإسم'
                                        value={editedUser.name}
                                        error=''
                                        onChange={handleInputChange}
                                        placeholder='اكتب اسمك'
                                    />
                                </li>
                                <li>
                                    <InputElement
                                        type='text'
                                        id='phone'
                                        name='phone'
                                        img={{ src: userPhoneIcon, alt: 'UserPhone icon' }}
                                        labelText='رقم الهاتف'
                                        value={editedUser.phone}
                                        error=''
                                        onChange={handleInputChange}
                                        placeholder='اكتب رقمك'
                                    />
                                </li>
                                <li>
                                    <InputElement
                                        type='text'
                                        id='national_id'
                                        name='national_id'
                                        img={{ src: userIdIcon, alt: 'UserId icon' }}
                                        labelText='الرقم القومي'
                                        value={editedUser.national_id}
                                        error=''
                                        onChange={handleInputChange}
                                        placeholder='الرقم القومي'
                                    />
                                </li>
                                <li>
                                    <InputElement
                                        type='text'
                                        id='email'
                                        name='email'
                                        readOnly={true}
                                        img={{ src: userEmailIcon, alt: 'UserEmail icon' }}
                                        labelText='البريد الالكتروني'
                                        value={editedUser.email}
                                        error=''
                                        onChange={handleInputChange}
                                        placeholder='اكتب بريدك'
                                    />
                                </li>
                                <li>
                                    <InputElement
                                        type='text'
                                        id='weight'
                                        name='weight'
                                        img={{ src: arrowUpandDownIcon, alt: 'Weight icon' }}
                                        labelText='الوزن'
                                        value={editedUser.weight}
                                        error=''
                                        onChange={handleInputChange}
                                        placeholder='اكتب وزنك'
                                    />
                                </li>
                                <li>
                                    <InputElement
                                        type='text'
                                        id='height'
                                        name='height'
                                        img={{ src: arrowUpandDownIcon, alt: 'Height icon' }}
                                        labelText='الطول'
                                        value={editedUser.height}
                                        error=''
                                        onChange={handleInputChange}
                                        placeholder='اكتب طولك'
                                    />
                                </li>
                            </ul>
                        </div>
                        <button onClick={updateUserProfileHandler}>حفظ التغيرات</button>
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
                                        <p>{user.user.name}</p>
                                    </li>
                                    <li>
                                        <h3>رقم الهاتف</h3>
                                        <p>{user.user.phone}</p>
                                    </li>
                                    <li>
                                        <h3>الرقم القومي</h3>
                                        <p>{user.user.national_id}</p>
                                    </li>
                                    <li>
                                        <h3>البريد الالكتروني</h3>
                                        <p>{user.user.email}</p>
                                    </li>
                                    <li>
                                        <h3>الوزن</h3>
                                        <p>{user.user.weight}</p>
                                    </li>
                                    <li>
                                        <h3>الطول</h3>
                                        <p>{user.user.height}</p>
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
