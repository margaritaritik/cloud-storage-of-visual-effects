import React, {useCallback, useRef, useState} from 'react';
import styles from "../../styles/stylesAccountUser.module.css";
import axios from "axios";

import logo from '../../imagesTest/logo.png'


const UploadPhoto = () => {
    const [img,setImg]=useState(null);
    const [avatar,setAvatar]=useState(null);

    // const [file, setFile] = useState()
    // const [description, setDescription] = useState("")
    // const [imageName, setImageName] = useState()
    //
    // const submit = async event => {
    //     event.preventDefault()
    //
    //     const formData = new FormData()
    //     formData.append("image", file)
    //     formData.append("description", description)
    //
    //     const result = await axios.post('http://127.0.0.1:9003/auth/upload', formData, { headers: {'Content-Type': 'multipart/form-data'}})
    //     console.log(result.data)
    //     setImageName(result.data.imageName)
    //
    // }


    const sendFile=useCallback(async ()=>{
        try {
            const data=new FormData();
            data.append("image", img)
            console.log(img);
            const result = await axios.post('http://127.0.0.1:9003/auth/upload', data, { headers: {'Content-Type': 'multipart/form-data'}})
            setAvatar(result.data.pathName)
            console.log('result ',result.data.pathName);
        }catch (e){

        }
    },[img])

    return (
        <>
            <div className={styles.containerTest}>
                {/*<form onSubmit={submit}>*/}
                {/*    <input*/}
                {/*        filename={file}*/}
                {/*        onChange={e => setFile(e.target.files[0])}*/}
                {/*        type="file"*/}
                {/*        accept="image/*"*/}
                {/*    ></input>*/}
                {/*    <input*/}
                {/*        onChange={e => setDescription(e.target.value)}*/}
                {/*        type="text"*/}
                {/*    ></input>*/}
                {/*    <button type="submit">Submit</button>*/}
                {/*</form>*/}
                <div className={styles.avatar}>
                    {avatar
                        ?<img className={styles.logo} src={`${avatar}`} alt="avatar"/>
                        :<img className={styles.logo} src={`${logo}`} alt="avatar"/>
                    }
                </div>

                <input type="file" onChange={e=>setImg(e.target.files[0])} />
                <button className={styles.btn} onClick={sendFile}> РёР·РјРµРЅРёС‚СЊ Р°РІР°С‚Р°СЂ</button>
                <img src={`/images/a3375daacd9c7b3587deb8c949111faa`} alt="avatar"/>
            </div>
        </>
    );
};

export default UploadPhoto;