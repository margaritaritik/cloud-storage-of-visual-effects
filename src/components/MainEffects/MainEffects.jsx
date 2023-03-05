import React from 'react';
import image from '../../imagesTest/imageMain.png'
import styles from './stylesMainEffects.module.css'

const MainEffects = () => {
    return (
        <div className={styles.container}>
            <img src={image}/>
        </div>
    );
};

export default MainEffects;