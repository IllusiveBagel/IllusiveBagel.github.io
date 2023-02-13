import React, { useState } from 'react';
import Card from '../../Components/Common/Card/Card';
import Modal from '../../Components/Common/Modal/Modal';
import Synaptic from './Projects/Synaptic';
import DBMLDocs from './Projects/DBMLDocs';

import styles from './Projects.module.scss';

const Projects = () => {
    const [showModal, setShowModal] = useState();
    const [modalTitle, setModalTitle] = useState();
    const [modalContent, setModalContent] = useState();

    const handleShowModal = (title, content) => {
        setShowModal(true);
        setModalTitle(title);
        setModalContent(content);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className={styles.projectsContainer}>
            <h1 className={styles.projectsTitle}>Projects</h1>
            <div className={styles.projectsCardContainer}>
                <Card
                    img="images/DBMLDocs.png"
                    title="DBML Docs"
                    onClick={() => handleShowModal('DBML Docs', <DBMLDocs />)}
                />
                <Card
                    img="images/Synaptic.png"
                    title="Synaptic Implementation"
                    onClick={() => handleShowModal('Synaptic Implementation', <Synaptic />)}
                />
            </div>
            <Modal open={showModal} title={modalTitle} handleClose={handleCloseModal}>
                {modalContent}
            </Modal>
        </div>
    );
}

export default Projects;