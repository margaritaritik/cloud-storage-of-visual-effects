import React, {useRef, useState} from 'react';
import {BASE_URL} from "../../servises/api";
import styles from "../../styles/stylesAccountUser.module.css";
import axios from 'axios';


const UploadFile = () => {
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");

    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        try {
            const res = await axios.post(
                `${BASE_URL}/uploadPhoto`,
                formData
            );
            console.log(res);
        } catch (ex) {
            console.log(ex);
        }
    };

    return (
        <>
            <div className={styles.containerTest}>
                <input type="file" onChange={saveFile} />
                <button onClick={uploadFile}>Upload</button>
            </div>
        </>
    );
};

export default UploadFile;