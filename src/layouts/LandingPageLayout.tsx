import style from '../style/layouts/landingPageLayout.module.css'
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

export default function LandingPageLayout() {
    return (
        <>
            <div className={style.landing_page_layout}>
                <NavBar />
                <Outlet />
            </div>
        </>
    )
}
