import React, {useRef, useState} from 'react';
import styles from './styleUploadFile.module.css'

const UploadFile = () => {
    const [file, setFile] = useState(''); // storing the uploaded file
    // storing the recived file from backend
    const [data, getFile] = useState({ name: "", path: "" });
    const [progress, setProgess] = useState(0); // progess bar
    const el = useRef(); // accesing input element

    const handleChange = (e) => {
        setProgess(0)
        const file = e.target.files[0]; // accessing file
        console.log(file);
        setFile(file); // storing file
    }

    const uploadFile = async () => {
        const formData = new FormData();
        formData.append('file', file); // appending file
        // axios.post('http://127.0.0.1:9003/auth/upload', formData, {
        //     onUploadProgress: (ProgressEvent) => {
        //         let progress = Math.round(
        //             ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
        //         setProgess(progress);
        //     }
        // }).then(res => {
        //     console.log(res);
        //     getFile({ name: res.data.name,
        //         path: 'http://localhost:3000' + res.data.path
        //     })
        // }).catch(err => console.log(err))
        await fetch('http://127.0.0.1:9003/auth/upload', {
            method: "POST",
            headers: {
                "Content-Type": "image/jpeg"
            },
        //    body: formData
        }).then(res => {
            console.log("Image uploaded successfully!")
            getFile({ name: res.data.name,
                path: 'http://localhost:4500' + res.data.path
            })
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <div className={styles.container}>
            <div className={styles.fileUpload}>
                <input type="file" ref={el} onChange={handleChange} />
                <div className={styles.progessBar} style={{ width: progress }}>
                    {progress}
                </div>
                <button onClick={uploadFile} className={styles.upbutton}>
                    Upload
                </button>
                <hr />
                {/* displaying received image*/}
                {data.path && <img src={data.path} alt={data.name} />}
            </div>
        </div>
    );
};

export default UploadFile;