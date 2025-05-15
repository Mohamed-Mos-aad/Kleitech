// ** Sections
import AboutUs from "./sections/AboutUs";
import Benefit from "./sections/Benefit";
import ContactUs from "./sections/ContactUs";
import Footer from "./sections/Footer";
import JoinUs from "./sections/JoinUs";
import OurServices from "./sections/OurServices";
import PatientReviews from "./sections/PatientReviews";



export default function LandingPage() {
    // ** Sections Config
    const sections = [
        {component: AboutUs, id:'about-us'},
        {component: JoinUs, id:'join-us'},
        {component: Benefit, id:'benefit'},
        {component: OurServices, id:'our-services'},
        {component: ContactUs, id:'contact-us'},
        {component: PatientReviews, id:'patient-reviews'},
        {component: Footer, id:'footer'},
    ]



    // ** Render
    const renderSections = sections.map(({ component: Component, id })=> (
        <Component sectionId={id} key={id}/>
    ))



    return (
        <>
            {renderSections}
        </>
    )
}
