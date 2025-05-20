// ** Assets
import {navBarLogo,navBarMenuIcon, logOutIcon, settingIcon} from '../../assets/icons/icons'
// ** Style
import style from '../../style/components/navbar/navbar.module.css'
// ** Hooks && Tools
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';
// ** Store
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../../app/store'
import { logout, setUserLogin } from '../../app/slices/userSlice'
// ** Data
import { landingPageSections, mainPages } from '../../data/navbar/navbarData'





export default function NavBar() {
    // ** Store
    const dispatch: AppDispatch = useDispatch();
    const userLogged = useSelector((state: RootState) => state.userLogin.loggedIn);





    // ** Defaults
    const navigate = useNavigate();
    const location = useLocation();
    const menuRef = useRef<HTMLDivElement>(null);




    // ** States
    const [navOpen,setNavOpen] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>('');
    const [activePage,setActivePage] = useState<string>('')
    const [listELementOpened,setListELementOpened] = useState<boolean>(false);




    // ** Handlers
    const signUpPageHandler = ()=>{navigate('/u/sign-up')};
    const signInPageHandler = ()=>{navigate('/u/sign-in')};
    const landingPageHandler = ()=>{navigate('/')}
    const navBarToggleHandler = ()=>{
        const menuElement = menuRef.current;
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
    const smoothScrollHandler =(sectionId:string,id:string)=>{
            const section = document.getElementById(sectionId);;
            if(section)
            {
                section.scrollIntoView({behavior:'smooth', block: 'start' });
                setActiveSection(id);
                navBarToggleHandler();
            }
        }
    const logOutSubmitHandler = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        handleLogOut();
        navigate('/u')
    };
    const changePageHandler = (e: React.MouseEvent<HTMLElement>)=>{
        const page = e.currentTarget.id;
        setListELementOpened(false);
        navigate(`/m/${page}`);
        navBarToggleHandler();
        setActivePage(page);
    } 
    const ListElementToggleHandler = ()=>{
        setListELementOpened(prev=> !prev);
    }






    // ** Store Handler 
    const handleLogOut = () => {
        dispatch(logout());
        localStorage.removeItem('kleitech_user');
        sessionStorage.removeItem('kleitech_user');
    };





    // ** Render
    const renderLandingNavBarSections = landingPageSections.map(section =>
        <li className={activeSection === section.id ? style.active_section : ''} onClick={()=>{smoothScrollHandler(section.name,section.id)}} key={section.id}>{section.title}</li>
    )
    const renderMainNavBarSections = mainPages.map(page =>
        <li className={activePage === page.id? style.active_section : ''} id={page.id} onClick={(e)=>{changePageHandler(e)}} key={page.id}>{page.title}</li>
    )









    // ** UseEffect    
    useEffect(()=>{
        const {pathname} = location;
        if(pathname.startsWith('/m/doctor/'))
        {
            setActivePage('consultation');
        }
        else if (pathname.startsWith('/m/'))
        {
            const page = pathname.split('/m/')[1];
            setActivePage(page);
        }
        
            
        if(pathname === '/')
        {
            setActiveSection('');    
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    },[location])





    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('kleitech_user') || 'null');
        if (userData) {
        dispatch(setUserLogin({ ...userData.user, token: userData.token, loggedIn: true }));
        }
    }, [dispatch]);



    return (
        <>
            <nav className={style.navCompoent}>
                <div className={style.nav_container}>
                    <div className={style.logo}>
                        <img src={navBarLogo} alt="" onClick={landingPageHandler}/>
                    </div>
                    <div className={style.mb_menu}>
                        <img src={navBarMenuIcon} alt="Nav Bar Icon" onClick={navBarToggleHandler}/>
                    </div>
                    {userLogged ?
                        <div className={style.menu} ref={menuRef}>
                            <ul>
                                {renderMainNavBarSections}
                            </ul>
                            <div className={`${style.auth_btns} ${style.auth_btns_logged}`}>
                                {
                                    listELementOpened && 
                                    <div className={style.list_element}>
                                        <ul>
                                            <li id='profile' onClick={(e)=>{changePageHandler(e)}}>الحساب الشخصي</li>
                                            <li id='suggestions' onClick={(e)=>{changePageHandler(e)}}>الاقتراحات</li>
                                        </ul>
                                    </div>
                                }
                                <button className={style.userLoggedIcon} onClick={ListElementToggleHandler}><img src={settingIcon} alt="Setting icon" /></button>
                                <button className={style.userLoggedIcon} onClick={(e)=>{logOutSubmitHandler(e)}}><img src={logOutIcon} alt="LogOut icon" /></button>
                            </div>
                        </div>
                        :
                        <div className={style.menu} ref={menuRef}>
                            <ul>
                                {renderLandingNavBarSections}
                            </ul>
                            <div className={style.auth_btns}>
                                <button onClick={signUpPageHandler}>إنشاء حساب</button>
                                <button onClick={signInPageHandler}>تسجيل دخول</button>
                            </div>
                        </div>
                    }
                </div>
            </nav>
        </>
    )
}
