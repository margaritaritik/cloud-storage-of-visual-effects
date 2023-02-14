import React, {useRef, useState} from 'react';
import {BASE_URL} from "../../servises/api";
import styles from "../../styles/stylesAccountUser.module.css";
import axios from 'axios';


const UploadFile = () => {
//     const [selectedFile, setSelectedFile] = useState();
//     const [isFilePicked, setIsFilePicked] = useState(false);
//     const uploadHandler=(event)=> {
//         const data = new FormData();
//         data.append('file', event.target.files[0]);
//
//         axios.post(`${BASE_URL}/uploadPhoto`, data)
//             .then((res) => {
//                 this.setState({ photos: [res.data, ...this.state.photos] });
//             });
//     }
//     const changeHandler = (event) => {
//         setSelectedFile(event.target.files[0]);
//         event.target.files[0] && setIsFilePicked(true);
//     };
//     const handleSubmission = () => {
//         // HANDLING FILE AS SENDING FILE INTO BACKEND
//         if (!isFilePicked) return;
//         const formData = new FormData();
//         formData.append("file", selectedFile);
//         // ALSO ADD RANDOM VALUE IF YOU WANT LIKE STRING , OBJECT OR      ARRAY
//         formData.append("carDetail", {
//             car: "honda",
//             engine: "1498 cc",
//             fuel_Type: "Petrol & Diesel",
//         });
// // API CALL
//         fetch(`${BASE_URL}/uploadPhoto`, {
//             method: "POST",
//             body: formData,
//         })
//             .then((response) => response.json())
//             .then((result) => {
//                 console.log("Success:", result);
//             })
//             .catch((error) => {
//                 console.error("Error:", error);
//             });
//     };
// // const filePicker=useRef(null);
// //     const [imageFile, setImageFile] = useState();
// //     const handleChange=(event)=>{
// //         if(event.target.files){
// //             setImageFile(event.target.files[0])
// //
// //             console.log(event.target.files[0]);
// //         }
// //     };
// //
// //     const handleUpload=async ()=>{
// //
// //
// //             console.log(imageFile);
// //             const formData = new FormData();
// //             formData.append('file',imageFile.type);
// //         formData.append('name',"hjsbcjhm");
// //             console.log(formData);
// //             const response=await fetch(`${BASE_URL}/uploadPhoto`, {
// //                 method: 'POST',
// //                 body:formData
// //             });
// //
// //             const result=await response.json();
// //             console.log(result);
// //
// //     };
// //     const handlePick=()=>{
// //         filePicker.current.click();
// //     }
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
            {/*<div className={styles.containerTest}>*/}
            {/*    /!*<button onClick={handlePick}>pick</button>*!/*/}
            {/*    <button onClick={handlePick}></button>*/}
            {/*    <input type="file" onChange={handleChange} ref={filePicker}  />*/}
            {/*    <button onClick={handleUpload}>Upload</button>*/}
            {/*</div>*/}
            {/*<div className={styles.containerTest}>*/}
            {/*    <input type="file" name="file" onChange={uploadHandler}/>*/}
            {/*    <div>*/}
            {/*        <button onClick={handleSubmission}>Submit</button>*/}
            {/*    </div>*/}
            {/*    {isFilePicked ? (*/}
            {/*        <div>*/}
            {/*            <p>Filename: {selectedFile.name}</p>*/}
            {/*            <p>Filetype: {selectedFile.type}</p>*/}
            {/*            <p>Size in bytes: {selectedFile.size}</p>*/}
            {/*            <p>*/}
            {/*                lastModifiedDate:{" "}*/}
            {/*                {selectedFile.lastModifiedDate.toLocaleDateString()}*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    ) : (*/}
            {/*        <div>*/}
            {/*            <p>Select a file</p>*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</div>*/}
        </>
    );
};

export default UploadFile;