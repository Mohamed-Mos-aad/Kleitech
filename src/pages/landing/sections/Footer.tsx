// ** Assets
import logo from '../../../assets/landingPage/logo.svg'
import facebookIcon from '../../../assets/social icons/facebookIcon.svg'
import linkedInIcon from '../../../assets/social icons/linkedInIcon.svg'
import telegramIcon from '../../../assets/social icons/telegramIcon.svg'
import twitterIcon from '../../../assets/social icons/twitterIcon.svg'
// ** Style
import style from '../../../style/pages/landing/sections/footer.module.css'



// ** InterFaces
interface ISection{
    sectionId: string
}



export default function Footer({sectionId}:ISection) {
    // ** States
    const socialIcons = [
        {src: facebookIcon, alt: "facebook icon", href: "https://facebook.com"},
        {src: linkedInIcon, alt: "linkedIn icon", href: "https://linkedin.com"},
        {src: telegramIcon, alt: "telegram icon", href: "https://t.me/yourchannel"},
        {src: twitterIcon, alt: "twitter icon", href: "https://twitter.com"},
    ];



    // ** Render
    const renderSocialIcons = socialIcons.map(social =>(
        <a href={social.href} target="_blank" rel="noopener noreferrer" className={style.social_item}>
            <img src={social.src} alt={social.alt} aria-label={social.alt} />
        </a>
    ))



    return (
        <>
            <footer className={style.section} id={sectionId}>
                <div className={style.section_container}>
                    <div className={style.section_content}>
                        <div className={style.logo}>
                            <img src={logo} alt="App Logo" />
                            <h3>كليّتِك</h3>
                        </div>
                        <p>نحن نقدم حلولًا رقمية مبتكرة لدعم صحتك. اكتشف كيف يمكننا مساعدتك في متابعة حالتك الصحية بكل سهولة وراحة.</p>
                    </div>
                    <div className={style.footer_data}>
                        <p>©2024 <span>كليّتِك</span> جميع الحقوق محفوظة تم تصميم وتطوير هذه المنصة لتقديم أفضل دعم صحي ورعاية للمستخدمين.</p>
                        <div className={style.social}>
                            {renderSocialIcons}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
