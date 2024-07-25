import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import projects from '../../data/projects';

import styles from './Projects.module.scss';

const Projects = () => {
    return (
        <div className={styles.projectsContainer}>
            <h1 className={styles.projectsTitle}>Personal Projects</h1>
            {projects.map((project, idx) => {
                return (
                    <a
                        className={styles.projectsCard}
                        href={project.link}
                        key={idx}
                    >
                        <h1>
                            {project.title}
                            <FontAwesomeIcon
                                className={styles.projectsLink}
                                icon={faArrowUpRightFromSquare}
                            />
                        </h1>
                        <p>{project.description}</p>
                        <div className={styles.projectsTagContainer}>
                            {project.tags.map((tag, idx) => {
                                return (
                                    <div
                                        className={styles.projectsTag}
                                        key={idx}
                                    >
                                        {tag}
                                    </div>
                                );
                            })}
                        </div>
                    </a>
                );
            })}
        </div>
    );
};

export default Projects;
