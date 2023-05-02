import React from 'react';
import styles from './styleEffect.module.css';
import HeartBeatSpinner from "../tests effects/HeartBeatSpinner/HeartBeatSpinner";
import BookSpinner from "../tests effects/BookSpinner/BookSpinner";
import SunSpinner from "../tests effects/SunSpinner/SunSpinner";
import {useNavigate} from "react-router-dom";
import PreviewEffect from "./PreviewEffect";
import {useParams} from 'react-router-dom';
import Avatar from '../Avatar/Avatar';

const Effect = ({effects}) => {
    const navigate = useNavigate();
    const ClickEffect=()=>{
        localStorage.setItem('selectedEffect',JSON.stringify(effects));
        setTimeout(() => {
            navigate(`/repository/${effects.id}`);
        }, 1000);
    }

    return <>
        <div className={styles.container_effects} >
            <div className={styles.container}>
                <div onClick={ClickEffect} className={styles.effect}>
                    {/*<HeartBeatSpinner></HeartBeatSpinner>*/}
                    <PreviewEffect effects={effects}></PreviewEffect>
                </div>
                <div className={styles.effectInfo}>
                    <Avatar effect={effects}></Avatar>
                    {/*<img className={styles.ava} src={`${effects.srcImg}`} alt="ava" />*/}
                    <p className={styles.nameEffect}>{effects.name}</p>
                    <div className={styles.like}>Like</div>
                </div>
            </div>

        </div>

    </>


};

export default Effect;