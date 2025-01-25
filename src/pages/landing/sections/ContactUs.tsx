// ** Style
import style from '../../../style/pages/landing/sections/contactUs.module.css'
// ** assets
import contactPhoto from '../../../assets/landingPage/contactUsPhoto.svg'
import SectionHeader from '../../../components/landing/SectionHeader'




// ** InterFaces
interface ISection{
    sectionId: string
}

export default function ContactUs({sectionId}:ISection) {
    return (
        <>
            <section className={style.section} id={sectionId}>
                <div className={style.section_container}>
                    <SectionHeader title='تواصل معانا:' description='سواء كان لديك استفسار حول خدماتنا، أو تحتاج إلى مساعدة في استخدام المنصة، نحن هنا لدعمك. فريقنا مستعد للرد على أسئلتك وتقديم المساعدة اللازمة لضمان تجربة سلسة ومريحة.'/>
                    <div className={style.section_content}>
                        <form className={style.contact_us_form}>
                            <div className={style.form_row}>
                                <div className={style.form_input}>
                                    <label htmlFor="">الاسم الاول</label>
                                    <input type="text" placeholder='ادخل الإسم  الاول'/>
                                </div>
                                <div className={style.form_input}>
                                    <label htmlFor="">الاسم الثاني</label>
                                    <input type="text" placeholder='ادخل الإسم  الثاني'/>
                                </div>
                            </div>
                            <div className={style.form_input}>
                                <label htmlFor="">البريد الالكتروني</label>
                                <input type="text" placeholder='ادخل البريد الالكتروني'/>
                            </div>
                            <div className={style.form_input}>
                                <label htmlFor="">الرساله</label>
                                <textarea name="" id="" placeholder='اكتب رسالتك'></textarea>
                            </div>
                            <div className={style.form_terms}>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">انت توافق علي <a href="">سياسيه الخصوصيه</a> الخاصه بنا</label>
                            </div>
                            <button>إرسال الرساله</button>
                        </form>
                        <div className={style.contact_photo}>
                            <img src={contactPhoto} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
