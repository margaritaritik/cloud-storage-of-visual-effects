import React, {useMemo} from 'react';

import styles from "./styleEffect.module.css";

const PreviewEffect = () => {
    const html='<h1>Hello preview!</h1>';
    const css="h1{color:red;}";
    const js="";
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
        <>
            <div className={styles.content}>
                {
                    document ? <iframe title="preview" className={styles.preview} srcDoc={document}/>
                        : <div className={styles.loading}>Your code will be displayed here!</div>
                }
            </div>
        </>
    );
};

export default PreviewEffect;