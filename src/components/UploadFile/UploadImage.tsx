import React, {useRef, useState} from 'react';
import styles from "../../styles/stylesAccountUser.module.css";
import {API} from "../../servises/api";

const UploadImage = () => {
    const filePicker=useRef(null);
    const [selectedFile,setSelectedFile]=useState(null);
    const [uploaded,setUploaded]=useState();
    const [imageFile, setImageFile] = React.useState<File>();

    const handleChange=(event:any)=>{

        setSelectedFile(event.target.files[0]);

    };

    const handleUpload=async()=>{
        if(!selectedFile){
            alert("Please select a file");
            return;
        };
        const formData = new FormData();
        formData.append("file", selectedFile);
        const token=await API.user.uploadFile(formData);
       
        console.log(token);
    };

    return <>
        <div className={styles.container}>
            <input type="file" onChange={handleChange} accept="image/*,.png,.jpg,.web" />
            <button onClick={handleUpload}>Upload</button>
        </div>
        {selectedFile && (
            <ul>
                {/*<li>{selectedFile}</li>*/}
            </ul>
        )}
    </>

};

export default UploadImage;