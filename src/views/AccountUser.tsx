import React, {useState,useRef} from 'react';
import Header from '../components/Header/Header';
import styles from '../styles/stylesAccountUser.module.css';

const AccountUser = () => {
    const filePicker=useRef(null);
    const [selectedFile,setSelectedFile]=useState(null);
    const [uploaded,setUploaded]=useState();

    const handleChange=(event:any)=>{
        console.log(event.target.files);
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload=async()=>{
        if(!selectedFile){
            alert("Please select a file");
            return;
        };
    };


    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");

    const saveFile = (e:any) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };
    const uploadFile = async (e:any) => {
        const formData = new FormData();
        // formData.append("file", file:userInfo);
        formData.append("fileName", fileName);
        try {
            // const res = await axios.post(
            //     "http://localhost:3000/upload",
            //     formData
            // );
            // console.log(res);
        } catch (ex) {
            console.log(ex);
        }
    };

    return <>
        <Header></Header>
        <div className={styles.container}>
            <input type="file" onChange={handleChange} accept="image/*,.png,.jpg,.web" />
            <button onClick={handleUpload}>Upload</button>
        </div>
        {selectedFile && (
            <ul>
                {/*<li>{selectedFile.type}</li>*/}
            </ul>
        )}

        {/*<input type="file" onChange={saveFile} />*/}
    </>
};

export default AccountUser;