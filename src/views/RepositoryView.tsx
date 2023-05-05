import React, {ReactNode, useEffect, useMemo, useState} from 'react';
import styles from '../styles/stylesRepositoryView.module.css';
import CodeDisplay from '../components/CodeDisplay/CodeDisplay';
import Header from '../components/Header/Header';
import PreviewEffect from "../components/Effect/PreviewEffect";
import {Button} from "@mui/material";
import {API} from "../servises/api";
import Comments from "../components/Comments/Comment";


const RepositoryView = () => {
    const [comment,setComment]=useState("");
    const [comments,setComments]=useState<{}[]>();
    const getStorageData = (keyName:string, defaultValue:string) =>{
        const savedItem = localStorage.getItem(keyName);
        // @ts-ignore
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || defaultValue;
    }
    const effect=getStorageData('selectedEffect','no');
    const user=getStorageData('user','no').user;
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
    const [test,setTest]=useState({});
    const [commentsEffect,setCommentsEffect]=useState();
    // const getCommentsEffect=async ()=>{
    //     const getComments=await API.user.getComments(effect.id);
    // }

    useEffect(()=>{
        const PrintComments=async ()=>{
            try {

                let effect_comments:{id:number,comment_name:string,srcImg:string}[]=await API.user.getComments(effect.id);
                // console.log(effect_comments);
                // @ts-ignore
                setComments(effect_comments.map(item => <Comments comment={item}></Comments>));// = effects.map(item => <Effect effects={item}></Effect>)

                // console.log(token);
            }catch (e) {
                if (e instanceof Error) {
                    console.log(e.message);
                }
            }

        }
        PrintComments();
    },[test]);

    const CreateComment=async ()=>{
        try {
            setTest(await API.user.comment({name:comment,account_id:user.id,effect_id:effect.id}));
        }catch (e) {

        }

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
                    <label>
                        Коммент:
                        <input type="text" name="comment"
                               value={comment}
                               onChange={event => setComment(event.target.value)}/>
                    </label>
                    <button onClick={CreateComment} className={styles.btn_comment}>Написать комментарий</button>
                    <div>
                        {comments as ReactNode}
                    </div>
                </div>
            </div>
        </>
    );
};

export default RepositoryView;