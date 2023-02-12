import React from 'react';

import styles from '../../../Styles/Common/ModalContent.module.scss';

const Synaptic = () => {
    return (
        <div>
            <h1 className={styles.modalTitle}>Synaptic Implementation</h1>
            <p className={styles.modalText}>
                The Synaptic Implementation is a simple machine learning implementation where creatures
                will search for eachother and follow eachother around the screen. This project is a
                recreation of one of my first projects I made when first learning about Machine Learning.
                I thought the example use case they gave on their site was really interesting so I
                extracted it and made it into it's own site. This gave me a good understanding of how the
                library worked and how I could apply it to my own use case. This project is recreating
                that but using React and Typescript instead of base Javascript.
                <br /><br />
                The benefits this gave me as a developer was first of all using my new gained knowledge to
                improve something that I enjoyed as a younger developer and make it easier to expand in the
                future and helped me regain an understanding of machine learning that I had lost after not
                entertaining it for a few years. This project will serve as a great starting point for future
                projects as I learn more about machine learning and how to apply it in useful applications.
                <br /><br />
                This exact project may not have much of a future other than being an interesting screen saver
                or background for other sites but I do have a few thoughts of features that I could add such
                as a food system giving the creatures something to look for rather than following eachother
                around the screen.
            </p>
            <hr />
            <div className={styles.modalLinks}>
                <a href="https://github.com/IllusiveBagel/Synaptic-Implementation" target="_blank" rel="noreferrer">Github</a>
                <a href="https://illusivebagel.github.io/Synaptic-Implementation/" target="_blank" rel="noreferrer">Live Demo</a>
            </div>
        </div>
    )
}

export default Synaptic;