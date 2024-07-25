import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import Modal from '../../components/Modal';
import experiences from '../../data/experiences';
import { Experience as ExperienceType } from '../../types';
import cv from '../../assets/cv.pdf';

import styles from './Experience.module.scss';

const Experience = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState<ExperienceType>({
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: <></>,
        logo: '',
    });

    const handleShowModal = (experience: ExperienceType) => {
        setShowModal(true);
        setModalContent(experience);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className={styles.experienceContainer}>
            <div className={styles.hex}>
                <div className={styles.hexContainer}>
                    {experiences.map((experience, idx) => {
                        return (
                            <div
                                onClick={() => handleShowModal(experience)}
                                key={idx}
                            >
                                <div>
                                    <img
                                        src={experience.logo}
                                        alt={experience.company}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={styles.experienceBlock}>
                <h1 className={styles.experienceTitle}>Experience</h1>
                <p className={styles.experienceText}>
                    With 8 years of experience in the tech industry, I have had
                    the opportunity to work for various companies across
                    multiple sectors, each providing unique services. Every role
                    presented its own set of challenges, which have been
                    instrumental in honing my problem-solving skills and
                    enhancing my abilities as a developer.
                    <br />
                    <br />
                    Explore the different roles I've held to see the projects
                    I've worked on and how each position has contributed to my
                    growth and expertise as a developer.
                </p>
                <a
                    href={cv}
                    download="LoganYoungCV"
                    target="_blank"
                    className={styles.experienceLink}
                >
                    <FontAwesomeIcon
                        className={styles.experienceLinkIcon}
                        icon={faDownload}
                    />
                    Download Full CV
                </a>
            </div>
            <Modal
                open={showModal}
                handleClose={handleCloseModal}
                experience={modalContent}
            />
        </div>
    );
};

export default Experience;
