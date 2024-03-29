import React, {useContext, useEffect, useState} from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-noconflict/ext-language_tools";

import {EditorContext} from "../context/context";


const CssEditor = ({effect,checkEffect}) => {
    const {css,setCss}=useContext(EditorContext);
    const [check,setCheck]=useState(checkEffect);
    const effectCssCode=(value)=>{
         setCss(value)
    }
    useEffect(()=>{
        if (check){

            if(css===""){
                setCss(effect.css);
                setCheck(!checkEffect);
            }
        }
    },[])

    return (
        <AceEditor
            placeholder='write your CSS codes here!'
            mode='css'
            name='editor_css'
            value={css}
            onChange={effectCssCode}
            fontSize='16'
            height={'100%'}
            width={'100%'}
            showPrintMargin={false}
            showGutter={false}
            highlightActiveLine={true}

            setOptions={
                {
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    tabSize: 2
                }
            }
        />
    );
};

export default CssEditor;