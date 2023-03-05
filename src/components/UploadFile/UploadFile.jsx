import React, {useRef, useState} from 'react';
import styles from './styleUploadFile.module.css'
import axios from "axios";

const UploadFile = () => {
    const [file, setFile] = useState()

    function handleChange(event) {
        setFile(event.target.files[0])
    }

    function handleSubmit(event) {
        event.preventDefault()
        const url = 'http://localhost:3000/uploadFile';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        axios.post('http://127.0.0.1:9003/auth/upload', formData, config).then((response) => {
            console.log(response.data);
        });

    }
    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <h1>React File Upload</h1>
                <input type="file" onChange={handleChange}/>
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default UploadFile;