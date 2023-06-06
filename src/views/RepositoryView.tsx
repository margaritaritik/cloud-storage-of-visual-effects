import React, {ReactNode, useEffect, useMemo, useState} from 'react';
import styles from '../styles/stylesRepositoryView.module.css';
import CodeDisplay from '../components/CodeDisplay/CodeDisplay';
import Header from '../components/Header/Header';
import PreviewEffect from "../components/Effect/PreviewEffect";
import {Button} from "@mui/material";
import {API} from "../servises/api";
import Comments from "../components/Comments/Comment";
import Avatar from "../components/Avatar/Avatar";
import TextField from "@material-ui/core/TextField";


const RepositoryView = () => {
    const [comment,setComment]=useState("");
    const [comments,setComments]=useState<{}[]>();
    const [btn,setBtn]=useState(false);
    const [visible,setVisible]=useState(false);
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
    useEffect(()=>{
        const PrintComments=async ()=>{
            try {

                let effect_comments:{account_id:number,comment_name:string,srcImg:string}[]=await API.user.getComments(effect.id);
                // @ts-ignore
                setComments(effect_comments.map(item => <Comments comment={item}></Comments>));
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
            if(comment!=""){
                setTest(await API.user.comment({name:comment,account_id:user.id,effect_id:effect.id}));
                setComment("");
            }
            else{
                setBtn(true);
            }

        }catch (e) {

        }

    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Header></Header>
            <div className={styles.container}>

                <div className={styles.effect}>
                    <PreviewEffect effects={effect} check={false}></PreviewEffect>
                    {visible && <p className={styles.download}>Скачать</p>}
                    <button className={styles.btn_download} onClick={handleSaveToPC} onMouseOut={()=>setVisible(false)}  onMouseOver={()=>setVisible(true)}>
                         ↓
                    </button>
                </div>
                <div className={styles.info}>
                    <Avatar user={false} effect={effect}></Avatar>
                    <div className={styles.name}>{effect.name}</div>
                    <div className={styles.description}>{effect.description}</div>
                </div>
                <div className={styles.code} onClick={()=>window.scrollTo(0, 500)}>
                     <CodeDisplay rep={true}></CodeDisplay>
                </div>
                <div className={styles.comments}>
                    <div className={styles.comment_title}>
                        <TextField name="comment"
                                   type="text" value={comment}
                                   label="ваш комментарий" variant="outlined" onChange={event => setComment(event.target.value)}>

                        </TextField>

                        <Button onClick={CreateComment} className={styles.btn_comment}>отправить</Button>
                    </div>

                    <div className={styles.comment}>
                        {comments as ReactNode}
                    </div>
                </div>
            </div>
        </>
    );
};

export default RepositoryView;