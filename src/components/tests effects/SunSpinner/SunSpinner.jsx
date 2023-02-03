import React from 'react';
import styles from './stylesSunSpinner.module.css'

const SunSpinner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.suncontainer}>
                <div className={styles.sunrise}></div>
                <li className={styles.rise}></li>
                <li className={styles.rise}></li>
                <li className={styles.rise}></li>
                <li className={styles.rise}></li>
                <li className={styles.rise}></li>
                <li className={styles.rise} ></li>
                <li className={styles.rise}></li>
                <li className={styles.rise}></li>
            </div>

        </div>
    );
};

export default SunSpinner;