import React, {useState} from 'react';
import styles from "./stylesChangeUser.module.css";
import TextField from "@material-ui/core/TextField";

const ChangeUser = ({active,setActive}) => {
    const [login,setLogin]=useState("");
    const [closeOrShow,setCloseOrShow]=useState();

   return (
        <>

            <div className={active ? (styles.modal):(styles.active)} onClick={()=>{setActive(false)}}>
                <div className={styles.modal_content} onClick={e=>{e.stopPropagation()}}>
                    <TextField name="title"
                               type="text" value={login}
                               onChange={event => setLogin(event.target.value)} label="Login" variant="outlined"/>

                </div>


            </div>




        </>
    );
};

export default ChangeUser;