import React from 'react';

import styles from './Card.module.scss';

const Card = ({ img, title, desc, onClick }) => {
    return (
        <div className={styles.card} onClick={onClick}>
            <img className={styles.cardImg} src={img} alt={title} />
            <div className={styles.cardBody}>
                <h1 className={styles.cardTitle}>{title}</h1>
                <p>{desc}</p>
            </div>
        </div>
    );
}

export default Card;