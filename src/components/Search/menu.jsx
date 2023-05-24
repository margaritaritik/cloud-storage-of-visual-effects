import React from 'react';
import styles from './stylesMenu.module.css';

const Menu = () => {
    return (
        <>
            <div className={styles.menu_wrap}>
                <input type="checkbox" className={styles.toggler}/>
                    <div className={styles.hamburger}>
                        <div></div>
                    </div>
                    <div className={styles.menu}>
                        <div>
                            <div>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
};

export default Menu;