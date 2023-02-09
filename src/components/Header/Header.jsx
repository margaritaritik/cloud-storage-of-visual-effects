import React from 'react';
import styles from './stylesHeader.module.css';
import avatarLogo from '../../images/avatar-lazybones-sloth-svgrepo-com.svg';
import logo from '../../images/logo.png';
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const clickLogo=()=>{
        // setTimeout(() => {
            navigate("/");
        // }, 1000);
    }

    return <>
            <div className={styles.container}>
                <div className={styles.menu}>

                </div>
                <img className={styles.logo} src={logo} alt="" onClick={clickLogo}/>
                <img className={styles.ava} src={avatarLogo} alt="" />
            </div>
        </>
};

export default Header;