import './Styles/App.css';
import './Styles/Landing.css';
import './Styles/Navigation.css';
import './Styles/Info.css';
import './Styles/Experience.css';
import './Styles/Modal.css';
import './Styles/Content.css';
import './Styles/Projects.css';
import './Styles/Card.css';
import LandingPage from './Components/Landing/LandingPage';
import Title from './Components/Landing/Title';
import Navbar from './Components/Navigation/Navbar';
import Info from './Components/About/Info';
import Experience from './Components/Experience/Experience';
import Projects from "./Components/Projects/Projects";
import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            stickNav: false,
        }
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.pageYOffset > window.innerHeight) {
            this.setState({
                stickNav: true,
            })
        }
        else {
            this.setState({
                stickNav: false,
            })
        }
    }

    render() {
        return (
            <>
                <section id="Home" className="section flex">
                    <LandingPage />
                    <Title />
                </section>
                {this.state.stickNav === false &&
                    <Navbar Class="Navbar" />
                }
                {this.state.stickNav === true &&
                    <Navbar Class="Navbar Stick" />
                }
                <section id="About" className="section flex" style={{ top: "100%" }}>
                    <Info />
                </section>
                <section id="Skills" className="section flex" style={{ top: "201%" }}>
                    <h1>Skills</h1>
                </section>
                <section id="Projects" className="section flex" style={{ top: "302%" }}>
                    <Projects />
                </section>
                <section id="Experience" className="section flex" style={{ top: "403%" }}>
                    <Experience />
                </section>
                <section id="Contact" className="section flex" style={{ top: "504%" }}>
                    <h1>Contact</h1>
                </section>
            </>
        );
    }
}
