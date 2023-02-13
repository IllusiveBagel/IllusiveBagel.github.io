import React from 'react';

import styles from './Card.module.scss';

const Card = ({ img, title, onClick }) => {
    return (
        <div className={styles.card} onClick={onClick}>
            <img className={styles.cardImg} src={img} alt={title} />
            <h1 className={styles.cardTitle}>{title}</h1>
        </div>
    );
}

export default Card;