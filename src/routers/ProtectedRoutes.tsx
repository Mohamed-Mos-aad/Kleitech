import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Navigate } from "react-router-dom";

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