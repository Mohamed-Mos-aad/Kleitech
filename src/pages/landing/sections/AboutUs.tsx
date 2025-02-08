// ** Style
import style from '../../../style/pages/landing/sections/aboutUs.module.css'
// ** assets
import aboutPhoto from '../../../assets/landingPage/aboutUs/about.png';

import client1 from '../../../assets/landingPage/aboutUs/client1.png';
import client2 from '../../../assets/landingPage/aboutUs/client2.png';
import client3 from '../../../assets/landingPage/aboutUs/client3.png';
import client4 from '../../../assets/landingPage/aboutUs/client4.png';

import star from '../../../assets/landingPage/aboutUs/star.png';
import halfStar from '../../../assets/landingPage/aboutUs/half-star.png';







// ** InterFaces
interface ISection{
    sectionId: string
}
export default function AboutUs({sectionId}:ISection) {
    return (
        <>
            <section className={`${style.section} ${style.about_us_bg}`} id={sectionId}>
                <div className={style.section_container}>
                        <div className={style.section_content}>
                            <div className={style.about_us_photo}>
                                <img className={style.about_us_img} src={aboutPhoto} alt="About Us" />
                                <div className={style.about_us_clients}>
                                        <div className={style.clients_photos}>
                                        <span className={style.counter}><span className={style.plus}>+</span>2400</span>
                                            <div className= {style.avatars}>
                                                <img src={client1} alt="client-1"/>
                                                <img src={client2} alt="client-2"/>
                                                <img src={client3} alt="client-3"/>
                                                <img src={client4} alt="client-4"/>
                                            </div>
                                        </div>
                                        <p>Happy Customers</p>
                                        <div className= {style.stars}>
                                            <span className={style.rating}>(4.7 Stars)</span>
                                            <img src={halfStar} alt="half-star"/>
                                            <img src={star} alt="star-1"/>
                                            <img src={star} alt="star-2"/>
                                            <img src={star} alt="star-3"/>
                                            <img src={star} alt="star-4"/>
                                        </div>
                                </div>
                            </div>
                            <div className={style.about_us_text}>
                                <h3>شريكك الموثوق لدعم صحتك الرقمية:</h3>
                                <p>
                                    في <span>كليّتِك</span> نقدم حلولاً رقمية مبتكرة لدعم مرضى الكلى، مما يتيح لك إمكانية تصوير ورفع صور الأشعة
                                    الطبية للحصول على تقرير مبدئي يساعدك في فهم حالتك. كما نقدم لك نصائح غذائية مخصصة تناسب
                                    وضعك الصحي، مع فرصة التواصل المباشر مع أطباء متخصصين بسهولة تامة. بالإضافة إلى ذلك، يمكنك
                                    متابعة حالتك الصحية بشكل مستمر من خلال تذكيرات مواعيد العلاج واحتياجاتك اليومية من السوائل.
                                    كما أن التطبيق يتيح لك التبديل بين اللغات لتوفير تجربة مريحة لكل مستخدم.
                                </p>
                            </div>
                        </div>
                </div>
            </section>
        </>
    );
}
