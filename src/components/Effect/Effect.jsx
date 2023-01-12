import React from 'react';
import styles from './styleEffect.module.css';
import HeartBeatSpinner from "../tests effects/HeartBeatSpinner/HeartBeatSpinner";

const Effect = () => {
    return <>
        <div className={styles.container}>
            <div className={styles.effect}>
                <HeartBeatSpinner></HeartBeatSpinner>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.effect}>
                <HeartBeatSpinner></HeartBeatSpinner>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.effect}>
                <HeartBeatSpinner></HeartBeatSpinner>
            </div>
            <div className={styles.panel}>

            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.effect}>
                <HeartBeatSpinner></HeartBeatSpinner>
            </div>
        </div>
    </>


};

export default Effect;