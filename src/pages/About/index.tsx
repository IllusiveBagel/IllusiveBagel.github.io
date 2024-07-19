import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { CSSBattle } from '../../components/Icons';

import dev from '../../assets/images/dev.jpeg';

import styles from './About.module.scss';

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <img className={styles.aboutImage} src={dev} alt="dev at desk" />
            <div className={styles.aboutBlock}>
                <h1 className={styles.aboutTitle}>Who am I?</h1>
                <p className={styles.aboutText}>
                    Hello! I'm Logan, a front-end developer specializing in
                    React, currently based in Hampshire. With 8 years of
                    experience in the tech industry, I started my career as a
                    tester before quickly transitioning into development. After
                    spending 5 years as a Full-Stack developer, I discovered my
                    true passion lies in front-end development.
                    <br />
                    <br />
                    When I'm not immersed in coding, I'm a dedicated maker with
                    a love for 3D printing, custom keyboards, and Lego
                    creations. You'll often find me designing new Lego MOCs (My
                    Own Creations) or brainstorming innovative ways to build the
                    next unique keyboard.
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
                    <a href="https://cssbattle.dev/player/illusivebagel">
                        <FontAwesomeIcon
                            icon={CSSBattle}
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
