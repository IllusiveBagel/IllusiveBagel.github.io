import { useEffect, useState } from 'react';
import classNames from 'classnames';

import Navbar from './components/Navbar';
import LandingPage from './pages/Landing';
import Title from './pages/Landing/Title';
import Experience from './pages/Experience';

import styles from './App.module.scss';

function App() {
    const [stickNav, setStickNav] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return function cleanup() {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > window.innerHeight) {
            setStickNav(true);
        } else {
            setStickNav(false);
        }
    };

    return (
        <>
            <section
                id="Home"
                className={classNames(styles.section, styles.flex)}
            >
                <LandingPage />
                <Title />
            </section>
            <Navbar stick={stickNav} />
            <section
                id="About"
                className={classNames(styles.section, styles.flex)}
                style={{ top: '100%' }}
            >
                <h1>About</h1>
            </section>
            <section
                id="Blog"
                className={classNames(styles.section, styles.flex)}
                style={{ top: '200%' }}
            >
                <h1>Blog</h1>
            </section>
            <section
                id="Projects"
                className={classNames(styles.section, styles.flex)}
                style={{ top: '300%' }}
            >
                <h1>Projects</h1>
            </section>
            <section
                id="Experience"
                className={classNames(styles.section, styles.flex)}
                style={{ top: '400%' }}
            >
                <Experience />
            </section>
            <section
                id="Contact"
                className={classNames(styles.section, styles.flex)}
                style={{ top: '500%' }}
            >
                <h1>Contact</h1>
            </section>
        </>
    );
}

export default App;
