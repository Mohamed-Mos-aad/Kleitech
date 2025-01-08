import AboutUs from "./sections/AboutUs";
import ContactUs from "./sections/ContactUs";
import Footer from "./sections/Footer";
import JoinUs from "./sections/JoinUs";
import OurServices from "./sections/OurServices";

export default function LandingPage() {
    return (
        <>
            <AboutUs sectionId="about-us"/>
            <JoinUs sectionId="join-us"/>
            <OurServices />
            <ContactUs sectionId="contact-us"/>
            <Footer sectionId="footer"/>
        </>
    )
}
