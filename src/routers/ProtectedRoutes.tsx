import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }: { children: JSX.Element })
{
    // ** Store
    const userData = useSelector((state: RootState) => state.userSignUp);

    return userData.userEmail ? children : <Navigate to="/u/sign-up" />;
}