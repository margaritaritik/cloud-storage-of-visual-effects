import React, {useMemo} from 'react';
import styles from '../styles/stylesAccountUser.module.css'

import Header from '../components/Header/Header';
import PreviewEffect from "../components/Effect/PreviewEffect";

const RepositoryView = () => {
    const getStorageData = (keyName:string, defaultValue:string) =>{
        const savedItem = localStorage.getItem(keyName);
        // @ts-ignore
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || defaultValue;
    }
    const effect=getStorageData('selectedEffect','no');


    return (
        <>
            <div className={styles.container}>
                <Header></Header>
                <div className={styles.effect}>
                    <PreviewEffect effects={effect}></PreviewEffect>
                </div>
                <div className={styles.code}>
                     {/*<Editor></Editor>*/}
                </div>
                <div className={styles.comments}>

                </div>
            </div>
        </>
    );
};

export default RepositoryView;