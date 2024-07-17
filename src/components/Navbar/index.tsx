import { useState } from 'react';
import ScrollSpy from 'react-scrollspy-navigation';
import classNames from 'classnames';

import styles from './Navbar.module.scss';

interface NavbarProps {
    stick: boolean;
}

const Navbar = ({ stick }: NavbarProps) => {
    const [overlayMenu, setOverlayMenu] = useState(false);

    const handleMenuClick = () => {
        if (overlayMenu === true) {
            setOverlayMenu(false);
        } else {
            setOverlayMenu(true);
        }
    };

    return (
        <>
            <nav
                className={classNames(styles.Navbar, stick ? styles.Stick : '')}
            >
                <div className={styles.NavWrapper}>
                    <div className={styles.Logo}>
                        <a href="#Home">Logan Young</a>
                    </div>
                    <ScrollSpy activeClass={styles.Active}>
                        <ul>
                            <li>
                                <a href="#About">About</a>
                            </li>
                            <li>
                                <a href="#Blog">Blog</a>
                            </li>
                            <li>
                                <a href="#Projects">Projects</a>
                            </li>
                            <li>
                                <a href="#Experience">Experience</a>
                            </li>
                            <li>
                                <a href="#Contact">Contact</a>
                            </li>
                        </ul>
                    </ScrollSpy>
                </div>

                <div
                    className={
                        overlayMenu
                            ? classNames(styles.menuIcon, styles.toggle)
                            : styles.menuIcon
                    }
                    onClick={handleMenuClick}
                >
                    <span className={styles.iconBars}></span>
                    <span
                        className={classNames(styles.iconBars, styles.overlay)}
                    ></span>
                </div>

                <div
                    className={
                        overlayMenu
                            ? classNames(styles.overlayMenu, styles.open)
                            : styles.overlayMenu
                    }
                >
                    <ScrollSpy activeClass={styles.Active}>
                        <ul>
                            <li>
                                <a href="#About" onClick={handleMenuClick}>
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#Blog" onClick={handleMenuClick}>
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#Projects" onClick={handleMenuClick}>
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#Experience" onClick={handleMenuClick}>
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a href="#Contact" onClick={handleMenuClick}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </ScrollSpy>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
