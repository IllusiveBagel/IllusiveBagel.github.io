import React from 'react';
import classNames from 'classnames';

import styles from './Modal.module.scss';

const Modal = ({ open, title, children, handleClose }) => {
    return (
        <div className={classNames(styles.modal, open? styles.displayBlock : styles.displayNone)}>
            <section className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <span className={styles.close} onClick={handleClose}>&times;</span>
                    <h2 className={styles.modalTitle}>{title}</h2>
                </div>
                <div className={styles.modalBody}>
                    {children}
                </div>
            </section>
        </div>
    );
}

export default Modal;