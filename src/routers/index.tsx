// ** Elements
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
import Advices from "../pages/main/Advices";
import Consultation from "../pages/main/Consultation";
import DoctorDetails from "../pages/main/DoctorDetails";
import BookingDetails from "../pages/main/BookingDetails";
import ChatLayout from "../layouts/ChatLayout";
import Alarm from "../pages/main/Alarm";
import Profile from "../pages/main/Profile";
import ChangePassword from "../pages/auth/ChangePassword";

// ** Hooks && Tools
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoutes";





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
                    <Route path="otp" element={<ProtectedRoute><Otp /></ProtectedRoute>} />
                    <Route path="new-password" element={<NewPassword />}/>
                    <Route path="done" element={<Done />}/>
                    <Route path="change-password" element={<ChangePassword />}/>
                </Route>
                <Route path="/m" element={<MainLayout />}>
                    <Route index element={<Home/>}/>
                    <Route path="advices" element={<Advices />}/>
                    <Route path="consultation" element={<Consultation />} />
                    <Route path="doctor/:id" element={<DoctorDetails />} />
                    <Route path="booking-details" element={<BookingDetails />} />
                    <Route path="alarm" element={<Alarm />} />
                    <Route path="profile" element={<Profile />}/>
                </Route>
                <Route path="/chats" element={<ChatLayout />}/>
            </Routes>
        </>
    )
}
