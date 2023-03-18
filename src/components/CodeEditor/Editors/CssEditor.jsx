import React, {useContext} from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-noconflict/ext-language_tools";

import {EditorContext} from "../../../context/context";


const CssEditor = () => {

    const [css,setCss]=useContext(EditorContext);
    return (
        <AceEditor
            placeholder='write your CSS codes here!'
            mode='css'
            name='editor_css'
            value={css}
            onChange={value=>setCss(value)}
            fontSize='16'
            height={'100%'}
            width={'100%'}
            showPrintMargin={true}
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

export default CssEditor;