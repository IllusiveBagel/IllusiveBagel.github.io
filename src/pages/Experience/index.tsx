import { ReactElement, useState } from 'react';
import Modal from '../../components/Modal';
import ast from '../../assets/images/ast.svg';
import supplypoint from '../../assets/images/supplypoint.svg';
import toob from '../../assets/images/toob.svg';
import northsails from '../../assets/images/northsails.svg';
import dootrix from '../../assets/images/dootrix.svg';
import mivoice from '../../assets/images/mivoice.svg';
import autoprotect from '../../assets/images/autoprotect.svg';

import styles from './Experience.module.scss';

const Experience = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState(<></>);

    const handleShowModal = (title: string, content: ReactElement) => {
        setShowModal(true);
        setModalTitle(title);
        setModalContent(content);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className={styles.experienceContainer}>
            <div className={styles.hex}>
                <div className={styles.hexContainer}>
                    <div onClick={() => handleShowModal('AST Group', <></>)}>
                        <div>
                            <img src={ast} alt="AST" />
                        </div>
                    </div>
                    <div onClick={() => handleShowModal('SupplyPoint', <></>)}>
                        <div>
                            <img src={supplypoint} alt="SupplyPoint" />
                        </div>
                    </div>
                    <div onClick={() => handleShowModal('Toob', <></>)}>
                        <div>
                            <img src={toob} alt="Toob" />
                        </div>
                    </div>
                    <div onClick={() => handleShowModal('North Sails', <></>)}>
                        <div>
                            <img src={northsails} alt="North Sails" />
                        </div>
                    </div>
                    <div onClick={() => handleShowModal('Dootrix', <></>)}>
                        <div>
                            <img src={dootrix} alt="Dootrix" />
                        </div>
                    </div>
                    <div onClick={() => handleShowModal('Mi-Voice', <></>)}>
                        <div>
                            <img src={mivoice} alt="Mi-Voice" />
                        </div>
                    </div>
                    <div onClick={() => handleShowModal('Autoprotect', <></>)}>
                        <div>
                            <img src={autoprotect} alt="Autoprotect" />
                        </div>
                    </div>
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
                title={modalTitle}
                handleClose={handleCloseModal}
            >
                {modalContent}
            </Modal>
        </div>
    );
};

export default Experience;
