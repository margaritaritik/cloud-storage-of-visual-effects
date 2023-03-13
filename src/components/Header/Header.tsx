import React from 'react';
import styles from './stylesHeader.module.css';
// import avatarLogo from '../../imagesTest/avatar-lazybones-sloth-svgrepo-com.svg';
// import logo from '../../imagesTest/logo.png';
import {useNavigate} from "react-router-dom";

export type HeaderForm = {
    avaPath: string;
    // logoPath:string;
}

const Header = (data:HeaderForm) => {
    const navigate = useNavigate();

    const clickLogo=()=>{
        // setTimeout(() => {
            navigate("/");
        // }, 1000);
    }
    const clickAva=()=>{
        navigate("/account");
    }


    return <>
            <div className={styles.container}>
                <div className={styles.menu}>

                </div>
                <img className={styles.logo} src={`http://127.0.0.1:9003/image/ImagesForClient/logo.png`} alt="" onClick={clickLogo}/>
                <img className={styles.ava} src={data.avaPath} alt="" onClick={clickAva} />
            </div>
        </>
};

export default Header;