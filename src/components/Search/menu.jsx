import React, {useState} from 'react';
import styles from './stylesMenu.module.css';
import UploadPhoto from "../UploadFile/UploadPhoto";
import TextField from "@material-ui/core/TextField";
import Popup from "reactjs-popup";
import {Button, Checkbox} from "@mui/material";


const Menu = () => {
    const [check,setCheck]=useState(false);
    const MenuClick=()=>{
        setCheck(true);
    }
    const options = ['прелоадер', 'трехмерный эффект', 'типографика',
        'природный эффект'];
    const closeModal = () => setCheck(false);
    return (
        <div className={styles.container}>
            <button className={styles.menu_btn} onClick={MenuClick}>
                {<div> </div>}
            </button>
            <div className={styles.container_modal}>
                <Popup open={check} closeOnDocumentClick onClose={closeModal}>
                    <div className={check ? styles.modal:styles.close}>
                        {/*<a onClick={closeModal}>*/}
                        {/*    &times;*/}
                        {/*</a>*/}
                        <ul className="menu">
                            <div className={styles.check}>
                                <label>
                                    <Checkbox
                                        // value={"ghbjj"}
                                        // onChange={handleChangeTwo}
                                    />
                                    прелоадер
                                </label>
                            </div>
                            <div className={styles.check}>
                                <label>
                                    <Checkbox
                                        // value={"ghbjj"}
                                        // onChange={handleChangeTwo}
                                    />
                                    трехмерный эффект
                                </label>
                            </div>
                            <div className={styles.check}>
                                <label>
                                    <Checkbox
                                        // value={"ghbjj"}
                                        // onChange={handleChangeTwo}
                                    />
                                    типографика
                                </label>
                            </div>
                            <div className={styles.check}>
                                <label>
                                    <Checkbox
                                        // value={"ghbjj"}
                                        // onChange={handleChangeTwo}
                                    />
                                    природный эффект
                                </label>
                            </div>
                            <Button>применить фильтр</Button>
                        </ul>
                    </div>
                </Popup>
            </div>

        </div>
    );
};

export default Menu;