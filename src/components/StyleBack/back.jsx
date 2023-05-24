import React from 'react';
import styles from './stylesBack.module.css'
import image from "../../imagesTest/imageMain.png";

const Back = () => {
    function randomNumberInRange() {
        // 👇️ get number between min (inclusive) and max (inclusive)
        return `${Math.floor(Math.random() * (100 - 0 + 1)) + 0}%`;
    }
    return (
        <div className={styles.container}>
            {/*<img src='http://127.0.0.1:9003/image/LoginImg/img.jpg'/>*/}

            {/*<div className={styles.starfall}>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}

            {/*</div>*/}
        </div>
    );
};

export default Back;