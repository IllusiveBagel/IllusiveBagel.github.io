import React from "react";

import styles from "./Project.module.scss";

const DBMLDocs = () => {
    return (
        <div>
            <h1 className={styles.ProjectTitle}>DBML Docs</h1>
            <p className={styles.ProjectText}>
                This project is an Open-Source project that aims to solve the issues of Database
                design and management. The web app accepts a DMBL file and converts it to an
                easily readable and fluent site. The reason I started this project was to help
                manage the design of large scale databases for future projects and after being
                happy with how the project was going I thought others could also benefit from it.
                In it's current state the DBMLDocs web app will accept a single DBML file and
                generate the site on start and gives a few options such as exporting the site in
                the DBML format and JSON format. The app is built using ReactJS and the MaterialUI
                design framework to give it a modern and responsive feel.
                <br /><br />
                I have lots of plans for the future of this project and lots of new features that
                will improve the functionality such as the ability to export the site to PDF format
                to allow easy distribution of the designs. Another key feature I want is the ability
                to upload multiple database files so a user can have a single site to document all
                of the databases they want to work on.
                <br /><br />
                This project has become a bit outdated with the way I originally built it so over the
                coming weeks this project will be a focus of mine to get it back up to industry standard
                and more up to date.
            </p>
            <hr />
            <div className={styles.ProjectLinks}>
                <a className={styles.ProjectLink} href="https://github.com/IllusiveBagel/DBMLDocs" target="_blank" rel="noreferrer">Github</a>
                <a className={styles.ProjectLink} href="https://github.com/IllusiveBagel/DBMLDocs" target="_blank" rel="noreferrer">Live Demo</a>
            </div>
        </div>
    );
}

export default DBMLDocs;