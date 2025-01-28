// Styles
import style from '../../../style/pages/landing/sections/aboutUs.module.css'
// asseets
import aboutImage from '../../../assets/landingPage/aboutUs/about.png';
import line from '../../../assets/landingPage/aboutUs/line.png';
import happyClients from '../../../assets/landingPage/aboutUs/happy-clients.png';






// ** InterFaces
interface ISection{
    sectionId: string
}

export default function AboutUs({sectionId}:ISection) {
    return (
        <>
            <section className={style.section} id={sectionId}>
                <div className={style.about_section}>
                    <div className={style.about_container}>

                        <img className={style.happy_clients} src={happyClients} alt="Happy Clients" />


                        <div className={style.about_img}>
                            <img src={aboutImage} alt="About Us" />
                        </div>


                        <div className={style.about_content}>
                            <h2>شريكك الموثوق لدعم صحتك الرقمية:</h2>
                            <p>
                                في <span>كليّتِك</span> نقدم حلولاً رقمية مبتكرة لدعم مرضى الكلى، مما يتيح لك إمكانية تصوير ورفع صور الأشعة
                                الطبية للحصول على تقرير مبدئي يساعدك في فهم حالتك. كما نقدم لك نصائح غذائية مخصصة تناسب
                                وضعك الصحي، مع فرصة التواصل المباشر مع أطباء متخصصين بسهولة تامة. بالإضافة إلى ذلك، يمكنك
                                متابعة حالتك الصحية بشكل مستمر من خلال تذكيرات مواعيد العلاج واحتياجاتك اليومية من السوائل.
                                كما أن التطبيق يتيح لك التبديل بين اللغات لتوفير تجربة مريحة لكل مستخدم.
                            </p>

                            <img src={line} alt="Decorative Line" className={style.line_image} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
