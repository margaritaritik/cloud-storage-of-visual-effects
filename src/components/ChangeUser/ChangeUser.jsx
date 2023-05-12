import React, {useState} from 'react';
import styles from "./stylesChangeUser.module.css";
import TextField from "@material-ui/core/TextField";

const ChangeUser = ({active,setActive}) => {
    const [login,setLogin]=useState("");
    const [closeOrShow,setCloseOrShow]=useState();

    const Close=()=>{
        setCloseOrShow(false)
    }

    return (
        <>
            {/*<div className={active ? ("styles.modal styles.active"):("styles.modal")} onClick={()=>{setActive(false)}}>*/}
            <div style={active && {transform: 'scale(1)'}} className={styles.modal} onClick={()=>{setActive(false)}}>
                <div className={styles.modal_content} onClick={e=>{e.stopPropagation()}}>
                    <TextField name="title"
                               type="text" value={login}
                               onChange={event => setLogin(event.target.value)} label="Login" variant="outlined"/>
                    <button onClick={Close}>X</button>
                </div>


            </div>




        </>
    );
};

export default ChangeUser;