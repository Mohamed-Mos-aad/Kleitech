import { Route, Routes } from "react-router-dom";
import LandingPageLayout from "../layouts/LandingPageLayout";

export default function Routers() {
    return (
        <>
            <Routes>
                <Route index element={<LandingPageLayout/>}/>
            </Routes>
        </>
    )
}
