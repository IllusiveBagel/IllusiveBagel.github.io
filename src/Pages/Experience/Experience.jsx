import React, {useState} from 'react';
import Modal from '../../Components/Common/Modal/Modal';
import AST from './Experiences/AST';
import SupplyPoint from "./Experiences/SupplyPoint";
import Toob from "./Experiences/Toob";
import NorthSails from "./Experiences/NorthSails";
import Dootrix from "./Experiences/Dootrix";
import MiVoice from "./Experiences/MiVoice";

import styles from './Experience.module.scss';

const Experience = () => {
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
        <div className={styles.experienceContainer}>
            <div className={styles.hex}>
                <div className={styles.hexContainer}>
                    <div onClick={() => handleShowModal("AST Group", <AST />)}>
                        <div >
                            <img src="images/ast.svg" alt="AST" />
                        </div>
                    </div>
                    <div onClick={() => handleShowModal("SupplyPoint", <SupplyPoint />)}>
                        <div>
                            <img src="images/supplypoint.svg" alt="SupplyPoint" />
                        </div>
                    </div>
                    <div onClick={() => handleShowModal("Toob", <Toob />)}>
                        <div>
                            <img src="images/toob.svg" alt="Toob" />
                        </div>
                    </div>
                    <div onClick={() => handleShowModal("North Sails", <NorthSails />)}>
                        <div>
                            <img src="images/northsails.svg" alt="North Sails" />
                        </div>
                    </div>
                    <div onClick={() => handleShowModal("Dootrix", <Dootrix />)}>
                        <div>
                            <img src="images/dootrix.svg" alt="Dootrix" />
                        </div>
                    </div>
                    <div onClick={() => handleShowModal("Mi-Voice", <MiVoice />)}>
                        <div>
                            <img src="images/mivoice.svg" alt="Mi-Voice" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.experienceBlock}>
                <h1 className={styles.experienceTitle}>Experience</h1>
                <p className={styles.experienceText}>
                    Through my 6 years experience in the field I have worked for a variety of different
                    companies each offering unique services across many different sectors. Each role has
                    offered a multitude of different problems to solve which I belive has helped me develop
                    my skills to tackle any problem thrown at me.
                    <br /><br />
                    Feel free to click through the different roles to see what I did in each role and how
                    it's benefited me and my abilities as a developer.
                </p>
            </div>
            <Modal open={showModal} title={modalTitle} handleClose={handleCloseModal}>
                {modalContent}
            </Modal>
        </div>
    );
}

export default Experience;