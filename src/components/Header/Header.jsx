import React from 'react';
import styles from './stylesHeader.module.css';
import avatarLogo from '../../images/avatar-lazybones-sloth-svgrepo-com.svg';
import logo from '../../images/logo.png';

const Header = () => {
    return <>
            <div className={styles.container}>
                <div className={styles.menu}>

                </div>
                <img className={styles.logo} src={logo} alt=""/>
                <img className={styles.ava} src={avatarLogo} alt=""/>
            </div>
        </>
};

export default Header;