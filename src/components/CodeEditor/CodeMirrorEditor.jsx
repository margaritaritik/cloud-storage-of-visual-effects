import React from 'react';
import {EditorProvider} from "../../context/context";
import CodeBar from "./CodeBar/CodeBar";
import styles from './stylesCodeEditor.module.css';

const CodeMirrorEditor = () => {
    return (
         <EditorProvider>
            <CodeBar></CodeBar>
             <div className={styles.main}>

             </div>
         </EditorProvider>
    );
};

export default CodeMirrorEditor;