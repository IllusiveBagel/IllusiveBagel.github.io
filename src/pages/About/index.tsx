import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

import dev from '../../assets/images/dev.jpeg';

import styles from './About.module.scss';

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <img className={styles.aboutImage} src={dev} alt="dev at desk" />
            <div className={styles.aboutBlock}>
                <h1 className={styles.aboutTitle}>Who am I?</h1>
                <p className={styles.aboutText}>
                    My name is Logan and I'm a React based front-end developer
                    based in Hampshire. I have been working in the industry for
                    8 years now starting out as a tester and quickly moving into
                    development. I was a Full-Stack developer for 5 years before
                    finding my passion in front-end development.
                    <br />
                    <br />
                    Beyond the world of development I am a maker with a passion
                    for 3D printing, keyboards and Lego. When i'm not typing
                    code you'll find me designing new Lego MOC's or figuring out
                    what bizarre way I can build a new keyboard.
                </p>
                <div className={styles.aboutLinks}>
                    <a href="mailto:logan@neutral.systems">
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            className={styles.aboutIcon}
                            size="2x"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/lky/">
                        <FontAwesomeIcon
                            icon={faLinkedinIn}
                            className={styles.aboutIcon}
                            size="2x"
                        />
                    </a>
                    <a href="https://github.com/IllusiveBagel">
                        <FontAwesomeIcon
                            icon={faGithub}
                            className={styles.aboutIcon}
                            size="2x"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
