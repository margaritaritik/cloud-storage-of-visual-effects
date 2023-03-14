import React, {useState,useRef} from 'react';
import Header from '../components/Header/Header';
import styles from '../styles/stylesAccountUser.module.css';
import UploadFile from '../components/UploadFile/UploadPhoto';




const AccountUser = () => {


    return <>
        {/*<Header avaPath={}></Header>*/}
        <UploadFile ></UploadFile>
        {/*<input type="file" onChange={saveFile} />*/}
    </>
};

export default AccountUser;