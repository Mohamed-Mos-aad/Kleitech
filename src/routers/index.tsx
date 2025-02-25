import { Route, Routes } from "react-router-dom";
import LandingPageLayout from "../layouts/LandingPageLayout";
import LandingPage from "../pages/landing/LandingPage";
import AuthLayout from "../layouts/AuthLayout";
import Welcome from "../pages/auth/Welcome";
import SignIn from "../pages/auth/SignIn";
import SignUp from './../pages/auth/SignUp';
import ForgetPassword from "../pages/auth/ForgetPassword";
import Otp from "../pages/auth/Otp";
import NewPassword from "../pages/auth/NewPassword";
import Done from "../pages/auth/Done";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/main/Home";

export default function Routers() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPageLayout/>}>
                    <Route index element={<LandingPage/>}/>
                </Route>
                <Route path="/u" element={<AuthLayout />}>
                    <Route index element={<Welcome />}/>
                    <Route path="sign-in" element={<SignIn />}/>
                    <Route path="sign-up" element={<SignUp />}/>
                    <Route path="forget-password" element={<ForgetPassword />}/>
                    <Route path="otp" element={<Otp />}/>
                    <Route path="new-password" element={<NewPassword />}/>
                    <Route path="done" element={<Done />}/>
                </Route>
                <Route path="/m" element={<MainLayout />}>
                    <Route index element={<Home/>}/>
                </Route>
            </Routes>
        </>
    )
}
