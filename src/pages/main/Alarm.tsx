// ** Assets
import waterIcon from '../../assets/main/remember/waterIcon.svg'
import medicineIcon from '../../assets/main/remember/medicineIcon.svg'
import xRayIcon from '../../assets/main/remember/xRayIcon.svg'
// ** Style
import style from '../../style/pages/main/remember.module.css'
// ** Components
import InputElement from '../../components/ui/InputElement'
// ** Hooks
import { useState } from 'react'





export default function Alarm() {
    // ** Default
    const waterData = ()=>{
        return (
            <form>
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
            <form>
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
            <form>
                <h1>التذكير بمواعيد جلسات الغسيل</h1>
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
    const [rememberType,setRememberType] = useState(waterData);







    // ** Handlers
    const changeRememberTypeHandler = (type:() => JSX.Element)=>{
        setRememberType(type);
    }





    return (
        <>
        <div className={style.remember}>
            <div className={style.add_btn}>
                <button>+</button>
            </div>
            <div className={style.remember_container}>
                <ul className={style.remember_type}>
                    <li>
                        <img className={style.active} src={waterIcon} alt="Water icon" id='waterData' onClick={()=>{changeRememberTypeHandler(waterData)}}/>
                    </li>
                    <li>
                        <img src={xRayIcon} alt="XRay icon" id='medicineData' onClick={()=>{changeRememberTypeHandler(medicineData)}}/>
                    </li>
                    <li>
                        <img src={medicineIcon} alt="Medicine icon" id='xRayData' onClick={()=>{changeRememberTypeHandler(xRayData)}}/>
                    </li>
                </ul>
                <div className={style.remember_form}>
                    {rememberType}
                </div>
            </div>
        </div>
        </>
    )
}
