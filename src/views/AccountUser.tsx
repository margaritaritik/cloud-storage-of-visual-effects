import React, {useState, useRef, useContext, useEffect} from 'react';
import Header from '../components/Header/Header';
import styles from '../styles/stylesAccountUser.module.css';
import UploadFile from '../components/UploadFile/UploadPhoto';
import {useNavigate} from "react-router-dom";
import {EditorContext} from "../components/CodeEditor/context/context";
import Typewriter from "typewriter-effect";
import Effect from "../components/Effect/Effect";


const AccountUser = () => {
    const navigate = useNavigate();
    const [description,setDescription]=useState("");
    const [name,setName]=useState("");
    const [test,setTest]=useState(true);
    const getStorageData = (keyName:string, defaultValue:string) =>{
        const savedItem = localStorage.getItem(keyName);
        // @ts-ignore
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || defaultValue;
    }
    const user=getStorageData('account','no');
    const login=getStorageData('user','no').user;
    const effects=getStorageData('effects','no');
    if(user.id===login.id){
        localStorage.setItem('account',JSON.stringify(login));
        // window.location.reload();
    }



    const createRep=()=>{
            setTimeout(() => {
                navigate(`/createrep`);
            }, 1000);
    }

    const getFiltered = () => {
        let filteredList1 = [...effects];
        return filteredList1;
    }

    // useEffect(()=>{
    //     setDescription(user.description);
    //      setName(user.name);
    //     // console.log(user.name);
    //
    // },[]);
    useEffect(()=>{
        setDescription(user.description);
        setName(user.name);
         console.log(user.name);
        // window.location.reload();
        // return;

    },[user]);

    return <>
        <Header></Header>
        {/*<UploadFile ></UploadFile>*/}
        <div className={styles.container}>
            <div className={styles.container_user}>
                <img src={user.srcImg} alt="" className={styles.ava}/>
                {test &&
                    <div className={styles.user_info}>
                        {/*{user.description}*/}
                        <Typewriter
                            onInit={(typewriter)=> {
                                typewriter
                                    .typeString("Welcomes You")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString(`${name}`)
                                    .start();
                            }}
                        />
                    </div>
                }

                <div className={styles.account_info}>
                    <div className={styles.description}>
                        <Typewriter
                            onInit={(typewriter)=> {
                                typewriter
                                    .typeString("Description")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString(`${description}`)
                                    .start();
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.effects}>
                {/*<UploadFile></UploadFile>*/}
                {/*{effects.account_id===user.id && getFiltered().map(item => }*/}

                {getFiltered().filter(item => item.account_id === user.id).map(filtered => (
                    <Effect effects={filtered}></Effect>)
                )}


            </div>
        </div>
    </>
};

export default AccountUser;