import React, {useRef, useState} from 'react';
import styles from "../../styles/stylesAccountUser.module.css";



const UploadPhoto = () => {
    const [image, setImage] = useState("");

    const sendImage=async(e)=> {
        e.preventDefault();

        const response=await fetch('http://127.0.0.1:9003/auth/uploadPhoto', {
            method: "POST",
            headers: {
                "Content-Type": "image/jpeg"
            },
            body: image
        }).then(() => {
            console.log("Image uploaded successfully!")
        }).catch(error => {
            console.log(error);
        });
        //const buffer = await response.arrayBuffer();
        // console.log(buffer);
        // const bytes = new Uint8Array(buffer);
        // const decoder = new TextDecoder('utf8');
        const result=await response.json();
        console.log(result);
    }

    return (
        <>
            <div className={styles.containerTest}>
                <form onSubmit={sendImage}>
                    <input type="file" name="image" onChange={e => setImage(e.target.files[0])}/>

                    <button type="submit">Send</button>

                </form>
            </div>
        </>
    );
};

export default UploadPhoto;