// ** Assets
import {logo, arrowDownIcon} from '../assets/icons/icons'
// ** Style
import style from '../style/layouts/authlayout.module.css'
// ** Hooks && Tools
import { Outlet } from "react-router-dom";





export default function AuthLayout() {
    return (
        <>
            <div className={style.auth_container}>
                <Outlet />
                <div className={style.logo}>
                    <img src={logo} alt="شعار كليّتِك" loading="lazy"/>
                    <h1>كليّتِك</h1>
                    <span>
                        <img src={arrowDownIcon} alt="Arrow down icon" loading="lazy"/>
                    </span>
                </div>
            </div>
        </>
    )
}
