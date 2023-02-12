import React from 'react';

import styles from './Experiences.module.scss';

const MiVoice = () => {
    return (
        <div>
            <h1 className={styles.experienceTitle}>MiVoice</h1>
            <p className={styles.experienceText}>
                To Be Written
                <br /><br />
            </p>
            <h1 className={styles.experienceSubTitle}>Skills Used</h1>
            <div className={styles.experienceSkills}>
                <div className={styles.experienceSkill}>
                    <p>To Be Written</p>
                    <div className={styles.experienceSkillContainer}>
                        <div className={styles.experienceSkillStatus} style={{ width: "80%" }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MiVoice;