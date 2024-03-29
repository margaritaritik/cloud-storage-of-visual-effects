import React, {useRef, useState} from 'react';
import styles from './styleUploadFile.module.css'
import axios from "axios";
import {useCallback, useContext} from "@types/react";
import logo from "../../imagesTest/logo.png";
import {EditorContext} from "../CodeEditor/context/context";

const UploadFile = () => {
    const [img,setImg]=useState(null);
    const [avatar,setAvatar]=useState(null);

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
                        :<img className={styles.logo} src={`${logo}`} alt="avatar"/>
                    }
                </div>

                <input type="file" onChange={e=>setImg(e.target.files[0])} name="image"/>
                <Button className={styles.btn} onClick={sendFile}>Загрузить !!!</Button>
                <img src={`${avatar}`} alt="avatar"/>

            </div>
        </>
    );
};

export default UploadFile;