// ** Style
import style from '../style/layouts/dashboardlayout.module.css'
// ** Pages && Components
import NavBarDashBoard from "../components/navbar/NavBarDashBoard";
import { Outlet } from 'react-router-dom';





export default function DashBoardLayout() {
    return (
        <>
            <div className={style.dashboard_layout_containder}>
                <NavBarDashBoard />
                <Outlet />
            </div>
        </>
    )
}
