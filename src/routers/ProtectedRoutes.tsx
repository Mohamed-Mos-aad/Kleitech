// ** Hooks && Tools
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Navigate } from "react-router-dom";



// ** Layouts
export function ProtectAuthRoutes({ children }: { children: JSX.Element })
{
    const userData = JSON.parse(localStorage.getItem('kleitech_user') || sessionStorage.getItem('kleitech_user') || 'null');
    return userData ? <Navigate to="/m" /> : children;
}

export function ProtectMainRoutes({ children }: { children: JSX.Element })
{
    const userData = JSON.parse(localStorage.getItem('kleitech_user') || sessionStorage.getItem('kleitech_user') || 'null');
    return userData ?   children : <Navigate to="/u/sign-in" />;
}

export function ProtectDashboardRoutes({ children }: { children: JSX.Element })
{
    const userData = JSON.parse(localStorage.getItem('kleitech_user') || sessionStorage.getItem('kleitech_user') || 'null');
    return userData ?   children : <Navigate to="/u/sign-in" />;
}



// ** Components
export function ProtectOtpRoute({ children }: { children: JSX.Element })
{
    // ** Store
    const userData = useSelector((state: RootState) => state.userSignUp);

    return userData.userEmail ? children : <Navigate to="/u/sign-up" />;
}

export function ProtectDoneRoute({ children }: { children: JSX.Element })
{
    const actionType = useSelector((state: RootState) => state.donePage.actionType);
    return actionType === '' ?  <Navigate to="/u/sign-up" /> : children ;
}