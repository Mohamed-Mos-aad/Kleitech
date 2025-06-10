// ** Assets
import {doctorImage} from '../../../assets/images/images'
// ** Style
import style from '../../../style/pages/landing/sections/benefit.module.css'
// ** Components
import SectionHeader from '../../../components/landing/SectionHeader'
// ** Hooks && Tools
import React from 'react'
// ** Texts
import { benefitTexts } from '../../../constants/texts/landing/benefitTexts'



// ** InterFaces
interface ISection{
    sectionId: string
}



function Benefit({sectionId}:ISection) {
    // ** States
    const borderSpans = new Array(20).fill(null);



    // ** Render
    const renderBenefitsData = benefitTexts.ar.steps.map(step => (
        <div className={style.benefit} key={step.stepId}>
            <span>{step.stepId}</span>
            <h1>{step.stepTitle}</h1>
            <p>{step.stepDescription}</p>
        </div>
    ))
    const renderBorderSpans = borderSpans.map((_, index) => (
        <span key={index}></span>
    ));



    return (
        <>
            <section className={style.section} id={sectionId}>
                <div className={style.section_container}>
                    <SectionHeader title={benefitTexts.ar.title} description={benefitTexts.ar.description}/>
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