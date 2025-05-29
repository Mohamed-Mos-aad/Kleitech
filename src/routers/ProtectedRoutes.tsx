// ** Hooks && Tools
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Navigate } from "react-router-dom";


// ** GEt User Data
function getUserData() {
    return JSON.parse(localStorage.getItem('kleitech_user') || sessionStorage.getItem('kleitech_user') || 'null');
}

// ** Layouts
export function ProtectAuthRoutes({ children }: { children: JSX.Element })
{
    const userData = getUserData();
    return userData ? <Navigate to="/m" /> : children;
}

export function ProtectMainRoutes({ children }: { children: JSX.Element })
{
    const userData = getUserData();
    return userData ?   children : <Navigate to="/u/sign-in" />;
}

export function ProtectDashboardRoutes({ children }: { children: JSX.Element })
{
    const userData = getUserData();

    return userData?.user?.role === "admin" ?   children : <Navigate to="/u/sign-in" />;
}



// ** Components
export function ProtectOtpRoute({ children }: { children: JSX.Element })
{
    // ** Store
    const userData = useSelector((state: RootState) => state.userSignUp);

    return userData ? children : <Navigate to="/u/sign-up" />;
}

export function ProtectDoneRoute({ children }: { children: JSX.Element })
{
    const actionType = useSelector((state: RootState) => state.donePage.actionType);
    return actionType === '' ?  <Navigate to="/u/sign-up" /> : children ;
}