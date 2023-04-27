import React from 'react';
import {EditorProvider} from "./context/context";
import CodeBar from "./CodeBar/CodeBar";
import styles from './stylesCodeEditor.module.css';
import Preview from "./Preview/Preview";

const CodeMirrorEditor = () => {

    return (
         <EditorProvider>
             <div className={styles.editorProvider}>
                 <div>
                     <CodeBar redactor={true}></CodeBar>
                 </div>
                 <div>
                     <Preview></Preview>
                 </div>

             </div>

         </EditorProvider>
    );
};

export default CodeMirrorEditor;