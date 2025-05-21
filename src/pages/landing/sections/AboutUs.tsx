// ** Style
import style from '../../../style/pages/landing/sections/aboutUs.module.css'
// ** assets
import {mainAboutUsPhoto, client1Photo, client2Photo, client3Photo, client4Photo} from '../../../assets/images/images'
import {starIcon , halfStarIcon} from '../../../assets/icons/icons'
// ** Hooks && Tools
import React from 'react'



// ** InterFaces
interface ISection{
    sectionId: string
}



function AboutUs({sectionId}:ISection) {
    // ** clientsPhotos
    const clientsPhotos = [
        { src: client1Photo, alt: "Photo of a happy client #1" },
        { src: client2Photo, alt: "Photo of a happy client #2" },
        { src: client3Photo, alt: "Photo of a happy client #3" },
        { src: client4Photo, alt: "Photo of a happy client #4" },
    ];



    // ** Render
    const renderClientsPhotos = clientsPhotos.map(photo => (
        <img src={photo.src} alt={photo.alt} key={photo.src} loading="lazy"/>
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
                                    <h4><span>+</span>2400</h4>
                                </div>
                                <h5>Happy Customers</h5>
                                <div className={style.simple_rate_stars}>
                                    <img src={starIcon} alt="Star icon" />
                                    <img src={starIcon} alt="Star icon" />
                                    <img src={starIcon} alt="Star icon" />
                                    <img src={starIcon} alt="Star icon" />
                                    <img src={halfStarIcon} alt="Half star icon" />
                                    <h6>(4.7 Starts)</h6>
                                </div>
                            </div>
                        </div>
                        <div className={style.about_us_content}>
                            <h1>شريكك الرقمي الموثوق لدعم صحتك:</h1>
                            <p>
                                في كليّتِك نقدم حلولاً رقمية مبتكرة لدعم مرضى الكلى، مما يتيح لك إمكانية تصوير ورفع صور الأشعة الطبية للحصول على تقرير مبدئي يساعدك في فهم حالتك. كما نقدم لك نصائح غذائية مخصصة تناسب وضعك الصحي، مع فرصة التواصل المباشر مع أطباء متخصصين بسهولة تامة. بالإضافة إلى ذلك، يمكنك متابعة حالتك الصحية بشكل مستمر من خلال تذكيرات مواعيد العلاج واحتياجاتك اليومية من السوائل. كما أن التطبيق يتيح لك التبديل بين اللغات لتوفير تجربة مريحة لكل مستخدم.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default React.memo(AboutUs);