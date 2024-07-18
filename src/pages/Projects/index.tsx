import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import projects from '../../data/projects';

import styles from './Projects.module.scss';

const Projects = () => {
    return (
        <div className={styles.projectsContainer}>
            {projects.map((project) => {
                return (
                    <a className={styles.projectsCard} href={project.link}>
                        <h1>
                            {project.title}
                            <FontAwesomeIcon
                                className={styles.projectsLink}
                                icon={faArrowUpRightFromSquare}
                            />
                        </h1>
                        <p>{project.description}</p>
                        <div className={styles.projectsTagContainer}>
                            {project.tags.map((tag) => {
                                return (
                                    <div className={styles.projectsTag}>
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
