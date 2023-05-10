import React, {useState} from 'react';
import styles from './CodeBar.module.css'
import HtmlEditor from "../Editors/HtmlEditor";
import CssEditor from "../Editors/CssEditor";
import JsEditor from "../Editors/JsEditor";

import HtmlEditorRedactor from "../../CodeDisplay/EditorsForCode/HtmlEditor";
import CssEditorRedactor from "../../CodeDisplay/EditorsForCode/CssEditor";
import JsEditorRedactor from "../../CodeDisplay/EditorsForCode/JsEditor";

const CodeBar = ({redactor,effect,checkEffect}) => {
    const [activeTab,setActivTab]=useState('html');

    return (
        <div className={styles.codebar}>
            <nav className={styles.tab}>
                <button
                    className={`${styles.item} ${activeTab==='html' ? styles.activTab:''}`}
                    onClick={()=>setActivTab('html')}>HTML</button>
                <button className={`${styles.item} ${activeTab==='css' ? styles.activTab:''}`}  onClick={()=>setActivTab('css')}>CSS</button>
                <button className={`${styles.item} ${activeTab==='js' ? styles.activTab:''}`}  onClick={()=>setActivTab('js')}>JS</button>
            </nav>
            <CssEditor effect={effect} checkEffect={checkEffect}/>
            <JsEditor effect={effect} checkEffect={checkEffect}/>

            {redactor ?
                (<div className={styles.editor}>
                    {activeTab==='html' ? <HtmlEditor effect={effect} checkEffect={checkEffect}/>:null}
                    {activeTab==='css' ? <CssEditor effect={effect} checkEffect={checkEffect}/>:null}
                    {activeTab==='js' ? <JsEditor effect={effect} checkEffect={checkEffect}/>:null}
                </div>):(
                    <div className={styles.editor}>
                    {activeTab==='html' ? <HtmlEditorRedactor/>:null}
                    {activeTab==='css' ? <CssEditorRedactor/>:null}
                    {activeTab==='js' ? <JsEditorRedactor/>:null}
                </div>
                )
            }

        </div>
    );
};

export default CodeBar;