import React, {useMemo} from 'react';
import styles from '../styles/stylesRepositoryView.module.css';
import CodeDisplay from '../components/CodeDisplay/CodeDisplay';
import Header from '../components/Header/Header';
import PreviewEffect from "../components/Effect/PreviewEffect";
import {Button} from "@mui/material";


const RepositoryView = () => {
    const getStorageData = (keyName:string, defaultValue:string) =>{
        const savedItem = localStorage.getItem(keyName);
        // @ts-ignore
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || defaultValue;
    }
    const effect=getStorageData('selectedEffect','no');
    const documentEffect=`<!doctype html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <style>
           ${effect.css}
            </style>    
         </head>
            <body>
                ${effect.html}
                <script>
                    ${effect.js}
                </script>
            </body>
        </html>`;
    const jsonData = JSON.stringify(documentEffect);



    // @ts-ignore
    const handleSaveToPC =() => {
        const fileData = JSON.stringify(jsonData);
        const blob = new Blob([documentEffect], {type: "text/html"});
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
        const link = document.createElement('a');
        link.setAttribute("target", "_blank");
        link.style.display = "none";
        link.download = `${effect.name}.html`;
        link.href = url;
        link.click();
    }

    return (
        <>
            <Header></Header>
            <div className={styles.container}>

                <div className={styles.effect}>
                    <PreviewEffect effects={effect}></PreviewEffect>
                    <button className={styles.btn_download} onClick={handleSaveToPC}></button>
                </div>
                <div className={styles.code}>
                     <CodeDisplay></CodeDisplay>
                </div>
                <div className={styles.comments}>

                </div>
            </div>
        </>
    );
};

export default RepositoryView;