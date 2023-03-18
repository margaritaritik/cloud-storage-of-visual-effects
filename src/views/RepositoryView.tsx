import React from 'react';
import styles from '../styles/stylesAccountUser.module.css'
import Editor from '../components/CodeEditor/CodeMirrorEditor'

const RepositoryView = () => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.effect}>

                </div>
                <div className={styles.code}>
                    <Editor></Editor>
                </div>
                <div className={styles.comments}>

                </div>
            </div>
        </>
    );
};

export default RepositoryView;