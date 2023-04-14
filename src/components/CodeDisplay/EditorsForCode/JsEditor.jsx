import React, {useContext} from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/ext-language_tools";
import {EditorContext} from "../../CodeEditor/context/context";


const JsEditor = () => {
    const getStorageData = (keyName, defaultValue) =>{
        const savedItem = localStorage.getItem(keyName);
        // @ts-ignore
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || defaultValue;
    }
    const effect=getStorageData('selectedEffect','no');
    return (
        <AceEditor
            placeholder='write your JS codes here!'
            mode='javascript'
            name='editor_js'
            value={effect.js}
            fontSize='16'
            height={'100%'}
            width={'100%'}
            showPrintMargin={false}
            showGutter={false}
            highlightActiveLine={true}
            readOnly={true}
        />
    );
};

export default JsEditor;