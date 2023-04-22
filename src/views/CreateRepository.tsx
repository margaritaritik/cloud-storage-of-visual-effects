import React from 'react';
import Header from '../components/Header/Header';
import CodeEditor from "../components/CodeEditor/CodeMirrorEditor";
import styles from "../styles/stylesRepositoryCreate.module.css";

const CreateRepository = () => {
    return (
        <>
            <Header></Header>
            <div className={styles.container}>
                <div>
                    <CodeEditor></CodeEditor>
                </div>
            </div>
        </>

    );
};

export default CreateRepository;