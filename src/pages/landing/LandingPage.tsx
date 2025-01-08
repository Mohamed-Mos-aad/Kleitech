import AboutUs from "./sections/AboutUs";
import ContactUs from "./sections/ContactUs";
import Footer from "./sections/Footer";
import JoinUs from "./sections/JoinUs";

export default function LandingPage() {
    return (
        <>
            <AboutUs sectionId="about-us"/>
            <JoinUs sectionId="join-us"/>
            <ContactUs sectionId="contact-us"/>
            <Footer sectionId="footer"/>
        </>
    )
}
