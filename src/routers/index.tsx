// ** Layouts
import LandingPageLayout from "../layouts/LandingPageLayout";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import ChatLayout from "../layouts/ChatLayout";
import DashBoardLayout from "../layouts/DashBoardLayout";


// ** Hooks && Tools
import { Route, Routes } from "react-router-dom";
import { ProtectDoneRoute, ProtectMainRutes, ProtectOtpRoute } from "./ProtectedRoutes";


// ** Elements
import LandingPage from "../pages/landing/LandingPage";
import Welcome from "../pages/auth/Welcome";
import SignIn from "../pages/auth/SignIn";
import SignUp from './../pages/auth/SignUp';
import ForgetPassword from "../pages/auth/ForgetPassword";
import Otp from "../pages/auth/Otp";
import NewPassword from "../pages/auth/NewPassword";
import Done from "../pages/auth/Done";
import Home from "../pages/main/Home";
import Advices from "../pages/main/Advices";
import Consultation from "../pages/main/Consultation";
import DoctorDetails from "../pages/main/DoctorDetails";
import BookingDetails from "../pages/main/BookingDetails";
import Alarm from "../pages/main/Alarm";
import Profile from "../pages/main/Profile";
import ChangePassword from "../pages/auth/ChangePassword";
import HomeDashboard from './../pages/dashboard/HomeDashboard';
import Doctors from "../pages/dashboard/Doctors";
import Patients from "../pages/dashboard/Patients";
import Suggestions from "../pages/main/Suggestions";






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
                    <Route path="otp" element={<ProtectOtpRoute><Otp /></ProtectOtpRoute>} />
                    <Route path="new-password" element={<NewPassword />}/>
                    <Route path="done" element={<ProtectDoneRoute><Done /></ProtectDoneRoute>} />
                    <Route path="change-password" element={<ChangePassword />}/>
                </Route>
                <Route path="/m" element={<ProtectMainRutes><MainLayout /></ProtectMainRutes>}>
                    <Route index element={<Home/>}/>
                    <Route path="advices" element={<Advices />}/>
                    <Route path="consultation" element={<Consultation />} />
                    <Route path="doctor/:id" element={<DoctorDetails />} />
                    <Route path="booking-details" element={<BookingDetails />} />
                    <Route path="alarm" element={<Alarm />} />
                    <Route path="suggestions" element={<Suggestions />}/>
                    <Route path="profile" element={<Profile />}/>
                </Route>
                <Route path="/chats" element={<ProtectMainRutes><ChatLayout /></ProtectMainRutes>}/>
                <Route path="/dashboard" element={<DashBoardLayout />}>
                    <Route index element={<HomeDashboard/>}/>
                    <Route path="doctors" element={<Doctors/>}/>
                    <Route path="patients" element={<Patients/>}/>
                </Route>
            </Routes>
        </>
    )
}
