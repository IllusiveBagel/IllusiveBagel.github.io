import classNames from 'classnames';

import { Experience } from '../../types';

import styles from './Modal.module.scss';

interface ModalProps {
    open: boolean;
    experience: Experience;
    handleClose: () => void;
}

const Modal = ({ open, experience, handleClose }: ModalProps) => {
    return (
        <div
            className={classNames(
                styles.modal,
                open ? styles.displayBlock : styles.displayNone
            )}
        >
            <section className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <span className={styles.close} onClick={handleClose}>
                        &times;
                    </span>
                    <h2 className={styles.modalTitle}>{experience.company}</h2>
                </div>
                <div className={styles.modalBody}>
                    <h2 className={styles.modalSubTitle}>
                        {experience.position}
                    </h2>
                    <p className={styles.modalText}>{experience.description}</p>
                </div>
            </section>
        </div>
    );
};

export default Modal;
