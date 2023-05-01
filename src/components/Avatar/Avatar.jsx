import React from 'react';
import styles from './stylesAvatar.module.css';
import {useNavigate} from "react-router-dom";

const Avatar = ({srcImg}) => {
    const navigate = useNavigate();
    const AvaClick = () => {
        // const clickAva=()=>{
            navigate("/account");
        // }
    }
    return (
        <div className={styles.container}>
            <img onClick={AvaClick} className={styles.ava} src={`${srcImg}`} alt="ava" />
        </div>
    );
};

export default Avatar;