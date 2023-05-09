import React, {useContext, useEffect} from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/ext-language_tools";
import {EditorContext} from "../context/context";


const JsEditor = ({effect,checkEffect}) => {
    const {js,setJs}=useContext(EditorContext);
    // useEffect(()=>{
    if(checkEffect){
        if(js===""){
            setJs(effect.js);
            checkEffect=false;
        }
    }

    // },[]);
    return (
        <AceEditor
            placeholder='write your JS codes here!'
            mode='javascript'
            name='editor_js'
            value={js}
            onChange={value=>setJs(value)}
            fontSize='16'
            height={'100%'}
            width={'100%'}
            showPrintMargin={false}
            showGutter={false}
            highlightActiveLine={true}

            setOptions={
                {
                    enableBasicAutocompletion:true,
                    enableLiveAutocompletion:true,
                    enableSnippets:true,
                    tabSize:2
                }
            }
        />
    );
};

export default JsEditor;