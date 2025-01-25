// ** Style
import style from '../../../style/pages/landing/sections/ourServices.module.css'
// ** components 
import SectionHeader from "../../../components/landing/SectionHeader";
// ** Assets
import service1Img from '../../../assets/landingPage/services/service1.png'
import service2Img from '../../../assets/landingPage/services/service2.png'
import service3Img from '../../../assets/landingPage/services/service3.png'
import service4Img from '../../../assets/landingPage/services/service4.png'





export default function OurServices() {
    return (
        <>
            <section className={style.section} id='our-services'>
                <div className={style.section_container}>
                    <SectionHeader title='خدماتنا المتخصصة لدعم صحتك' description='قدم لك مجموعة من الخدمات المتكاملة التي تهدف إلى تحسين صحتك الجسدية والنفسية'/>
                    <div className={style.our_services}>
                        <div className={style.service}>
                            <div className={style.service_photo}>
                                <img src={service1Img} alt="" />
                            </div>
                            <div className={style.service_content}>
                                <h2>تقرير الأشعة: </h2>
                                <p> تحليل مبدئي لصورة الأشعة المرفوعة لتقييم الحالة الصحية.</p>
                            </div>
                        </div>
                        <div className={style.service}>
                            <div className={style.service_photo}>
                                <img src={service2Img} alt="" />
                            </div>
                            <div className={style.service_content}>
                                <h2>ارشادات غذائية: </h2>
                                <p>نصائح حول الأطعمة المسموحة والممنوعة حسب حالة المريض.</p>
                            </div>
                        </div>
                        <div className={style.service}>
                            <div className={style.service_photo}>
                                <img src={service3Img} alt="" />
                            </div>
                            <div className={style.service_content}>
                                <h2>الدعم النفسي: </h2>
                                <p>إمكانية التواصل مع أخصائي نفسي عبر رسائل مباشرة لدعم الصحة النفسية للمريض</p>
                            </div>
                        </div>
                        <div className={style.service}>
                            <div className={style.service_photo}>
                                <img src={service4Img} alt="" />
                            </div>
                            <div className={style.service_content}>
                                <h2>تذكير بالأدوية والمياه: </h2>
                                <p>إمكانية التواصل مع أخصائي نفسي عبر رسائل مباشرة لدعم الصحة النفسية للمريض</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
