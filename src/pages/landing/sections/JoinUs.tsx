// ** Assets
import joinUsPhoto from '../../../assets/images/landing/joinUs/joinUsPhoto.png'
// ** Style
import style from '../../../style/pages/landing/sections/joinUs.module.css'
// ** Hooks && Tools
import React from 'react'
import { useNavigate } from 'react-router-dom'



// ** InterFaces
interface ISection{
    sectionId: string
}



function JoinUs({sectionId}:ISection) {
    // ** Defaults
    const navigate = useNavigate();



    // ** Handlers
    const openWelcomeAuthPageHandler = ()=>{navigate('/u')};


    
    return (
        <>
            <section className={style.section} id={sectionId}>
                <div className={style.section_container}>
                    <div className={style.section_photo}>
                        <img src={joinUsPhoto} alt="صورة توضيحية لميزة الانضمام وتحليل الأشعة" loading="lazy"/>
                    </div>
                    <div className={style.section_content}>
                        <div>
                            <h2>رفع الصورة لتحليل فوري ودعم مباشر:</h2>
                            <p>يمكنك رفع صورة الأشعة الطبية الخاصة بك والحصول على تقرير سريع حول حالتك الصحية. يساعدك هذا التحليل في فهم حالة الكلى بشكل أفضل وتحديد الخطوات المناسبة. إذا كنت ترغب في استشارات إضافية ودعم مستمر، يمكنك إنشاء حساب للحصول هذه الخدمات.</p>
                        </div>
                        <button onClick={openWelcomeAuthPageHandler} aria-label="انضم لنا">انضم لنا</button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default React.memo(JoinUs);