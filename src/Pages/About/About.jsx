import React from 'react';

import styles from './About.module.scss';

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutImageContainer}>
                <img
                    src="images/avatar.png"
                    alt="Avatar"
                    className={styles.aboutImage}
                />
            </div>
            <div className={styles.aboutBlock}>
                <h1 className={styles.aboutTitle}>About Me</h1>
                <p className={styles.aboutText}>
                    My name is Logan. I am a Software Developer who specialises in ReactJS and C#
                    that is based in Fareham, Hampshire. I have a lot of passion for Software
                    Development, Network Engineering and Technology as a whole. I have 5 years
                    experience as a Full Stack Developer and before that I had a years experince
                    as a Tester. Over the last 6 years I have gained lots of great experience and
                    knowledge that I apply to make modern and effecient applications.
                    <br /><br />
                    I am always looking for my next challenge and I am very keen to gain new knowledge
                    along the way to improve my abilities as much as I can. My next career steps is to
                    specialise in ReactJS and focus on all the front-end development skills I have gained.
                </p>
            </div>
        </div>
    );
}

export default About;