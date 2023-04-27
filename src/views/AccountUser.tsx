import React, {useState, useRef, useContext} from 'react';
import Header from '../components/Header/Header';
import styles from '../styles/stylesAccountUser.module.css';
import UploadFile from '../components/UploadFile/UploadPhoto';
import {useNavigate} from "react-router-dom";
import {EditorContext} from "../components/CodeEditor/context/context";




const AccountUser = () => {
    const navigate = useNavigate();
    const getStorageData = (keyName:string, defaultValue:string) =>{
        const savedItem = localStorage.getItem(keyName);
        // @ts-ignore
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || defaultValue;
    }
    const user=getStorageData('user','no').user;

    const createRep=()=>{
            setTimeout(() => {
                navigate(`/createrep`);
            }, 1000);
    }



    return <>
        <Header></Header>
        {/*<UploadFile ></UploadFile>*/}
        <div className={styles.container}>
            <div className={styles.container_user}>
                <img src={user.srcImg} alt="" className={styles.ava}/>
                <div className={styles.user_info}>
                    {user.description}
                </div>
            </div>
            <div className={styles.effects}>
                <UploadFile></UploadFile>

            </div>
        </div>
    </>
};

export default AccountUser;