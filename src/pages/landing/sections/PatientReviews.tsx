// ** Style
import style from '../../../style/pages/landing/sections/PatientReviews.module.css'
// ** Hooks && Tools
import React from 'react'
// ** Compontent
import SectionHeader from '../../../components/landing/SectionHeader'
// ** Texts
import { patientReviewsTexts } from '../../../constants/texts/landing/patientReviewsTexts.ts'



// ** InterFaces
interface ISection{
    sectionId: string
}



function PatientReviews({sectionId}:ISection){
    // ** Renders
    const renderReviewNumbers = patientReviewsTexts.ar.reviewStats.map(review => (
        <div key={review.type}>
            <h3>{review.count}</h3>
            <p>{review.type}</p>
        </div>
    ))
    const renderpatientReviews = patientReviewsTexts.ar.patientReviews.map((review,i) => (
        <div key={review.name + i}>
            <img src= {review.src} alt={`صورة المريض ${review.alt}`} loading="lazy"/>
            <p>{review.comment}<br/>{review.name}</p>
        </div>
    ))




    return(
        <>
            <section className={style.section} id = {sectionId}>
                <div className={style.section_container}>
                    <div className={style.section_content}>
                        <SectionHeader title={patientReviewsTexts.ar.title} description={patientReviewsTexts.ar.description}/>
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