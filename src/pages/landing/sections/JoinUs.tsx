// ** Assets
import joinUsPhoto from '../../../assets/images/landing/joinUs/joinUsPhoto.png'
// ** Texts
import { joinUsTexts } from '../../../constants/texts/landing/joinUsTexts'
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
                            <h2>{joinUsTexts.ar.title}</h2>
                            <p>{joinUsTexts.ar.description}</p>
                        </div>
                        <button onClick={openWelcomeAuthPageHandler} aria-label="انضم لنا">انضم لنا</button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default React.memo(JoinUs);