import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { API } from "../servises/api";
import LoginForm, { LoginFormData } from "../components/LoginForm/LoginForm";
import UploadImage from '../components/UploadFile/UploadImage';
import Cookies from 'universal-cookie';

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
               // const cookies = new Cookies();
               // console.log(token);
             //   cookies.set('token', token, { path: '/' });
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
        <div>
            {/*<UploadImage></UploadImage>*/}
            <LoginForm onSubmit={onSubmit}/>
            {result && <>{result}</>}
            {error && <>{error}</>}
        </div>
    );
};

export default LoginView;