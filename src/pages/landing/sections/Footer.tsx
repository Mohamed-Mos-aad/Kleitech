// ** Assets
import {logo, facebookIcon, linkedInIcon, telegramIcon, twitterIcon} from '../../../assets/icons/icons'
// ** Style
import style from '../../../style/pages/landing/sections/footer.module.css'
// ** Hooks && Tools
import React from 'react'



// ** InterFaces
interface ISection{
    sectionId: string
}



function Footer({sectionId}:ISection) {
    // ** States
    const socialIcons = [
        {src: facebookIcon, alt: "facebook icon", href: "https://facebook.com"},
        {src: linkedInIcon, alt: "linkedIn icon", href: "https://linkedin.com"},
        {src: telegramIcon, alt: "telegram icon", href: "https://t.me/yourchannel"},
        {src: twitterIcon, alt: "twitter icon", href: "https://twitter.com"},
    ];



    // ** Render
    const renderSocialIcons = socialIcons.map(social =>(
        <a href={social.href} target="_blank" rel="noopener noreferrer" className={style.social_item} key={social.alt}>
            <img src={social.src} alt={social.alt} aria-label={social.alt} loading="lazy"/>
        </a>
    ))



    return (
        <>
            <footer className={style.section} id={sectionId}>
                <div className={style.section_container}>
                    <div className={style.section_content}>
                        <div className={style.logo}>
                            <img src={logo} alt="App Logo" loading="lazy"/>
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
export default React.memo(Footer);