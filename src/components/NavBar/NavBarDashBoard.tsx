// ** Assets
import logoIcon from '../../assets/dashboard/logoIcon.svg'
import mainIcon from '../../assets/dashboard/menu/mainIcon.svg'
import doctorIcon from '../../assets/dashboard/menu/doctorIcon.svg'
import patientIcon from '../../assets/dashboard/menu/patientIcon.svg'
import logOutIcon from '../../assets/dashboard/menu/logOutIcon.svg'
import leftArrowIcon from '../../assets/dashboard/menu/leftArrowIcon.svg'
// ** Style 
import style from '../../style/components/navbar/navbardashboard.module.css'
// ** Hooks && Tools
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'



export default function NavBarDashBoard() {
    // ** Default
    const navigate = useNavigate();
    const location = useLocation();



    // ** States
    const [navBarOpened,setNavBarOpened] = useState<boolean>(true);
    const [activePage,setActivePage] = useState<string>('');





    // ** Handler
    const changePageHandler = (page:string)=>{
        navBarStateToggleHandler();
        navigate(`./${page}`);
    }
    const navBarStateToggleHandler = ()=>{
        setNavBarOpened(prev => !prev);
    }





        // ** UseEffect    
        useEffect(()=>{
            const {pathname} = location;
            if(pathname.startsWith('/dashboard/'))
            {
                setActivePage(pathname.replace('/dashboard/',''));
            }
            else if(pathname.startsWith('/dashboard'))
            {
                setActivePage(pathname.replace('/dashboard',''));
            }
        },[location])
    
    


    return (
        <>
            <div className={`${style.dashboard_bavbar_container} ${!navBarOpened && style.navbar_closed}`}>
                <nav className={style.nav}>
                    <div className={style.nav_container}>
                        <div className={style.logo}>
                            <img src={logoIcon} alt="logo icon"/>
                        </div>
                        <div className={style.menu}>
                            <ul>
                                <li className={activePage === '' ? style.active : ''} onClick={()=>{changePageHandler('')}}>
                                    <img src={mainIcon} alt="main icon" />
                                    الرئيسيه
                                </li>
                                <li className={activePage === 'doctors' ? style.active : ''} onClick={()=>{changePageHandler('doctors')}}>
                                    <img src={doctorIcon} alt="doctor icon" />
                                    الطبيب
                                </li>
                                <li className={activePage === 'patients' ? style.active : ''} onClick={()=>{changePageHandler('patients')}}>
                                    <img src={patientIcon} alt="patient icon" />
                                    المرضي
                                </li>
                                <li>
                                    <img src={logOutIcon} alt="logOut icon" />
                                    تسجيل الخروج
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <button onClick={navBarStateToggleHandler}>
                    <img src={leftArrowIcon} alt="Left Arrow icon" />
                </button>
            </div>
        </>
    )
}
