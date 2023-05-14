import React, {useCallback, useEffect, useRef, useState} from 'react';
import styles from "./styleUploadFile.module.css";
import axios from "axios";

import logo from '../../imagesTest/logo.png'
import {BASE_URL} from "../../servises/api";


const UploadPhoto = () => {
    const [img,setImg]=useState(null);
    const [avatar,setAvatar]=useState(null);
    const [oldAvatar,setOldAvatar]=useState(null);

    const getStorageData = (keyName, defaultValue) =>{
        const savedItem = localStorage.getItem(keyName);
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || defaultValue;
    }
    const user=getStorageData('user','no').user;
    useEffect(()=>{
        setOldAvatar(user.srcImg);
    },[]);

    const sendFile=useCallback(async ()=>{
        try {
            const data=new FormData();
            data.append("image", img)
            console.log(img);
            const result = await axios.post('http://127.0.0.1:9003/auth/upload-image', data, {withCredentials: true, headers: {'Content-Type': 'multipart/form-data'}})
            setAvatar(result.data.url)
             console.log('result ',result.data);
        }catch (e){

        }
    },[img])

    return (
        <>
            <div className={styles.containerTest}>
                <div className={styles.avatar}>
                    {avatar
                        ?<img className={styles.logo} src={`${avatar}`} alt="avatar"/>
                        :<img className={styles.logo} src={`${oldAvatar}`} alt="avatar"/>
                    }
                </div>

                <input className={styles.inputUpload} title="" type="file" onChange={e=>setImg(e.target.files[0])} name="image"/>
                <button className={styles.btn} onClick={sendFile}> Загрузить avatar!!!</button>
            </div>
        </>
    );
};

export default UploadPhoto;