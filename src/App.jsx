import React, { useState, useEffect } from 'react';
import './Styles/App.css';
import LandingPage from './Pages/Landing/LandingPage';
import Title from './Pages/Landing/Title';
import Navbar from './Components/Navigation/Navbar';
import About from './Pages/About/About';
import Experience from './Pages/Experience/Experience';
import Projects from "./Pages/Projects/Projects";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";


const App = () => {
    const [stickNav, setStickNav] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return function cleanup() {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > window.innerHeight) {
            setStickNav(true);
        }
        else {
            setStickNav(false);
        }
    }

    return (
        <>
            <section id="Home" className="section flex">
                <LandingPage />
                <Title />
            </section>
            <Navbar stick={stickNav} />
            <section id="About" className="section flex" style={{ top: "100%" }}>
                <About />
            </section>
            <section id="Blog" className="section flex" style={{ top: "201%" }}>
                <Blog />
            </section>
            <section id="Projects" className="section flex" style={{ top: "302%" }}>
                <Projects />
            </section>
            <section id="Experience" className="section flex" style={{ top: "403%" }}>
                <Experience />
            </section>
            <section id="Contact" className="section flex" style={{ top: "504%" }}>
                <Contact />
            </section>
        </>
    );
}

export default App;