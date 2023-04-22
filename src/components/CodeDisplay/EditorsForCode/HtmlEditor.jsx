import React, {useContext} from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/ext-language_tools";
import {EditorContext} from "../../CodeEditor/context/context";


const HtmlEditor = () => {
    const getStorageData = (keyName, defaultValue) =>{
        const savedItem = localStorage.getItem(keyName);
        // @ts-ignore
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || defaultValue;
    }
    const effect=getStorageData('selectedEffect','no');


    return (
        <AceEditor
        placeholder='//HTML code'
        mode='html'
        name='editor_html'
       value={effect.html}
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

export default HtmlEditor;