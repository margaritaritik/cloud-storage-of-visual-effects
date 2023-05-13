import React, {useState, useRef, useContext, useEffect} from 'react';
import Header from '../components/Header/Header';
import styles from '../styles/stylesAccountUser.module.css';
import UploadFile from '../components/UploadFile/UploadPhoto';
import {useNavigate} from "react-router-dom";
import {EditorContext} from "../components/CodeEditor/context/context";
import Typewriter from "typewriter-effect";
import Effect from "../components/Effect/Effect";
import ChangeUser from "../components/ChangeUser/ChangeUser";
import Popup from 'reactjs-popup';
import TextField from "@material-ui/core/TextField";


const AccountUser = () => {
    const navigate = useNavigate();
    const [loginUser,setLoginUser]=useState("");
    const [description,setDescription]=useState("");
    const [name,setName]=useState("");
    const [test,setTest]=useState(true);
    const [show,setShow]=useState(false);
    const [check,setCheck]=useState(false);
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
    }
    useEffect(()=>{
       setLoginUser(login.name);
    },[])

    const createRep=()=>{
            setTimeout(() => {
                navigate(`/createrep`);
            }, 1000);
    }

    const getFiltered = () => {
        let filteredList1 = [...effects];
        return filteredList1;
    }

    useEffect(()=>{
        setDescription(user.description);
        setName(user.name);
         console.log(user.name);
    },[user]);

    const ChangeClick=()=>{
        setCheck(true);
    }
    const closeModal = () => setCheck(false);

    return <div className={check && styles.container_all}>
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
                {/*{show && <ChangeUser active={show} setActive={setShow}/>}*/}

                <Popup open={check} closeOnDocumentClick onClose={closeModal}>
                    <div className={styles.modal}>
                        <a className={styles.close} onClick={closeModal}>
                            &times;
                        </a>
                        <div className={styles.input}>
                            <TextField fullWidth name="title"
                                       type="text" value={loginUser}
                                       onChange={event => setLoginUser(event.target.value)} label="Login" variant="outlined"/>
                        </div>
                        <div className={styles.input}>
                            <TextField fullWidth name="description"
                                       type="text" value={description}
                                       onChange={event => setDescription(event.target.value)} label="Description" variant="outlined"/>
                        </div>



                    </div>
                </Popup>
                <button onClick={ChangeClick}>change</button>
            </div>
            <div className={styles.effects}>
                {/*<UploadFile></UploadFile>*/}
                {/*{effects.account_id===user.id && getFiltered().map(item => }*/}

                {getFiltered().filter(item => item.account_id === user.id).map(filtered => (
                    <Effect effects={filtered}></Effect>)
                )}


            </div>
        </div>
    </div>
};

export default AccountUser;