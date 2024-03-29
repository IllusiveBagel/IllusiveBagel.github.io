import React from 'react';

import styles from '../../../Styles/Common/ModalContent.module.scss';

const SupplyPoint = () => {
    return (
        <div>
            <h1 className={styles.modalTitle}>SupplyPoint</h1>
            <p className={styles.modalText}>
                I joined SupplyPoint as a junior full-stack developer and mainly helped
                with bug fixes in a couple different REST API's when I first started.
                This was a valuable learning point for me as it gave me the foundation
                knowledge on how to effectively work in a software team. It also helped
                me gain the skills needed to work on code that I havent written.
                <br /><br />
                After working with SupplyPoint for a few months I was given the task of
                redesigning the UI that is used on the machines they produced. This offered
                a great oppurtunity to use the React knowledge I had been gaining in my
                personal time. I suggested React to the team and everyone seemed keen to
                use it so the new UI used React as it's foundation and was built into a
                windows desktop application using Electron.
                <br /><br />
                With SupplyPoint being my first role as a developer I feel like it was a
                very important step in helping me move my career forward. This is also
                where I started to use a lot of the technologies that I now specialise in.
            </p>
            <h1 className={styles.modalSubTitle}>Skills Used</h1>
            <div className={styles.modalSkills}>
                <div className={styles.modalSkill}>
                    <p>C#</p>
                    <div>
                        <div style={{ width: "80%" }}></div>
                    </div>
                </div>
                <div className={styles.modalSkill}>
                    <p>Javascript</p>
                    <div>
                        <div style={{ width: "50%" }}></div>
                    </div>
                </div>
                <div className={styles.modalSkill}>
                    <p>React</p>
                    <div>
                        <div style={{ width: "80%" }}></div>
                    </div>
                </div>
                <div className={styles.modalSkill}>
                    <p>CSS</p>
                    <div>
                        <div style={{ width: "60%" }}></div>
                    </div>
                </div>
                <div className={styles.modalSkill}>
                    <p>REST API's</p>
                    <div>
                        <div style={{ width: "70%" }}></div>
                    </div>
                </div>
                <div className={styles.modalSkill}>
                    <p>Documentation</p>
                    <div>
                        <div style={{ width: "40%" }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SupplyPoint;