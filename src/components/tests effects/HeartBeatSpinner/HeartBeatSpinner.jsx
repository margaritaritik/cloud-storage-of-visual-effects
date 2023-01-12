import React from 'react';
import styles from "./stylesHeartBeatSpinner.module.css";

const HeartBeatSpinner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heart}></div>
        </div>
    );
};

export default HeartBeatSpinner;