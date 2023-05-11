import React, {useState} from 'react';
import styles from './stylesAvatar.module.css';
import {useNavigate} from "react-router-dom";
import {API} from "../../servises/api";
import {width} from "@mui/system";

const Avatar = ({effect,user}) => {
    const navigate = useNavigate();
    const [test,setTest]=useState();
    const AvaClick = async () => {
       if(user){
            const result=await API.user.getAccount(effect.id);
            localStorage.setItem('account',JSON.stringify(result));


        }
        else{
            const result=await API.user.getAccount(effect.account_id);
            localStorage.setItem('account',JSON.stringify(result));

        }
        setTest("dadadad");
            navigate("/account");

    }

    return (
        <div className={styles.container}>
            {user ? (<img style={{width:'80px'}} onClick={AvaClick} className={styles.ava} src={`${effect.srcImg}`} alt="ava" />)
                :(<img style={{width:'50px',height:'50px'}} onClick={AvaClick} className={styles.ava} src={`${effect.srcImg}`} alt="ava" />)}

        </div>
    );
};

export default Avatar;