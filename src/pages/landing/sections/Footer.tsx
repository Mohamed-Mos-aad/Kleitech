// ** Style
import style from '../../../style/pages/landing/sections/footer.module.css'





// ** Assets
import logo from '../../../assets/landingPage/logo.svg'
import facebookIcon from '../../../assets/social icons/facebookIcon.svg'
import linkedInIcon from '../../../assets/social icons/linkedInIcon.svg'
import telegramIcon from '../../../assets/social icons/telegramIcon.svg'
import twitterIcon from '../../../assets/social icons/twitterIcon.svg'






export default function Footer() {
    return (
        <>
            <section className={style.section}>
                <div className={style.section_container}>
                    <div className={style.section_content}>
                        <div className={style.logo}>
                            <img src={logo} alt="App Logo" />
                            <h3>كليّتِك</h3>
                        </div>
                        <p>نحن نقدم حلولًا رقمية مبتكرة لدعم صحتك. اكتشف كيف يمكننا مساعدتك في متابعة حالتك الصحية بكل سهولة وراحة.</p>
                    </div>
                    <footer className={style.footer}>
                        <p>© 2024 <span>كليّتِك</span> جميع الحقوق محفوظة تم تصميم وتطوير هذه المنصة لتقديم أفضل دعم صحي ورعاية للمستخدمين.</p>
                        <div className={style.social}>
                            <div className={style.social_item}>
                                <img src={facebookIcon} alt="" />
                            </div>
                            <div className={style.social_item}>
                                <img src={linkedInIcon} alt="" />
                            </div>
                            <div className={style.social_item}>
                                <img src={telegramIcon} alt="" />
                            </div>
                            <div className={style.social_item}>
                                <img src={twitterIcon} alt="" />
                            </div>
                        </div>
                    </footer>
                </div>
            </section>
        </>
    )
}
