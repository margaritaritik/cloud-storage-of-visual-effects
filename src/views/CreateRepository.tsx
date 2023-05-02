import React, {useContext, useMemo, useState} from 'react';
import Header from '../components/Header/Header';
import CodeEditor from "../components/CodeEditor/CodeMirrorEditor";
import styles from "../styles/stylesRepositoryCreate.module.css";
import {EditorContext} from "../components/CodeEditor/context/context";

const CreateRepository = () => {


     // @ts-ignore
    const {html,css,js}=useContext(EditorContext);
    // const {html,css,js}=useContext(EditorContext);
    const [effectTitle,setEffectTitle]=useState('');
    const [effectDescription,setEffectDescription]=useState('');
    const [effectInfo,setEffectInfo]=useState({});


    const BtnCreateClick=()=>{
      if(effectTitle===""){
          console.log("Name effect ?");
      }
      else{
         // console.log(html);
         // setEffectInfo({name:effectTitle, description:effectDescription,html:,css:,js:,typeeffect_id:3});
      }
    }
    return (
        <>
            <Header></Header>
            <div>
            <div className={styles.container}>
                <div>
                    <CodeEditor></CodeEditor>
                </div>

            </div>
            {/*<div className={styles.container_title}>*/}
            {/*        <label>*/}
            {/*            Имя:*/}
            {/*            <input name="title"*/}
            {/*                   type="text" value={effectTitle}*/}
            {/*                   onChange={event => setEffectTitle(event.target.value)}*/}
            {/*            />*/}
            {/*        </label>*/}

                    {/*<label>*/}
                    {/*    Описание:*/}
                    {/*    <input type="text" name="description"*/}
                    {/*           value={effectDescription}*/}
                    {/*           onChange={event => setEffectDescription(event.target.value)}/>*/}
                    {/*</label>*/}
                    {/*<button className={styles.btn_create} onClick={BtnCreateClick}>Загрузить</button>*/}
            {/*</div>*/}
            </div>

        </>

    );
};

export default CreateRepository;