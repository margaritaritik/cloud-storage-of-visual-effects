import React, {useEffect, useState} from 'react';
import styles from './styleEffect.module.css';
import HeartBeatSpinner from "../tests effects/HeartBeatSpinner/HeartBeatSpinner";
import BookSpinner from "../tests effects/BookSpinner/BookSpinner";
import SunSpinner from "../tests effects/SunSpinner/SunSpinner";
import {useNavigate} from "react-router-dom";
import PreviewEffect from "./PreviewEffect";
import {useParams} from 'react-router-dom';
import Avatar from '../Avatar/Avatar';

const Effect = ({effects,check}) => {
    const navigate = useNavigate();
    const [favorite,setFavorite]=useState(false);
    const getStorageData = (keyName, defaultValue) =>{
        const savedItem = localStorage.getItem(keyName);
        // @ts-ignore
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || defaultValue;
    }
    const user=getStorageData('user','no').user;
    const favoriteRep=getStorageData('like','no')
    const ClickEffect=()=>{
        localStorage.setItem('selectedEffect',JSON.stringify(effects));
        setTimeout(() => {
            navigate(`/repository/${effects.id}`);
        }, 1000);
    }

    const ClickChangeEffect=()=>{
        localStorage.setItem('selectedEffect',JSON.stringify(effects));
        setTimeout(() => {
            navigate(`/changerep`);
        }, 1000);
    }

    const ClickFavorite=()=>{

        let arrFavorite=[...favoriteRep];

        arrFavorite=arrFavorite.filter(employee => {
            return employee.id !== effects.id;
        })
        console.log(arrFavorite);
        localStorage.setItem('like',JSON.stringify(arrFavorite));
        setFavorite(!favorite);

    }
    useEffect(()=>{

    },[])


    return <>
        <div className={styles.container_effects} >
            <div className={styles.container}>
                <div onClick={ClickEffect} className={styles.effect}>
                    {/*<HeartBeatSpinner></HeartBeatSpinner>*/}
                    <PreviewEffect effects={effects} check={check}></PreviewEffect>
                </div>
                <div className={styles.effectInfo}>
                    <Avatar effect={effects}></Avatar>
                    <p className={styles.nameEffect}>{effects.name}</p>
                    {/*<div className={styles.like}>Like</div>*/}
                    {effects.account_id===user.id && <button className={styles.edit} onClick={ClickChangeEffect}>
                        <img src="http://127.0.0.1:9003/image/svg/edit.svg"/>
                    </button>
                    }
                    <button  className={favorite ? styles.edit:styles.editFavorite} onClick={ClickFavorite}>
                        <img src="http://127.0.0.1:9003/image/svg/favorite.svg"/>
                    </button>

                </div>
            </div>

        </div>

    </>


};

export default Effect;