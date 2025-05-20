// ** Assets
import {doctorImage} from '../../../assets/images/images'
// ** Style
import style from '../../../style/pages/landing/sections/benefit.module.css'
// ** Components
import SectionHeader from '../../../components/landing/SectionHeader'
// ** Hooks && Tools
import React from 'react'



// ** InterFaces
interface ISection{
    sectionId: string
}



function Benefit({sectionId}:ISection) {
    // ** States
    const borderSpans = new Array(20).fill(null);
    const benefitsData = [
        {
            id: 1,
            title: 'ارفع صورة الأشعة:',
            description: 'قم بتحميل صورة الأشعة الخاصة بك عبر منصتنا بكل سهولة. بمجرد رفع الصورة، سيتم تحليلها وتقديم تقرير مبدئي حول حالتك الصحية',
        },
        {
            id: 2,
            title: 'احصل على تقرير مبدئي:',
            description: 'بعد رفع الصورة، سيقوم النظام بتوفير تقرير مبدئي شامل يعرض النتائج المستخلصة من الأشعة. سيساعدك هذا التقرير في فهم حالتك الصحية بشكل سريع ودقيق.',
        },
        {
            id: 3,
            title: 'تواصل مع الأطباء:',
            description: 'عند الحصول على التقرير، يمكنك التواصل مع الأطباء المتخصصين في حالات الكلى للحصول على استشارات إضافية. يتيح لك التطبيق التفاعل مع الأطباء لتوضيح أي تفاصيل أو استفسارات لديك بشأن حالتك الصحية.',
        }
    ];



    // ** Render
    const renderBenefitsData = benefitsData.map(data => (
        <div className={style.benefit} key={data.id}>
            <span>{data.id}</span>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </div>
    ))
    const renderBorderSpans = borderSpans.map((_, index) => (
        <span key={index}></span>
    ));



    return (
        <>
            <section className={style.section} id={sectionId}>
                <div className={style.section_container}>
                    <SectionHeader title='استفد من خدماتنا بسهولة' description='اتبع خطوات بسيطة للحصول على الدعم الطبي والتوجيه الصحي من خلال منصتنا، حيث نقدم لك جميع الأدوات اللازمة لمتابعة حالتك الصحية وتحقيق أفضل النتائج'/>
                    <div className={style.benefits_content}>
                        <div className={style.benefit_photo}>
                            <img src={doctorImage} alt="Doctor image" loading="lazy"/>
                        </div>
                        <div className={style.benefits}>
                            {renderBenefitsData}
                            <div className={style.border_line}>
                                {renderBorderSpans}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default React.memo(Benefit);