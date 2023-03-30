import React, {useState} from 'react';
import styles from './stylesHeader.module.css';
// import avatarLogo from '../../imagesTest/avatar-lazybones-sloth-svgrepo-com.svg';
// import logo from '../../imagesTest/logo.png';
import {useNavigate} from "react-router-dom";



const Header = () => {
    const navigate = useNavigate();
    // const [user,setUser]=useState({});
    const getStorageData = (keyName:string, defaultValue:string) =>{
        const savedItem = localStorage.getItem(keyName);
        // @ts-ignore
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || defaultValue;
    }
    const user=getStorageData('user','no').user;

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
                <img className={styles.ava} src={user.srcImg} alt="" onClick={clickAva} />
            </div>
        </>
};

export default Header;