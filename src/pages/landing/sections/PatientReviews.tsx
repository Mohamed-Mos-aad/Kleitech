// ** Style
import style from '../../../style/pages/landing/sections/PatientReviews.module.css'

// ** assets
import patient1 from '../../../assets/landingPage/PatientReviews/PatientReview-1.png'
import patient2 from '../../../assets/landingPage/PatientReviews/PatientReview-2.png'
import patient3 from '../../../assets/landingPage/PatientReviews/PatientReview-3.png'
import patient4 from '../../../assets/landingPage/PatientReviews/PatientReview-4.png'





// ** InterFaces
interface ISection{
    sectionId: string
}
export default function PatientReviews({sectionId}:ISection){
    return(
        <>
            <section className={style.section} id = {sectionId}>
                <div className={style.section_container}>
                    <div className={style.section_content}>
                        <div className={style.patient_reviews_header}>
                            <h3>آراء المرضى:</h3>
                            <p>اكتشف كيف أحدثنا فرقاً في حياتهم من خلال تجارب من قدمنا لهم الرعاية.</p>
                        </div>
                        <div className={style.patient_reviews_numbers}>
                            <div>
                                <h3>+50</h3>
                                <p>افضل المتخصصين</p>
                            </div>
                            <div>
                                <h3>+90</h3>
                                <p>معدل رضي المرضي</p>
                            </div>
                            <div>
                                <h3>+500</h3>
                                <p>المهنين في الرعايه الصحيه</p>
                            </div>
                            <div>
                                <h3>+100</h3>
                                <p>استشارات ناجحه</p>
                            </div>
                        </div>
                        <div className={style.patient_reviews_comments}>
                            <div>
                                <img src= {patient1} alt="patient-1" />
                                <p>التواصل المباشر مع الأطباء عبر التطبيق سهل عليّ الحصول على استشارات طبية في أي وقت."
                                <br/>-خالد محمد</p>
                            </div>
                            <div>
                                <img src= {patient2} alt="patient-1" />
                                <p>بفضل ميزة رفع صور الأشعة، حصلت على تقرير فوري ساعدني في فهم حالتي الصحية بشكل أفضل."
                                <br/>-فاطمة جمال </p>
                            </div>
                            <div>
                                <img src= {patient3} alt="patient-1" />
                                <p>لدعم النفسي المتاح عبر التطبيق ساعدني في التعامل مع القلق والتوتر المرتبط بحالتي الصحية."
                                <br/>-ليلى سامي</p>
                            </div>
                            <div>
                                <img src= {patient4} alt="patient-1" />
                                <p>ميزة التذكيرات اليومية بمواعيد العلاج والمياه ساعدتني في الالتزام بالعلاج بشكل أفضل."
                                <br/>-يوسف عبد الله </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

