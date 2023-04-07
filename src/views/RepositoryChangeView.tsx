import React from 'react';
import styles from "../styles/stylesAccountUser.module.css";
import Header from "../components/Header/Header";
import PreviewEffect from "../components/Effect/PreviewEffect";
import Editor from '../components/CodeEditor/CodeMirrorEditor'

const RepositoryChangeView = () => {
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

export default RepositoryChangeView;