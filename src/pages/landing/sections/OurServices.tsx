// ** Style
import style from '../../../style/pages/landing/sections/ourServices.module.css'
// ** components 
import SectionHeader from "../../../components/landing/SectionHeader";
// ** Hooks && Tools
import React from 'react'
// ** Texts
import { ourServicesTexts } from '../../../constants/texts/landing/ourServicesText';



// ** InterFaces
interface ISection{
    sectionId: string
}



function OurServices({sectionId}:ISection) {
    // ** Renders
    const renderServices = ourServicesTexts.ar.services.map(service => (
        <div className={style.service} key={service.title}>
            <div className={style.service_photo}>
                <img src={service.img} alt={service.alt} loading="lazy"/>
            </div>
            <div className={style.service_content}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
            </div>
        </div>
    ))



    return (
        <>
            <section className={style.section} id={sectionId}>
                <div className={style.section_container}>
                    <SectionHeader title={ourServicesTexts.ar.title} description={ourServicesTexts.ar.description}/>
                    <div className={style.our_services}>
                        {renderServices}
                    </div>
                </div>
            </section>
        </>
    )
}
export default React.memo(OurServices);