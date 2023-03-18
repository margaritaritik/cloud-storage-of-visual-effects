import React from 'react';
import {EditorProvider} from "../../context/context";
import CodeBar from "./CodeBar/CodeBar";

const CodeMirrorEditor = () => {
    return (
        // <EditorProvider>
            <CodeBar></CodeBar>
        // </EditorProvider>
    );
};

export default CodeMirrorEditor;