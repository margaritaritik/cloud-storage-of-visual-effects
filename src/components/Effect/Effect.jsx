import React from 'react';
import styles from './styleEffect.module.css';
import HeartBeatSpinner from "../tests effects/HeartBeatSpinner/HeartBeatSpinner";
import BookSpinner from "../tests effects/BookSpinner/BookSpinner";
import SunSpinner from "../tests effects/SunSpinner/SunSpinner";

const Effect = () => {
    return <>
        <div className={styles.container_effects}>
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
            </div>
            <div className={styles.container}>
                <div className={styles.effect}>
                    <SunSpinner></SunSpinner>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.effect}>
                    <BookSpinner></BookSpinner>
                </div>
            </div>
        </div>

    </>


};

export default Effect;