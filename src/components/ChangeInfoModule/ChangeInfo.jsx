import React from 'react';
import styles from "./stylesCahngeInfo.module.css";
import UploadPhoto from "../UploadFile/UploadPhoto";
import TextField from "@material-ui/core/TextField";
import {Button} from "@mui/material";
import Popup from "reactjs-popup";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {API} from "../../servises/api";

const ChangeInfo = (checkInfo) => {
    const navigate = useNavigate();
    const [loginUser,setLoginUser]=useState("");
    const [description,setDescription]=useState("");
    const [pass,setPass]=useState("");
    const [oldPass,setOldPass]=useState("");
    const [passwordError,setPasswordError]=useState("");
    const [loginError,setLoginError]=useState("");
    const [repeatPassword,setRepeatPassword]=useState("");
    const [passTwo,setPassTwo]=useState("");

    const [name,setName]=useState("");
    const [test,setTest]=useState(true);
    const [account,setAccount]=useState(false);
    const [check,setCheck]=useState(checkInfo);
    const [changePass,setChangePass]=useState(false);
    const getStorageData = (keyName, defaultValue) =>{
        const savedItem = localStorage.getItem(keyName);
        // @ts-ignore
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || defaultValue;
    }
    const user=getStorageData('account','no');
    const login=getStorageData('user','no').user;
    const effects=getStorageData('effects','no');

    useEffect(()=>{
        setLoginUser(login.name);
        setDescription(login.description);
        if(user.id===login.id){
            localStorage.setItem('account',JSON.stringify(login));
            setAccount(true);
        }
    },[])

    useEffect(()=>{
        // setDescription(user.description);
        setName(user.name);
        console.log(user.name);
    },[user]);

    const closeModal = () => {
        setCheck(false);
        navigate("/user");
    }
    const ChangePassBtn = () => {
        setChangePass(true);
    }
    const isValid = ()=> {
        let result = true;

        setPasswordError("");
        setRepeatPassword("");
        if (pass.length === 0) {
            setPasswordError("Пароль не может быть пустым!");
            result = false;
        }

        if (repeatPassword.length === 0 && pass.length!==0) {
            setPasswordError("Повторите пароль!");
            result = false;
        }

        if(repeatPassword!==pass){
            setPasswordError("Пароль и павтор пароля не одинаковые!");
            result = false;
        }

        return result;
    };
    const ChangePass = async () => {

        setChangePass(true);
        if (isValid()){
            const result=await  API.user.changePass({password:oldPass,new_password:passTwo,id:login.id,login:login.name});
            console.log(result);
            navigate('/user');
        }


    }
    const ChangeLogin = async () => {
        if(loginUser!==""){
            const result=await  API.user.changeLogin({login:loginUser,id:login.id});
            console.log(result.message)
            if(result.message==="Пользователь уже есть с таким логином!"){
                setLoginError(result.message);
            }
            else{
                navigate('/user');
            }
        }
        else{
            setLoginError("Логин не может быть бустым");
            setLoginUser(login.name);
        }
    }
    const ChangeDescription = async () => {
        const result=await  API.user.changeDescription({description:description,id:login.id});
        navigate('/user');
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        setCheck(true);
    }, [])
    return (
        <div>
            <Popup open={check} closeOnDocumentClick onClose={closeModal}>
                <div className={styles.modal}>
                    <div className={styles.upload}>
                        <UploadPhoto></UploadPhoto>
                    </div>
                    <div>
                    <div className={styles.input_title}>
                        <TextField fullWidth name="title" inputProps={{className:styles.textField}}
                                   type="text" value={loginUser}
                                   onChange={event => setLoginUser(event.target.value)} label="логин" variant="outlined"/>
                        <Button onClick={ChangeLogin}>Изменить</Button>
                    </div>
                    <div className={styles.input_desc}>
                        <TextField fullWidth name="description" multiline rows={4}
                                   type="text" value={description}
                                   onChange={event => setDescription(event.target.value)} label="описание" variant="outlined"/>
                        <Button onClick={ChangeDescription}>Изменить описание</Button>
                    </div>
                    </div>

                    {!changePass && <Button className={styles.input_pass_change}  onClick={ChangePassBtn}>Изменить пароль</Button>}
                    {changePass && <div >
                        <div className={styles.input_old_pass}>
                            <TextField fullWidth name="pass"
                                       value={oldPass}
                                       type="password"
                                       autoComplete="current-password"
                                       onChange={event => setOldPass(event.target.value)} label="введите старый пароль" variant="outlined"/>

                        </div>
                        <div className={styles.input_pass}>
                            <TextField fullWidth name="pass"
                                       value={pass}
                                       type="password"
                                       autoComplete="current-password"
                                       onChange={event => setPass(event.target.value)} label="введите новый пароль" variant="outlined"/>

                        </div>
                        <div className={styles.input_pass_two}>
                            <TextField fullWidth name="passtwo"
                                       type="password"
                                       autoComplete="current-password"
                                       value={passTwo}
                                       onChange={event => setPassTwo(event.target.value)} label="повторите новый пароль" variant="outlined"/>
                            <Button onClick={ChangePass}>Изменить</Button>
                        </div>

                        {isValid && <div className={styles.error}><div className>{passwordError}</div> <div>{repeatPassword}</div></div>}

                    </div>
                    }
                    {loginError!=="" && <div className={styles.error}><div className>{loginError}</div> </div>}
                </div>
            </Popup>
        </div>
    );
};

export default ChangeInfo;