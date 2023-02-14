import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from './Contact.module.scss';

const Contact = () => {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactBlock}>
                <h1>Get In Touch!</h1>
                <h3>I'm open to any inquiries and more than happy to talk about my projects</h3>
                <div className={styles.contactLinks}>
                    <a href="mailto:logan@neutral.systems">
                        <FontAwesomeIcon icon={faEnvelope} className={styles.contactIcon} size="3x" />
                    </a>
                    <a href="https://www.linkedin.com/in/lky/">
                        <FontAwesomeIcon icon={faLinkedinIn} className={styles.contactIcon} size="3x" />
                    </a>
                    <a href="https://github.com/IllusiveBagel">
                        <FontAwesomeIcon icon={faGithub} className={styles.contactIcon} size="3x" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;