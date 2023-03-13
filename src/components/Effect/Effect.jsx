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
                <div className={styles.effectInfo}>
                    <img className={styles.ava} src={`http://127.0.0.1:9003/image/ImagesForClient/avatar.svg`} alt="ava" />
                    <p className={styles.nameEffect}>Визуальный эффект!</p>
                    <div className={styles.like}>Like</div>
                </div>
            </div>

        </div>

    </>


};

export default Effect;