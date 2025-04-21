import style from '../style/layouts/landingPageLayout.module.css'
import NavBar from "../components/navbar/NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

export default function LandingPageLayout() {
    // ** Store
    const user = useSelector((state: RootState) => state.userLogin);






    // ** Default
    const navigate = useNavigate();





    // ** UseEffect
    useEffect(()=>{
        if(user.loggedIn)
        {
            navigate('/m');
        }
    },[user])




    return (
        <>
            <div className={style.landing_page_layout}>
                <NavBar />
                {/* <div className={style.sections}>
                    <Outlet />
                </div> */}
            </div>
        </>
    )
}
