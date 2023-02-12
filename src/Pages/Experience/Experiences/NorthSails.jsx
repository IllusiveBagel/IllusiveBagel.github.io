import React from 'react';

import styles from '../../../Styles/Common/ModalContent.module.scss';

const NorthSails = () => {
    return (
        <div>
            <h1 className={styles.modalTitle}>North Sails</h1>
            <p className={styles.modalText}>
                My role at North Sails was as a Full Stack developer helping build and
                maintain an internal sales and stock management system. This system was
                built with a C# and .NET Core REST API and a ReactJS Front End using
                MaterialUI. When I joined the company the REST API was built in VB so
                a lot of my time was spent converting this to the more modern .NET Core
                version. I was also given the task of converting a lot of old pages from
                a large mix of technologies to use React and create a few new pages to
                expand functionality.
                <br /><br />
                With the North Sails development team being made up of myself and 1 other
                person there was lots of oppurtunity for me to play a part in the design
                of the software as well as the actual development of it so while at North
                Sails I helped plan and prototype interesting projects such as a mobile
                app for scanning QR codes to help stock management in the production
                process of the sails.
                <br /><br />
                At North Sails I picked up some valuable skills such as the ability to
                refactor other peoples code in a logical and thought out way to ensure
                all bases are covered. North Sails was also my first role where I could
                apply my Typescript knowledge so I was able to take what I knew and use
                it in a professional environment. While at North Sails I also became
                more proficient at displaying large amounts of data in a user friendly
                way.
            </p>
            <h1 className={styles.modalSubTitle}>Skills Used</h1>
            <div className={styles.modalSkills}>
                <div className={styles.modalSkill}>
                    <p>React</p>
                    <div>
                        <div style={{ width: "80%" }}></div>
                    </div>
                </div>
                <div className={styles.modalSkill}>
                    <p>C#</p>
                    <div>
                        <div style={{ width: "40%" }}></div>
                    </div>
                </div>
                <div className={styles.modalSkill}>
                    <p>Visual Basic</p>
                    <div>
                        <div style={{ width: "15%" }}></div>
                    </div>
                </div>
                <div className={styles.modalSkill}>
                    <p>REST API's</p>
                    <div>
                        <div style={{ width: "60%" }}></div>
                    </div>
                </div>
                <div className={styles.modalSkill}>
                    <p>MaterialUI</p>
                    <div>
                        <div style={{ width: "80%" }}></div>
                    </div>
                </div>
                <div className={styles.modalSkill}>
                    <p>TSQL</p>
                    <div>
                        <div style={{ width: "40%" }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NorthSails;