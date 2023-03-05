import React, {useState,useRef} from 'react';
import Header from '../components/Header/Header';
import styles from '../styles/stylesAccountUser.module.css';
import UploadFile from '../components/UploadFile/UploadPhoto';


const AccountUser = () => {


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
        <UploadFile></UploadFile>
        {/*<input type="file" onChange={saveFile} />*/}
    </>
};

export default AccountUser;