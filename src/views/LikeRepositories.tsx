import React, {DOMElement, ReactChild, ReactDOM, useEffect, useState} from 'react';
import Header from "../components/Header/Header";
import Effect from "../components/Effect/Effect";
import styles from '../styles/stylesLikeRep.module.css'
import {API} from "../servises/api";
import {DomEvent} from "react-codemirror2";
import Typewriter from "typewriter-effect";

const LikeRepositories = () => {
    const [effect,setEffect]=useState<{}>({})
    const getStorageData = (keyName:string, defaultValue:string) =>{
        const savedItem = localStorage.getItem(keyName);
        // @ts-ignore
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || defaultValue;
    }
    const effects=getStorageData('like','no');
    const getEffects=()=>{
        // @ts-ignore
        let arrEffect;
        if(effects.length!==0){
            // @ts-ignore
            arrEffect=effects.map(item => <Effect effects={item} check={true}></Effect>);
        }else{
            arrEffect=<div className={styles.noEffect}>
                <Typewriter
                onInit={(typewriter)=> {
                    typewriter
                        .typeString(`НЕТ ЭФФЕКТОВ!!!`)
                        .start();
                }}
            /></div>;

        }
        return arrEffect;
    }
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    // @ts-ignore
    return (
        <div>
            <Header></Header>
            <div className={styles.title}>ИЗБРАННОЕ</div>
            <div className={styles.container}>
                {getEffects()}
            </div>
        </div>
    );
};

export default LikeRepositories;