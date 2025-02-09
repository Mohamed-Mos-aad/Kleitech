// ** Style
import style from '../style/layouts/authlayout.module.css'
// ** Assets
import logo from '../assets/auth/logo.svg'
import arrowDownIcon from '../assets/auth/formIcons/downArrowIcon.svg'
// ** Other
import { Outlet } from "react-router-dom";





export default function AuthLayout() {
    return (
        <>
            <div className={style.auth_container}>
                <Outlet />
                <div className={style.logo}>
                    <img src={logo} alt="Logo photo" />
                    <h1>كليّتِك</h1>
                    <span>
                        <img src={arrowDownIcon} alt="Arrow down icon" />
                    </span>
                </div>
            </div>
        </>
    )
}
