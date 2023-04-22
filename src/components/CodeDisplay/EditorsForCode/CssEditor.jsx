import React, {useContext} from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-noconflict/ext-language_tools";

import {EditorContext} from "../../CodeEditor/context/context";


const CssEditor = () => {
    const getStorageData = (keyName, defaultValue) =>{
        const savedItem = localStorage.getItem(keyName);
        // @ts-ignore
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || defaultValue;
    }
    const effect=getStorageData('selectedEffect','no');
    return (
        <AceEditor
            placeholder='//CSS code'
            mode='css'
            name='editor_css'
            value={effect.css}
            //onChange={value=>setCss(value)}
            fontSize='16'
            height={'100%'}
            width={'100%'}
            showPrintMargin={false}
            showGutter={false}
            highlightActiveLine={false}
            readOnly={true}

        />
    );
};

export default CssEditor;