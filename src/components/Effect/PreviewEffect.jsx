import React, {useMemo} from 'react';

import styles from "./styleEffect.module.css";
import {useNavigate} from "react-router-dom";

const PreviewEffect = ({effects,check}) => {
    const navigate = useNavigate();
    const html=effects.html;
    const css=effects.css;
    const js=effects.js;
    const ClickEffect=()=>{
        console.log("dada");
        localStorage.setItem('selectedEffect',JSON.stringify(effects));
        setTimeout(() => {
            navigate(`/repository/${effects.id}`);
        }, 1000);
    }
    const document=useMemo(()=> {
        if(!html && !css && !js) return;
        return`<!doctype html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <style>
           ${css}
            </style>    
         </head>
            <body>
                ${html}
                <script>
                    ${js}
                </script>
            </body>
        </html>`
    },[html,css,js])
    return (
        <div>
            <div className={check ? styles.content:styles.content_check} >
                {
                    document ? <iframe title="preview" className={styles.preview} srcDoc={document} onClick={ClickEffect} scrolling="no" />
                        : <div className={styles.loading}>Your code will be displayed here!</div>
                }
            </div>
        </div>
    );
};

export default PreviewEffect;