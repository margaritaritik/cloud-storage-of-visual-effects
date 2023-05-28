import React, {useContext, useEffect, useMemo, useState} from 'react';
import styles from './Preview.module.css';
import Popup from 'reactjs-popup';
import {EditorContext} from "../context/context";
import {API} from "../../../servises/api";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useNavigate} from "react-router-dom";


const Preview = ({checkEffect}) => {
    const navigate = useNavigate();
    const {html,css,js}=useContext(EditorContext);
    const options = ['прелоадер', 'трехмерный эффект', 'типографика',
        'природный эффект'];

    const getStorageData = (keyName, defaultValue) =>{
        const savedItem = localStorage.getItem(keyName);
        // @ts-ignore
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || defaultValue;
    }
    const user=getStorageData('user','no').user;
    const effect=getStorageData('selectedEffect','no');
    const [combobox,setCombobox]=useState("");

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


    // if(checkEffect){
    //     setEffectTitle(effect.name);
    //     setEffectDescription(effect.description);
    // }
    useEffect(()=>{
        if(checkEffect){
            setEffectTitle(effect.name);
            setEffectDescription(effect.description);
            setCombobox(options[effect.typeeffect_id-1]);
        }

    },[]);



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
            const result=await API.user.changeRepository({name:effectTitle,description:effectDescription,html:html,css:css,js:js,typeeffect_id:options.indexOf(combobox)+1,id:effect.id});
            console.log(options.indexOf(combobox)+1);
        }
    }
    const closeModal = () => setCheck(false);
    const deleteRep=async ()=>{
        const deleteRep=await API.user.deleteRepository(effect.id);
        setTimeout(() => {
            navigate("/user");
        }, 1000);
    }

    return (
        <>
            {/*{console.log(options[combobox])}*/}
            <div className={checkEffect ?styles.content:styles.content_rep}>
                {
                    document ? <iframe title="preview" className={styles.preview} srcDoc={document}/>
                        : <div className={styles.loading}>Your code will be displayed here!</div>
                }
            </div>
            <div className={styles.container_title}>
                <div className={styles.container_block}>
                    <div className={styles.container_name}>
                        <TextField name="title"
                                   type="text" value={effectTitle}
                                   onChange={event => setEffectTitle(event.target.value)} label="Название" variant="outlined"/>
                    </div>
                    <div className={styles.container_name}>
                        <TextField type="text" name="description" multiline rows={4}
                                   value={effectDescription}
                                   onChange={event => setEffectDescription(event.target.value)} label="Описание" variant="outlined"  />
                    </div>
                </div>
                <div className={styles.combobox}>
                    { checkEffect ?
                        (<div><Autocomplete

                            options={options}
                            value={combobox}
                            onChange={(event, newValue) => {
                                setCombobox(newValue);
                            }}
                            style={{ width: 230 }}
                            renderInput={(params) =>
                                <TextField {...params} label="Тип эффекта" variant="outlined" />}
                        /></div>):(<div><Autocomplete

                            options={options}
                            onChange={(event, newValue) => {
                                setCombobox(newValue);
                            }}
                            style={{ width: 230 }}
                            renderInput={(params) =>
                                <TextField {...params} label="Тип эффекта 2" variant="outlined" />}
                        /></div>)
                    }
                </div>
                { checkEffect===false ? (<button className={styles.btn_create} onClick={BtnCreateClick}>Загрузить</button>):
                    (<button className={styles.btn_create} onClick={BtnChangeClick}>Изменить</button>)
                }
                {checkEffect && <button style={{width:'80px'}} onClick={deleteRep}>delete</button>
                }

                <Popup open={check} closeOnDocumentClick onClose={closeModal}>
                    <div className={styles.modal}>
                        <a className={styles.close} onClick={closeModal}>
                            &times;
                        </a>

                    </div>
                </Popup>


            </div>

        </>

    );
};

export default Preview;