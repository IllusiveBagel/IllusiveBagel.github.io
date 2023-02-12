import React from 'react';

import styles from './Experiences.module.scss';

const Toob = () => {
    return (
        <div>
            <h1 className={styles.experienceTitle}>Toob</h1>
            <p className={styles.experienceText}>
                I joined toob as an Application Systems Specialist which to start with
                meant I was responsible for a variety of things. Toob was a start up and
                I joined quite early in the hiring process. My main responsibilities was
                creating and maintaining extensions to a 3rd party software used to manage
                the network and customers. These extensions were built in C# and Javascript.
                <br /><br />
                Along side my main priorities I also helped intigrate the ACS used to remotely
                manage customer CPE which allowed the support staff to offer a better service
                to the customer. Along with the ACS I also built an extension for the management
                software that allowed the ACS to be used directly from the management software
                meaning the support staff could offer full support from a single page rather than
                having to move between different sites.
                <br /><br />
                At toob I played a big role in the design process working closely with management
                and the support staff to ensure the software effectively fit the purpose and it's
                different use cases. This was the first role where I played a big part in the
                design process so I gained a lot of useful knowledge about how to consider the
                client.
            </p>
            <h1 className={styles.experienceSubTitle}>Skills Used</h1>
            <div className={styles.experienceSkills}>
                <div className={styles.experienceSkill}>
                    <p>C#</p>
                    <div className={styles.experienceSkillContainer}>
                        <div className={styles.experienceSkillStatus} style={{ width: "80%" }}></div>
                    </div>
                </div>
                <div className={styles.experienceSkill}>
                    <p>Javascript</p>
                    <div className={styles.experienceSkillContainer}>
                        <div className={styles.experienceSkillStatus} style={{ width: "50%" }}></div>
                    </div>
                </div>
                <div className={styles.experienceSkill}>
                    <p>CSS</p>
                    <div className={styles.experienceSkillContainer}>
                        <div className={styles.experienceSkillStatus} style={{ width: "60%" }}></div>
                    </div>
                </div>
                <div className={styles.experienceSkill}>
                    <p>REST API's</p>
                    <div className={styles.experienceSkillContainer}>
                        <div className={styles.experienceSkillStatus} style={{ width: "70%" }}></div>
                    </div>
                </div>
                <div className={styles.experienceSkill}>
                    <p>CPE Configuration</p>
                    <div className={styles.experienceSkillContainer}>
                        <div className={styles.experienceSkillStatus} style={{ width: "50%" }}></div>
                    </div>
                </div>
                <div className={styles.experienceSkill}>
                    <p>Linux Admin</p>
                    <div className={styles.experienceSkillContainer}>
                        <div className={styles.experienceSkillStatus} style={{ width: "40%" }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Toob;