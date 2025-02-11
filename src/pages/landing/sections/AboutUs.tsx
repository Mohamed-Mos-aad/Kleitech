// ** Style
import style from '../../../style/pages/landing/sections/aboutUs.module.css'
// ** assets
import mainAboutUsPhoto from '../../../assets/landingPage/aboutUs/mainAboutPhoto.png'
import client1Photo from '../../../assets/landingPage/aboutUs/client1.png'
import client2Photo from '../../../assets/landingPage/aboutUs/client2.png'
import client3Photo from '../../../assets/landingPage/aboutUs/client3.png'
import client4Photo from '../../../assets/landingPage/aboutUs/client4.png'
import starIcon from '../../../assets/landingPage/aboutUs/starIcon.svg'
import halfStarIcon from '../../../assets/landingPage/aboutUs/halfStarIcon.svg'




// ** InterFaces
interface ISection{
    sectionId: string
}
export default function AboutUs({sectionId}:ISection) {
    return (
        <>
            <section className={`${style.section} ${style.section_bg}`} id={sectionId}>
                <div className={style.section_container}>
                    <div className={style.about_us}>
                        <div className={style.about_us_photo}>
                            <img src={mainAboutUsPhoto} alt="Main about us photo" />
                            <div className={style.about_us_simple_rate}>
                                <div className={style.simple_rate_head}>
                                    <img src={client4Photo} alt="Client 4 photo" />
                                    <img src={client3Photo} alt="Client 3 photo" />
                                    <img src={client2Photo} alt="Client 2 photo" />
                                    <img src={client1Photo} alt="Client 1 photo" />
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
                            <h1>شريكك الموثوق لدعم صحتك الرقمية:</h1>
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
