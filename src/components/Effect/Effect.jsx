import React from 'react';
import styles from './styleEffect.module.css';
import HeartBeatSpinner from "../tests effects/HeartBeatSpinner/HeartBeatSpinner";
import BookSpinner from "../tests effects/BookSpinner/BookSpinner";
import SunSpinner from "../tests effects/SunSpinner/SunSpinner";
import {useNavigate} from "react-router-dom";
import PreviewEffect from "./PreviewEffect";

const Effect = ({id}) => {
    const navigate = useNavigate();
    const ClickEffect=()=>{
        setTimeout(() => {
            navigate(`/repository/${id}`);
        }, 1000);
    }

    return <>
        <div className={styles.container_effects} onClick={ClickEffect}>
            <div className={styles.container}>
                <div className={styles.effect}>
                    {/*<HeartBeatSpinner></HeartBeatSpinner>*/}
                    <PreviewEffect></PreviewEffect>
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