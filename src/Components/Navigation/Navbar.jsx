import React, {useState} from 'react';
import Scrollspy from 'react-scrollspy';
import classNames from 'classnames';

import styles from './Navbar.module.scss';

const Navbar = ({ stick }) => {
    const [overlayMenu, setOverlayMenu] = useState();
    const handleMenuClick = () => {
        if (overlayMenu === true) {
            setOverlayMenu(false);
        } else {
            setOverlayMenu(true);
        }
    }

    return (
        <>
            <nav className={classNames(styles.Navbar, stick ? styles.Stick : '')}>
                <div className={styles.NavWrapper}>
                    <div className={styles.Logo}>
                        <a href="#Home">Logan Young</a>
                    </div>
                    <Scrollspy items={['About', 'Blog', 'Projects', 'Experience', 'Contact']} className={styles.Menu} currentClassName={styles.Active}>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Blog">Blog</a></li>
                        <li><a href="#Projects">Projects</a></li>
                        <li><a href="#Experience">Experience</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </Scrollspy>
                </div>

                <div className={overlayMenu ? classNames(styles.menuIcon, styles.toggle) : styles.menuIcon} onClick={handleMenuClick}>
                    <span className={styles.iconBars}></span>
                    <span className={classNames(styles.iconBars, styles.overlay)}></span>
                </div>

                <div className={overlayMenu ? classNames(styles.overlayMenu, styles.open) : styles.overlayMenu}>
                    <Scrollspy items={['About', 'Blog', 'Projects', 'Experience', 'Contact']} id="Menu" currentClassName={styles.Active}>
                        <li><a href="#About" onClick={handleMenuClick}>About</a></li>
                        <li><a href="#Blog" onClick={handleMenuClick}>Blog</a></li>
                        <li><a href="#Projects" onClick={handleMenuClick}>Projects</a></li>
                        <li><a href="#Experience" onClick={handleMenuClick}>Experience</a></li>
                        <li><a href="#Contact" onClick={handleMenuClick}>Contact</a></li>
                    </Scrollspy>
                </div>
            </nav>
        </>
    );
}

export default Navbar;