import React from 'react';
import styles from './stylesHeader.module.css';
import avatarLogo from '../../images/avatar-lazybones-sloth-svgrepo-com.svg';

const Header = () => {
    return <>
            <div className={styles.container}>
                <div className={styles.menu}>

                </div>
                <div className={styles.logo}>

                </div>
                <div className={styles.ava}>
                    <img src={avatarLogo} alt=""/>
                </div>
            </div>
        </>
};

export default Header;