import React from "react";

import styles from "./Landing.module.scss";

const Title = () => {
    return(
        <div className={styles.title}>
            <h1>Logan Young</h1>
            <div className={styles.subTitle}>
                <h4>ReactJS Developer</h4>
                <h4 style={{ color: "#fff" }}>and</h4>
                <h4>Network Engineer</h4>
            </div>
            <a className={styles.learn} href="#About">Learn More</a>
        </div>
    );
}

export default Title;