// ** assets
import {patient1, patient2, patient3, patient4} from '../../../assets/images/images.ts'
// ** Style
import style from '../../../style/pages/landing/sections/PatientReviews.module.css'
// ** Hooks && Tools
import React from 'react'
// ** Compontent
import SectionHeader from '../../../components/landing/SectionHeader'



// ** InterFaces
interface ISection{
    sectionId: string
}



function PatientReviews({sectionId}:ISection){
    // ** States
    const reviewStats = [
        {count: '+50', type: 'افضل المتخصصين'},
        {count: '+90', type: 'معدل رضي المرضي'},
        {count: '+500', type: 'المهنين في الرعايه الصحيه'},
        {count: '+100', type: 'استشارات ناجحه'},
    ]
    const patientReviews = [
        {src: patient1, alt: 'خالد محمد', comment: 'التواصل المباشر مع الأطباء عبر التطبيق سهل عليّ الحصول على استشارات طبية في أي وقت.', name: '-خالد محمد'},
        {src: patient2, alt: 'فاطمة جمال ', comment: 'بفضل ميزة رفع صور الأشعة، حصلت على تقرير فوري ساعدني في فهم حالتي الصحية بشكل أفضل.', name: '-فاطمة جمال '},
        {src: patient3, alt: 'ليلى سامي', comment: 'لدعم النفسي المتاح عبر التطبيق ساعدني في التعامل مع القلق والتوتر المرتبط بحالتي الصحية.', name: '-ليلى سامي'},
        {src: patient4, alt: 'يوسف عبد الله', comment: 'ميزة التذكيرات اليومية بمواعيد العلاج والمياه ساعدتني في الالتزام بالعلاج بشكل أفضل.', name: '-يوسف عبد الله'},
    ]



    // ** Renders
    const renderReviewNumbers = reviewStats.map(review => (
        <div key={review.type}>
            <h3>{review.count}</h3>
            <p>{review.type}</p>
        </div>
    ))
    const renderpatientReviews = patientReviews.map(review => (
        <div key={review.name}>
            <img src= {review.src} alt={review.alt} loading="lazy"/>
            <p>{review.comment}<br/>{review.name}</p>
        </div>
    ))




    return(
        <>
            <section className={style.section} id = {sectionId}>
                <div className={style.section_container}>
                    <div className={style.section_content}>
                        <SectionHeader title='آراء المرضى:' description='اكتشف كيف أحدثنا فرقاً في حياتهم من خلال تجارب من قدمنا لهم الرعاية.'/>
                        <div className={style.patient_reviews_numbers}>
                            {renderReviewNumbers}
                        </div>
                        <div className={style.patient_reviews_comments}>
                            {renderpatientReviews}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default React.memo(PatientReviews);