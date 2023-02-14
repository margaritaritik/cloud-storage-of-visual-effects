import React, {ReactEventHandler, useRef, useState} from 'react';
import styles from "../../styles/stylesAccountUser.module.css";
import {API, BASE_URL} from "../../servises/api";
import {DefaultValues, FieldValues} from "react-hook-form";
// import FormData from 'form-data';

const UploadImage = () => {
const filePicker=useRef(null);
    // const [selectedFile,setSelectedFile]=useState(FormData);

    const [imageFile, setImageFile] = React.useState<File>();
    const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        if(event.target.files){
            let file= event.target.files[0];
            setImageFile(file)

            console.log(event.target.files[0]);
        }
    };

    const handleUpload=async ()=>{
        try{
            const formData = new FormData();
            formData.append('file',imageFile as Blob);
            console.log(formData);
            let response=await fetch(`${BASE_URL}/uploadPhoto`, {
                method: 'POST',
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                body: formData,
            });

            const result=await response.json();
            console.log(result);
        }catch (e) {

        }
    };


    return <>
        <div className={styles.container}>
            {/*<button onClick={handlePick}>pick</button>*/}
            <input type="file" onChange={handleChange} ref={filePicker} accept="image/*,.png,.jpg,.web" />
            <button onClick={handleUpload}>Upload</button>
        </div>

    </>

};

export default UploadImage;