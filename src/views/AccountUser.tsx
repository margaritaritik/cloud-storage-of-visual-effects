import React, {useState,useRef} from 'react';
import Header from '../components/Header/Header';
import styles from '../styles/stylesAccountUser.module.css';
import UploadFile from '../components/UploadFile/UploadPhoto';
import {useNavigate} from "react-router-dom";




const AccountUser = () => {
    const navigate = useNavigate();
    const createRep=()=>{
            setTimeout(() => {
                navigate(`/createrep`);
            }, 1000);
    }


    return <>
        {/*<Header avaPath={}></Header>*/}
        <UploadFile ></UploadFile>
        {/*<input type="file" onChange={saveFile} />*/}
        <button onClick={createRep}>Создать репозиторий</button>
    </>
};

export default AccountUser;