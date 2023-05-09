import React from 'react';
import styles from './stylesAvatar.module.css';
import {useNavigate} from "react-router-dom";
import {API} from "../../servises/api";

const Avatar = ({effect}) => {
    const navigate = useNavigate();
    const AvaClick = async () => {
        // const clickAva=()=>{
            console.log(effect);
            const result=await API.user.getAccount(effect.account_id);
            localStorage.setItem('account',JSON.stringify(result));
            navigate("/account");
        // }
    }

    return (
        <div className={styles.container}>
            <img onClick={AvaClick} className={styles.ava} src={`${effect.srcImg}`} alt="ava" />
        </div>
    );
};

export default Avatar;