import React from 'react';

import styles from './Contact.module.scss';

const Contact = () => {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactLeft}>
                <img className={styles.contactIcon} src="images/envelope.svg" alt="Envelope" />
            </div>
            <div className={styles.contactBlock}>
                <h1 className={styles.contactTitle}>Get In Touch</h1>
                <div className={styles.contactLinks}>
                    <div className={styles.contactLink}>
                        <p>Phone</p>
                        <a href="tel:07446696964">07446696964</a>
                    </div>
                    <div className={styles.contactLink}>
                        <p>Email</p>
                        <a href="mailto:logan@neutral.systems">logan@neutral.systems</a>
                    </div>
                    <div className={styles.contactLink}>
                        <p>LinkedIn</p>
                        <a href="https://www.linkedin.com/in/lky/" target="_blank" rel="noreferrer">linkedin.com/in/lky</a>
                    </div>
                    <div className={styles.contactLink}>
                        <p>Github</p>
                        <a href="https://github.com/IllusiveBagel" target="_blank" rel="noreferrer">github.com/IllusiveBagel</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;