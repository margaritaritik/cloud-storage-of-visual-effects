import React, {useEffect, useState} from 'react';
import styles from './stylesMenu.module.css';
import UploadPhoto from "../UploadFile/UploadPhoto";
import TextField from "@material-ui/core/TextField";
import Popup from "reactjs-popup";
import {Button, Checkbox} from "@mui/material";
import {useNavigate} from "react-router-dom";


const Menu = () => {
    const navigate = useNavigate();
    const [check,setCheck]=useState(false);
    const [changeInfo,setChangeInfo]=useState(false);
    const MenuClick=()=>{
        setCheck(true);
    }
    const [options,setOptions] = useState({filter1:false, filter2:false, filter3:false,
        filter4:false});

    const closeModal = () => setCheck(false);
    const clickCreateRep=()=>{
        navigate("/createrep");
    }
    const clickChange=()=>{
        navigate("/changeInfo");
    }
    const clickLike=()=>{
        navigate("/like");
    }
    const clickOut=()=>{
        navigate("/");

    }

    return (
        <div className={styles.container}>
            <button className={styles.menu_btn} onClick={MenuClick}>
                {<div> </div>}
            </button>
            <div className={styles.container_modal}>
                <Popup open={check} closeOnDocumentClick onClose={closeModal}>
                    <div className={check ? styles.modal:styles.close}>
                        <ul className="menu">
                            <div className={styles.check}>
                                <Button onClick={clickCreateRep}>Создать</Button>
                            </div>
                            <div className={styles.check}>
                                <Button onClick={clickChange}>Изменить данные</Button>
                            </div>
                            <div className={styles.check}>
                                <Button onClick={clickLike}>Избранное</Button>
                            </div>
                            <div className={styles.check}>
                                <Button onClick={clickOut}>Выйти</Button>
                            </div>
                        </ul>
                    </div>
                </Popup>
            </div>

        </div>
    );
};

export default Menu;