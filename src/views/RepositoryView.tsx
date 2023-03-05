import React from 'react';
import styles from '../styles/repository.module.css'

const RepositoryView = () => {
    const tabs = ['HTML', 'CSS', 'JS']
    

    return (
        <>
            <div className={styles.container}>
                <div className={styles.effect}>

                </div>
                <div className={styles.code}>

                </div>
                <div className={styles.comments}>

                </div>
            </div>
        </>
    );
};

export default RepositoryView;