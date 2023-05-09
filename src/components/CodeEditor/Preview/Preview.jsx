import React, {useContext, useMemo, useState} from 'react';
import styles from './Preview.module.css';
import Popup from 'reactjs-popup';
import {EditorContext} from "../context/context";
import {API} from "../../../servises/api";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


const Preview = ({checkEffect}) => {

    const {html,css,js}=useContext(EditorContext);
    const [combobox,setCombobox]=useState();
    // const {css,setCss}=useContext(EditorContext);
    // const {html,setHtml}=useContext(EditorContext);
    const getStorageData = (keyName, defaultValue) =>{
        const savedItem = localStorage.getItem(keyName);
        // @ts-ignore
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || defaultValue;
    }
    const user=getStorageData('user','no').user;
    const effect=getStorageData('selectedEffect','no');
    if(checkEffect){
        // console.log(effect.name);
        // html=effect.html;
        // setCss(effect.css);
        // setHtml(effect.html);
    }

    const [effectTitle,setEffectTitle]=useState("");
    const [effectDescription,setEffectDescription]=useState("");
    const [check,setCheck]=useState(false);
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

    const options = ['прелоадер', 'трехмерный эффект', 'типографика',
        'природный эффект'];



    const BtnCreateClick=async ()=>{
        if(effectTitle===""){
            setCheck(true);
        }
        else{

            // const matches = (options.filter(s => s.includes(combobox)));
             const result=await API.user.createRepository({name:effectTitle,description:effectDescription,html:html,css:css,js:js,typeeffect_id:options.indexOf(combobox)+1,account_id:user.id});
        }
    }

    const BtnChangeClick=async ()=>{
        if(effectTitle===""){
            setCheck(true);
        }
        else{
            console.log("change");
            // const result=await API.user.createRepository({name:effectTitle,description:effectDescription,html:html,css:css,js:js,typeeffect_id:1,account_id:user.id});
        }
    }
    const closeModal = () => setCheck(false);
    const Combobox=()=>{
        console.log()
    }



    return (
        <>
            <div className={styles.content}>
                {
                    document ? <iframe title="preview" className={styles.preview} srcDoc={document}/>
                        : <div className={styles.loading}>Your code will be displayed here!</div>
                }
            </div>
            <div className={styles.container_title}>
                    <TextField name="title"
                               type="text" value={effectTitle}
                               onChange={event => setEffectTitle(event.target.value)} label="Название" variant="outlined"/>
                    <TextField type="text" name="description"
                               value={effectDescription}
                               onChange={event => setEffectDescription(event.target.value)} label="Описание" variant="outlined"  />
                { checkEffect===false ? (<button className={styles.btn_create} onClick={BtnCreateClick}>Загрузить</button>):
                    (<button className={styles.btn_create} onClick={BtnChangeClick}>Изменить</button>)
                }
                <Popup open={check} closeOnDocumentClick onClose={closeModal}>
                    <div className={styles.modal}>
                        <a className={styles.close} onClick={closeModal}>
                            &times;
                        </a>
                        <div>Укажите название!!!</div>

                    </div>
                </Popup>

                <div>
                    <Autocomplete

                        options={options}
                        onChange={(event, newValue) => {
                            setCombobox(newValue);
                        }}
                        style={{ width: 230 }}
                        renderInput={(params) =>
                            <TextField {...params} label="Тип эффекта" variant="outlined" />}
                    />
                </div>
            </div>

        </>

    );
};

export default Preview;