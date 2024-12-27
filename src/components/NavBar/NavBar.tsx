import style from '../../style/components/navbar/navbar.module.css'
import logo from '../../assets/landingPage/landingPageLogo.svg'




export default function NavBar() {
    return (
        <>
            <nav className={style.nav}>
                <div className={style.nav_container}>
                    <div className={style.logo}>
                        <img src={logo} alt="" />
                    </div>
                    <div className={style.menu}>
                        <ul>
                            <li className={style.active_section}>نبذة عنّا</li>
                            <li>خدماتنا</li>
                            <li>تواصل معنا</li>
                            <li>تقييمات المستخدمين</li>
                        </ul>
                    </div>
                    <div className={style.auth_btns}>
                        <button>إنشاء حساب</button>
                        <button>تسجيل دخول</button>
                    </div>
                </div>
            </nav>
        </>
    )
}
