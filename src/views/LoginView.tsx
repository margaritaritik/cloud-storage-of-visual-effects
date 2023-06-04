import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { API } from "../servises/api";
import LoginForm, { LoginFormData } from "../components/LoginForm/LoginForm";
import Header from '../components/Header/Header';
import styles from '../components/styles/views/stylesViewsLoginRegistration.module.css'
import Back from '../components/StyleBack/back'


const LoginView = () => {
    const navigate = useNavigate();
    const [result, setResult] = useState("");
    const [error, setError] = useState("");

    const onSubmit = (data: LoginFormData) => {
        const authRequest = async () => {
            setResult("");
            setError("");
            try {
                const token=await API.auth.login(data);
                console.log(token);
                setResult("Пользователь успешно вошел!");
                setTimeout(() => {
                    navigate("/user");
                }, 1000);
            } catch (e) {
                if (e instanceof Error) {
                    setError(e.message);
                }
            }
        };
        authRequest();
    };

    return (
        <div className={styles.container_login}>

            {/*<UploadImage></UploadImage>*/}
            <Back></Back>
            <LoginForm onSubmit={onSubmit}/>
            {result && <>{result}</>}
            {error && <>{error}</>}
        </div>
    );
};

export default LoginView;