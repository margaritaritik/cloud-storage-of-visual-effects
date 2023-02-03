import React from 'react';
import styles from './stylesBookSpinner.module.css';

const BookSpinner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.page}></div>
            <div className={styles.page}></div>
            <div className={styles.page}></div>
            <div className={styles.page}></div>
            <div className={styles.page}></div>
            <div className={styles.page}></div>

            <div className={styles.binder}></div>

        </div>
    );
};

export default BookSpinner;