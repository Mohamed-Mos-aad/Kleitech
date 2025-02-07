import style from '../style/layouts/mainLayout.module.css'
import NavBar from "../components/navbar/NavBar";
import { Outlet } from "react-router-dom";





export default function MainLayout() {
    return (
        <>
            <div className={style.main_layout}>
                <NavBar />
                <div className={style.pages}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}
