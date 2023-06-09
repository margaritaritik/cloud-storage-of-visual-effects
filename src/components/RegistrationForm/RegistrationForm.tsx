import React, { FormEvent, useState } from "react";
import styles from "./RegistrationForm.module.css"
import stylesView from "../styles/views/stylesViewsLoginRegistration.module.css";
import TextField from "@material-ui/core/TextField";
import {Button} from "@mui/material";

export type RegistrationFormData = {
    login: string;
    password: string;
}

type FormProps = {
    onSubmit: (data: RegistrationFormData) => void;
}

export default function RegistrationForm({onSubmit}: FormProps) {
    const [login, setLogin] = useState("");
    const [loginError, setLoginError] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const isValid = (): boolean => {
        let result = true;
        setLoginError("");
        // if (!/^([a-z0-9]{6,20})$/.test(login)) {
        //     setLoginError("Логин должен содержать от 6 до 20 символов латинского алфавита и цифры.");
        //     result = false;
        // }

        if (login.length === 0) {
            setLoginError("Логин не может быть пустым!");
            result = false;
        }

        setPasswordError("");
        setRepeatPassword("");
        if (password.length === 0) {
            setPasswordError("Пароль не может быть пустым!");
            result = false;
        }

        if (repeatPassword.length === 0) {
            setPasswordError("Повторите пароль!");
            result = false;
        }

        if(repeatPassword!==password){
            setPasswordError("Пароль и павтор пароля не одинаковые!");
            result = false;
        }

        return result;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isValid()) {
            onSubmit({
                login,
                password
            });
        }
    };

    return <>
        <div className={stylesView.container}>
            <div className={styles.container}>
            <h3>РЕГИСТРАЦИЯ</h3>

            <form onSubmit={handleSubmit}>
                <div className={styles.textField}>
                    <TextField name="title"
                               type="text" value={login}
                               label="логин" variant="outlined" onChange={e => setLogin(e.target.value)}/>
                    {/*<input defaultValue="login" value={login} onChange={e => setLogin(e.target.value)} placeholder="login" autoComplete="off"/>*/}
                    {loginError && <div className={styles.error}> {loginError}
                    </div>}

                </div>
                <div className={styles.textField}>
                    <TextField name="title"
                               type="password" value={password}
                               label="пароль" variant="outlined" onChange={e => setPassword(e.target.value)}/>
                    {/*<input defaultValue="password" type="password" value={password}*/}
                    {/*       onChange={e => setPassword(e.target.value)} placeholder="password" autoComplete="off"/>*/}
                    {passwordError && <div className={styles.error}>
                        {passwordError}
                    </div>}
                    {/*<label className={styles.form_label}>password</label>*/}
                </div>
                <div className={styles.textField}>
                    <TextField name="title"
                               type="password" value={repeatPassword}
                               label="повтор пароля" variant="outlined" onChange={e => setRepeatPassword(e.target.value)}/>
                    {/*<input defaultValue="password" type="password" value={password}*/}
                    {/*       onChange={e => setPassword(e.target.value)} placeholder="password" autoComplete="off"/>*/}
                    {passwordError && <div className={styles.error}>
                        {passwordError}
                    </div>}
                    {/*<label className={styles.form_label}>password</label>*/}
                </div>
                <Button type="submit">Войти</Button>
            </form>
        </div>
        </div>
    </>;
}