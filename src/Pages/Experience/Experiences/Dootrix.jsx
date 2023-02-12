import React from 'react';

import styles from '../../../Styles/Common/ModalContent.module.scss';

const Dootrix = () => {
    return (
        <div>
            <h1 className={styles.modalTitle}>Dootrix</h1>
            <p className={styles.modalText}>
                To Be Written
                <br /><br />
            </p>
            <h1 className={styles.modalSubTitle}>Skills Used</h1>
            <div className={styles.modalSkills}>
                <div className={styles.modalSkill}>
                    <p>To Be Written</p>
                    <div>
                        <div style={{ width: "80%" }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dootrix;