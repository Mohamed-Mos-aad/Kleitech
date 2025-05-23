// ** Style
import style from '../style/layouts/dashboardlayout.module.css'
// ** Pages && Components
import NavBarDashBoard from "../components/navbar/NavBarDashBoard";
// ** Hooks && Tools
import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';





export default function DashBoardLayout() {
    // ** Navigation
    const navigate = useNavigate();
    const goToAuthPageHandler = ()=>{
        navigate('../u/sign-in');
    }


    // ** States
    const [logOutPopOpened,setLogOutPopOpened] = useState<boolean>(false);



    // ** Handlers
    const logOutPopToggleHandler = ()=>{
        setLogOutPopOpened(prev => !prev);
    }
    const logOutHandler = ()=>{
        goToAuthPageHandler();
        logOutPopToggleHandler();
    }



    return (
        <>
            <div className={style.dashboard_layout_containder}>
                <NavBarDashBoard logOutPopToggleHandler={logOutPopToggleHandler}/>
                <Outlet />
                {
                    logOutPopOpened &&
                    <div className={style.log_out_pop}>
                        <div className={style.log_out_pop_container}>
                            <div className={style.pop_title}>
                                <h1>هل تريد تسجيل الخروج؟</h1>
                            </div>
                            <div className={style.pop_btns}>
                                <button onClick={logOutPopToggleHandler}>لا</button>
                                <button onClick={logOutHandler}>نعم</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}
