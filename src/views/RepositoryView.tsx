import React from 'react';
import styles from '../styles/stylesAccountUser.module.css'
import Editor from '../components/CodeEditor/CodeMirrorEditor'
import Header from '../components/Header/Header';

const RepositoryView = () => {


    return (
        <>
            <div className={styles.container}>
                <Header></Header>
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