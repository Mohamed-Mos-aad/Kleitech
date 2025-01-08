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
        if(!navOpen && menuElement && window.innerWidth < 992)
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
    const smoothScrollHandler = (id:string)=>{
        const sectionId = document.getElementById(id);;
        if(sectionId)
        {
            sectionId.scrollIntoView({behavior:'smooth'});
            nabBarToggelHandler();
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
                            <li className={style.active_section} onClick={()=>{smoothScrollHandler('about-us')}}>نبذة عنّا</li>
                            <li onClick={()=>{smoothScrollHandler('join-us')}}>انضم لنا</li>
                            <li onClick={()=>{smoothScrollHandler('our-services')}}>خدماتنا</li>
                            <li onClick={()=>{smoothScrollHandler('contact-us')}}>تواصل معنا</li>
                            <li onClick={()=>{smoothScrollHandler('users-rates')}}>تقييمات المستخدمين</li>
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
