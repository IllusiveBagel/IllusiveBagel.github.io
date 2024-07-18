import { useState } from 'react';
import Modal from '../../components/Modal';
import experiences from '../../data/experiences';
import { Experience as ExperienceType } from '../../types';

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
                    Through my 8 years experience in the field I have worked for
                    a variety of different companies each offering unique
                    services across many different sectors. Each role has
                    offered a multitude of different problems to solve which I
                    belive has helped me develop my skills to tackle any problem
                    thrown at me.
                    <br />
                    <br />
                    Feel free to click through the different roles to see what I
                    did in each role and how it's benefited me and my abilities
                    as a developer.
                </p>
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
