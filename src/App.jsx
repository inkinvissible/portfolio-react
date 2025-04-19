
import Backgound from "./Components/Backgound.jsx";
import Projects from "./Components/Projects/index.jsx";
import {Element} from "react-scroll";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import About from "./Components/About/index.jsx";

const App = () => {
    const socialMedia = [
        {
            name: "Github",
            link: "https://github.com/inkinvissible",
            icon: "fa-github"
        },
        {
            name: "Linkedin",
            link: "https://www.linkedin.com/in/agust%C3%ADn-martin-40aa67312/",
            icon: "fa-linkedin"
        },
        {
            name: "Whatsapp",
            link: "https://wa.me/5493512050889",
            icon: "fa-whatsapp"
        },
        {
            name: "Gmail",
            link: "mailto:agustinmartin.web@gmail.com",
            icon: "fa-envelope"
        }
    ]
    return(
        <>
            <Backgound />
            <Element name="proyectos" >
                <Projects />
            </Element>
            <Element name="about" >
                <About />
            </Element>
            <Element name="contacto" >
                <Contact socialMedia={socialMedia}/>
            </Element>

            <Footer />
        </>
    )
}
export default App