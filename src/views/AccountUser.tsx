import React, {useState,useRef} from 'react';
import Header from '../components/Header/Header';
import styles from '../styles/stylesAccountUser.module.css';
import UploadFile from '../components/UploadFile/UploadPhoto';
import {useNavigate} from "react-router-dom";




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
        <UploadFile ></UploadFile>
        {/*<input type="file" onChange={saveFile} />*/}
        <button onClick={createRep}>Создать репозиторий</button>
    </>
};

export default AccountUser;