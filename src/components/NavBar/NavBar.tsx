import style from '../../style/components/navbar/navbar.module.css'
import logo from '../../assets/landingPage/landingPageLogo.svg'
import navBarMenuIcon from '../../assets/navBar/navBarIcon.svg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';




export default function NavBar() {
    // ** Defaults
    const navigate = useNavigate();





    // ** States
    const [navOpen,setNavOpen] = useState<boolean>(false);





    // ** Handlers
    const signUpHandler = ()=>{navigate('/u')};
    const nabBarToggelHandler = ()=>{
        const menuElement = document.getElementById('menu');
        if(!navOpen && menuElement)
        {
            menuElement.style.display = 'flex';
            setNavOpen(true);
        }
        else if(navOpen && menuElement)
        {
            menuElement.style.display = 'none';
            setNavOpen(false);
        }
    }

    



    return (
        <>
            <nav className={style.nav}>
                <div className={style.nav_container}>
                    <div className={style.logo}>
                        <img src={logo} alt="" />
                    </div>
                    <div className={style.mb_menu}>
                        <img src={navBarMenuIcon} alt="Nav Bar Icon" onClick={nabBarToggelHandler}/>
                    </div>
                    <div className={style.menu} id='menu'>
                        <ul>
                            <li className={style.active_section}>نبذة عنّا</li>
                            <li>انضم لنا</li>
                            <li>خدماتنا</li>
                            <li>تواصل معنا</li>
                            <li>تقييمات المستخدمين</li>
                        </ul>
                    </div>
                    <div className={style.auth_btns}>
                        <button onClick={signUpHandler}>إنشاء حساب</button>
                        <button>تسجيل دخول</button>
                    </div>
                </div>
            </nav>
        </>
    )
}
