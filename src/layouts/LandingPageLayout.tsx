// ** Style
import style from '../style/layouts/landingPageLayout.module.css'
// ** Components
import NavBar from "../components/navbar/NavBar";
// ** Hooks && Tools
import { Outlet } from "react-router-dom";



export default function LandingPageLayout() {
    return (
        <div className={style.landing_page_layout}>
            <NavBar />
            <main className={style.sections}>
                <Outlet />
            </main>
        </div>
    )
}
