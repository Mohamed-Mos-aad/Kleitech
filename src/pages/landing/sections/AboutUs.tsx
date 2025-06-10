// ** Style
import style from '../../../style/pages/landing/sections/aboutUs.module.css'
// ** assets
import {mainAboutUsPhoto, client1Photo, client2Photo, client3Photo, client4Photo} from '../../../assets/images/images'
import {starIcon , halfStarIcon} from '../../../assets/icons/icons'
// ** Hooks && Tools
import React from 'react'
// ** Texts
import { aboutUsTexts } from '../../../constants/texts/landing/aboutUsTexts'



// ** InterFaces
interface ISection{
    sectionId: string
}
interface IClientPhoto {
    src: string;
    alt: string;
}



function AboutUs({sectionId}:ISection) {
    // ** clientsPhotos
    const clientsPhotos: IClientPhoto[] = [
        { src: client1Photo, alt: "Photo of a happy client #1" },
        { src: client2Photo, alt: "Photo of a happy client #2" },
        { src: client3Photo, alt: "Photo of a happy client #3" },
        { src: client4Photo, alt: "Photo of a happy client #4" },
    ];



    // ** Render
    const renderClientsPhotos = clientsPhotos.map((photo,index) => (
        <img {...photo} key={`client-photo-${index}`} loading="lazy"/>
    ))



    return (
        <>
            <section className={`${style.section} ${style.section_bg}`} id={sectionId}>
                <div className={style.section_container}>
                    <div className={style.about_us}>
                        <div className={style.about_us_photo}>
                            <img src={mainAboutUsPhoto} alt="Main about us photo" />
                            <div className={style.about_us_simple_rate}>
                                <div className={style.simple_rate_head}>
                                    {renderClientsPhotos}
                                    <h4 aria-label="Over 2400 happy customers"><span>+</span>2400</h4>
                                </div>
                                <h5>Happy Customers</h5>
                                <div className={style.simple_rate_stars}>
                                    {
                                        [...Array(4)].map((_,i) =>(
                                            <img src={starIcon} alt="Full star icon" key={`star-${i}`} />
                                        ))
                                    }
                                    <img src={halfStarIcon} alt="Half star icon" />
                                    <h6>(4.7 Stars)</h6>
                                </div>
                            </div>
                        </div>
                        <div className={style.about_us_content}>
                            <h1>{aboutUsTexts.ar.title}</h1>
                            <p>
                                {aboutUsTexts.ar.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default React.memo(AboutUs);