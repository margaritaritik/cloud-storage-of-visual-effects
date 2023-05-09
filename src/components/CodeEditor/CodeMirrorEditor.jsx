import React from 'react';
import {EditorProvider} from "./context/context";
import CodeBar from "./CodeBar/CodeBar";
import styles from './stylesCodeEditor.module.css';
import Preview from "./Preview/Preview";

const CodeMirrorEditor = ({check}) => {
    const getStorageData = (keyName, defaultValue) =>{
        const savedItem = localStorage.getItem(keyName);
        // @ts-ignore
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || defaultValue;
    }
    const effect=getStorageData('selectedEffect','no');
    return (
         <EditorProvider>
             <div className={styles.editorProvider}>
                 <div>
                     <CodeBar redactor={true} effect={effect}></CodeBar>
                 </div>
                 <div>
                     <Preview checkEffect={check}></Preview>
                 </div>

             </div>

         </EditorProvider>
    );
};

export default CodeMirrorEditor;