// ** Assets
import waterIcon from '../../assets/main/remember/waterIcon.svg'
import medicineIcon from '../../assets/main/remember/medicineIcon.svg'
import xRayIcon from '../../assets/main/remember/xRayIcon.svg'
import addIcon from '../../assets/main/remember/addIcon.svg'
import optionsIcon from '../../assets/main/remember/optionsIcon.svg'
// ** Style
import style from '../../style/pages/main/alarm.module.css'
// ** Components
import InputElement from '../../components/ui/InputElement'
// ** Hooks && Tools
import { useState } from 'react'





export default function Alarm() {
    // ** Default
    const waterData = ()=>{
        return (
            <form className={style.form}>
                <h1>التذكير بمواعيد المياه</h1>
                <InputElement name='النوع' error='' id='userMedicine' img={{src: waterIcon, alt:''}} onChange={()=>{}} type='text' value='' placeholder='اختر النوع'/>
                <InputElement name='معاد الاستيقاظ' error='' id='userMedicine' img={{src: waterIcon, alt:''}} onChange={()=>{}} type='text' value='' placeholder='اكتب الوقت'/>
                <InputElement name='معاد النوم' error='' id='userMedicine' img={{src: waterIcon, alt:''}} onChange={()=>{}} type='text' value='' placeholder='اكتب الوقت'/>
                <InputElement name='التذكير كل' error='' id='userMedicine' img={{src: waterIcon, alt:''}} onChange={()=>{}} type='text' value='' placeholder='اختر الوقت'/>
                <div className={style.form_btns}>
                    <button>تذكير</button>
                    <button>الغاء</button>
                </div>
            </form>
        )
    }
    const medicineData = ()=>{
        return (
            <form className={style.form}>
                <h1>التذكير بمواعيد العلاج</h1>
                <InputElement name='اسم الدواء' error='' id='userMedicine' img={{src: waterIcon, alt:''}} onChange={()=>{}} type='text' value='' placeholder='ادخل اسم الدواء'/>
                <InputElement name='عدد المرات التكرار' error='' id='userMedicine' img={{src: waterIcon, alt:''}} onChange={()=>{}} type='text' value='' placeholder='ادخل عدد المرات'/>
                <InputElement name='الفتره الزمنيه' error='' id='userMedicine' img={{src: waterIcon, alt:''}} onChange={()=>{}} type='text' value='' placeholder='اختر الفتره'/>
                <InputElement name='تناول الدواء ابتداءاً من الساعه ' error='' id='userMedicine' img={{src: waterIcon, alt:''}} onChange={()=>{}} type='text' value='' placeholder='اكتب الوقت'/>
                <div className={style.form_btns}>
                    <button>تذكير</button>
                    <button>الغاء</button>
                </div>
            </form>
        )
    }
    const xRayData = ()=>{
        return (
            <form className={style.form}>
                <h1>التذكير بمواعيد الجلسات</h1>
                <InputElement name='عدد الجلسات اسبوعياً' error='' id='userMedicine' img={{src: waterIcon, alt:''}} onChange={()=>{}} type='text' value='' placeholder='اختر العدد'/>
                <InputElement name='معاد الجلسه القادم' error='' id='userMedicine' img={{src: waterIcon, alt:''}} onChange={()=>{}} type='text' value='' placeholder='اكتب التاريخ'/>
                <InputElement name='في تمام الساعه' error='' id='userMedicine' img={{src: waterIcon, alt:''}} onChange={()=>{}} type='text' value='' placeholder='اكتب الساعه'/>
                <div className={style.form_btns}>
                    <button>تذكير</button>
                    <button>الغاء</button>
                </div>
            </form>
        )
    }





    // ** States
    const [alarmTypeNavBarOpened,setAlarmTypeNavBarOpened] = useState<boolean>(false);
    const [alarmType,setAlarmType] = useState<{ type: () => JSX.Element, id: string }>({
        type: waterData,
        id: ''
    });
    const [alarmPopOpened,setAlarmPopOpened] = useState<boolean>(false);





    // ** Handlers
    const alarmTypeNavBarToggleHandler = ()=>{
        setAlarmTypeNavBarOpened(prev => !prev);
    }
    const changeAlarmTypeHandler = ({ type, id }: { type: () => JSX.Element, id: string })=>{
        setAlarmType({type,id});
        alarmTypeNavBarToggleHandler();
        setAlarmPopOpened(true);
    }





    return (
        <>
        <div className={style.alarm}>
            <div className={style.alarm_navBar}>
                {
                    alarmTypeNavBarOpened &&
                    <ul className={style.alarm_type}>
                        <li>
                            <img className={alarmType.id === 'water' ? style.active : ''} src={waterIcon} alt="water icon" id='waterData' onClick={()=>{changeAlarmTypeHandler({type: waterData, id: 'water'})}}/>
                        </li>
                        <li>
                            <img className={alarmType.id === 'xRay' ? style.active : ''} src={xRayIcon} alt="xRay icon" id='medicineData' onClick={()=>{changeAlarmTypeHandler({type: xRayData, id: 'xRay'})}}/>
                        </li>
                        <li>
                            <img className={alarmType.id === 'medicine' ? style.active : ''} src={medicineIcon} alt="medicine icon" id='xRayData' onClick={()=>{changeAlarmTypeHandler({type: medicineData, id: 'medicine'})}}/>
                        </li>
                    </ul>
                }
                <div className={style.add_btn}>
                    <button onClick={alarmTypeNavBarToggleHandler}>
                        <img src={addIcon} alt="add button" />
                    </button>
                </div>
            </div>
            <div className={style.alarm_container}>
                {alarmPopOpened ? alarmType.type() : 
                    <table>
                        <tbody>
                            <tr className={style.medicine_tr}>
                                <td>
                                    <button>
                                        <img src={optionsIcon} alt="options icon" />
                                    </button>
                                </td>
                                <td>
                                    <h2>اسم الدواء</h2>
                                    <h3>ثريميثوبريم</h3>
                                </td>
                                <td>
                                    <h2>عدد مرات التكرار</h2>
                                    <h3>3</h3>
                                </td>
                                <td>
                                    <h2>ابتدءاً من</h2>
                                    <h3>5/2/2025</h3>
                                </td>
                                <td>
                                    <h2>ابتدءاً من الساعه</h2>
                                    <h3>5 مساءاً</h3>
                                </td>
                            </tr>
                            <tr className={style.water_tr}>
                                <td>
                                    <button>
                                        <img src={optionsIcon} alt="options icon" />
                                    </button>
                                </td>
                                <td>
                                    <h2>النوع</h2>
                                    <h3>انثي</h3>
                                </td>
                                <td>
                                    <h2>معاد الاستيقاظ</h2>
                                    <h3>8 صباحا</h3>
                                </td>
                                <td>
                                    <h2>معاد النوم</h2>
                                    <h3>10 مساءاً</h3>
                                </td>
                                <td>
                                    <h2>التذكير كل</h2>
                                    <h3>ساعه</h3>
                                </td>
                            </tr>
                            <tr className={style.xRay_tr}>
                                <td>
                                    <button>
                                        <img src={optionsIcon} alt="options icon" />
                                    </button>
                                </td>
                                <td>
                                    <h2>عدد الجلسات اسبوعياً</h2>
                                    <h3>2</h3>
                                </td>
                                <td>
                                    <h2>معاد الجلسه القادمه</h2>
                                    <h3>10/2/2025</h3>
                                </td>
                                <td>
                                    <h2>الساعه</h2>
                                    <h3>8 صباحاً</h3>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                }
            </div>
        </div>
        </>
    )
}
