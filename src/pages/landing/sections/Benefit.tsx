// ** Style
import SectionHeader from '../../../components/landing/SectionHeader'
import style from '../../../style/pages/landing/sections/benefit.module.css'
// ** Assets
import doctorImage from '../../../assets/landingPage/benefitImage.svg'





// ** InterFaces
interface ISection{
    sectionId: string
}





export default function Benefit({sectionId}:ISection) {
    return (
        <>
            <section className={style.section} id={sectionId}>
                <div className={style.section_container}>
                    <SectionHeader title='استفد من خدماتنا بسهولة' description='اتبع خطوات بسيطة للحصول على الدعم الطبي والتوجيه الصحي من خلال منصتنا، حيث نقدم لك جميع الأدوات اللازمة لمتابعة حالتك الصحية وتحقيق أفضل النتائج'/>
                    <div className={style.benefits_content}>
                        <div className={style.benefit_photo}>
                            <img src={doctorImage} alt="Doctor image" />
                        </div>
                        <div className={style.benefits}>
                            <div className={style.benefit}>
                                <span>1</span>
                                <h4>ارفع صورة الأشعة:</h4>
                                <p>قم بتحميل صورة الأشعة الخاصة بك عبر منصتنا بكل سهولة. بمجرد رفع الصورة، سيتم تحليلها وتقديم تقرير مبدئي حول حالتك الصحية</p>
                            </div>
                            <div className={style.benefit}>
                                <span>2</span>
                                <h4>احصل على تقرير مبدئي:</h4>
                                <p>بعد رفع الصورة، سيقوم النظام بتوفير تقرير مبدئي شامل يعرض النتائج المستخلصة من الأشعة. سيساعدك هذا التقرير في فهم حالتك الصحية بشكل سريع ودقيق.</p>
                            </div>
                            <div className={style.benefit}>
                                <span>3</span>
                                <h4>تواصل مع الأطباء:</h4>
                                <p>عند الحصول على التقرير، يمكنك التواصل مع الأطباء المتخصصين في حالات الكلى للحصول على استشارات إضافية. يتيح لك التطبيق التفاعل مع الأطباء لتوضيح أي تفاصيل أو استفسارات لديك بشأن حالتك الصحية.</p>
                            </div>
                            <div className={style.border_line}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
