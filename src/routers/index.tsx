import { Route, Routes } from "react-router-dom";
import LandingPageLayout from "../layouts/LandingPageLayout";
import LandingPage from "../pages/landing/LandingPage";

export default function Routers() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPageLayout/>}>
                    <Route index element={<LandingPage/>}/>
                </Route>
            </Routes>
        </>
    )
}
