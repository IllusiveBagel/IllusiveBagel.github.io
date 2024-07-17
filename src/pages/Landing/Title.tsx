import styles from "./Landing.module.scss";

const Title = () => {
    return(
        <div className={styles.title}>
            <h1>Logan Young</h1>
            <div className={styles.subTitle}>
                <h4>React Developer</h4>
                <h4 style={{ color: "#93a1a1" }}>and</h4>
                <h4>Maker</h4>
            </div>
            <a className={styles.learn} href="#About">Learn More</a>
        </div>
    );
}

export default Title;