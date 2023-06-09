import React, {useState} from 'react';
import styles from './stylesHeader.module.css';
// import avatarLogo from '../../imagesTest/avatar-lazybones-sloth-svgrepo-com.svg';
// import logo from '../../imagesTest/logo.png';
import {useNavigate} from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import Menu from "./menu";
import {API} from "../../servises/api";



const Header = () => {
    const navigate = useNavigate();
     const [hover,setHover]=useState(false);
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
    const clickCreateRep=()=>{
        navigate("/createrep");
    }
    const AvaClick = async () => {

            const result=await API.user.getAccount(user.id);
            localStorage.setItem('account',JSON.stringify(result));
        navigate("/account");

    }

    return <>
            <div className={styles.container}>

                <img className={styles.logo} src={`http://127.0.0.1:9003/image/ImagesForClient/logo.png`} alt="" onClick={clickLogo}/>
                <div className={styles.ava} >
                    <div className={styles.menu_container}>
                        <div className={styles.menu}>
                        {/*<button onClick={clickCreateRep}>Create repository</button>*/}
                        <Menu ></Menu>
                        </div>
                        <button className={styles.menu_trigger} onMouseLeave={()=>{setHover(!hover)}}>
                            {/*{hover && <span>{user.name}</span>}*/}
                            <img onClick={AvaClick} src={`${user.srcImg}`} alt="ava" />
                        </button>

                    </div>
                </div>
            </div>
        </>
};

export default Header;