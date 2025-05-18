// ** Style
import style from '../../../style/pages/landing/sections/contactUs.module.css'
// ** assets
import contactPhoto from '../../../assets/landingPage/contactUsPhoto.svg'
import SectionHeader from '../../../components/landing/SectionHeader'
import ContactUsForm from '../../../components/contactUsForm/ContactUsForm'
// ** Components




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
                        <ContactUsForm />
                        <div className={style.contact_photo}>
                            <img src={contactPhoto} alt="Contact photo" loading="lazy"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
