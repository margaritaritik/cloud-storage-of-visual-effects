import React, {useRef} from 'react';
import {useDetectOutsideClick} from "./useDetectOutsideClick";
import styles from './stylesMenu.module.css';

const Menu = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);

    return (
        <div className={styles.container}>
            <div className={styles.menu_container}>
                <button onClick={onClick} className={styles.menu_trigger}>
                    <span>User</span>
                    <img
                        src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
                        alt="User avatar"
                    />
                </button>
                <nav
                    ref={dropdownRef}
                    className={isActive ? styles.active : styles.inactive}
                >
                    <ul>
                        <li>
                            <a href="#">Messages</a>
                        </li>
                        <li>
                            <a href="#">Trips</a>
                        </li>
                        <li>
                            <a href="#">Saved</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Menu;