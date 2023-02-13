import React, {useRef, useState} from 'react';
import styles from "../../styles/stylesAccountUser.module.css";
import {API, BASE_URL} from "../../servises/api";
// import FormData from 'form-data';

const UploadImage = () => {
    const [selectedFile,setSelectedFile]=useState(null);
    const formData = new FormData();
    const handleChange=(event:any)=>{
        if(event.target && event.target.files[0]){
            formData.append('file', event.target.files[0]);
            console.log(event.target.files[0]);
        }

    };

    const handleUpload=async ()=>{
        try{
            let response=await fetch(`${BASE_URL}/uploadPhoto`, {
                method: "POST",
                headers: {
                    "Content-Type": 'multipart/form-data'
                },
                body:formData
            });

            const token=await response.json();
            console.log(token);
        }catch (e) {

        }
    };

    return <>
        <div className={styles.container}>
            <input type="file" onChange={handleChange} accept="image/*,.png,.jpg,.web" />
            <button onClick={handleUpload}>Upload</button>
        </div>

    </>

};

export default UploadImage;