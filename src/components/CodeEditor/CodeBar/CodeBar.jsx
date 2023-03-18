import React, {useState} from 'react';
import styles from './CodeBar.module.css'
import HtmlEditor from "../Editors/HtmlEditor";
import CssEditor from "../Editors/CssEditor";

const CodeBar = () => {
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
            <div className={styles.editor}>
                {activeTab==='html' ? <HtmlEditor/>:null}
                {activeTab==='css' ? <CssEditor/>:null}
                {activeTab==='js' ? <div>JS</div>:null}
            </div>
        </div>
    );
};

export default CodeBar;