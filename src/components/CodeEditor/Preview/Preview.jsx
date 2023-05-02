import React, {useContext, useMemo, useState} from 'react';
import styles from './Preview.module.css';
import Popup from 'reactjs-popup';
import {EditorContext} from "../context/context";
import {API} from "../../../servises/api";

const Preview = () => {
    const {html,css,js}=useContext(EditorContext);
    const [effectTitle,setEffectTitle]=useState("");
    const [effectDescription,setEffectDescription]=useState("");
    const [check,setCheck]=useState(false);
    console.log(html);
    const document=useMemo(()=> {
        if(!html && !css && !js) return;
        return`<!doctype html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <style>
           ${css}
            </style>    
         </head>
            <body>
                ${html}
                <script>
                    ${js}
                </script>
            </body>
        </html>`
    },[html,css,js]);



    const getStorageData = (keyName, defaultValue) =>{
        const savedItem = localStorage.getItem(keyName);
        // @ts-ignore
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || defaultValue;
    }
    const user=getStorageData('user','no').user;

    const BtnCreateClick=async ()=>{
        if(effectTitle===""){
            setCheck(true);
        }
        else{
            const result=await API.user.createRepository({name:effectTitle,description:effectDescription,html:html,css:css,js:js,typeeffect_id:1,account_id:user.id});
        }
    }
    const closeModal = () => setCheck(false);

    return (
        <>
            <div className={styles.content}>
                {
                    document ? <iframe title="preview" className={styles.preview} srcDoc={document}/>
                        : <div className={styles.loading}>Your code will be displayed here!</div>
                }
            </div>
            <div className={styles.container_title}>
                <label>
                    Имя:
                    <input name="title"
                           type="text" value={effectTitle}
                           onChange={event => setEffectTitle(event.target.value)}
                    />
                </label>
                <label>
                    Описание:
                    <input type="text" name="description"
                           value={effectDescription}
                           onChange={event => setEffectDescription(event.target.value)}/>
                </label>
                <button className={styles.btn_create} onClick={BtnCreateClick}>Загрузить</button>
                <Popup open={check} closeOnDocumentClick onClose={closeModal}>
                    <div className={styles.modal}>
                        <a className={styles.close} onClick={closeModal}>
                            &times;
                        </a>
                        <div>Укажите название!!!</div>

                    </div>
                </Popup>
            </div>

        </>

    );
};

export default Preview;