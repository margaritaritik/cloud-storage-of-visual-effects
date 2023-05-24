import { FormEvent, useState } from "react";
import styles from "../styles/input/stylesloginInput.module.css";
import stylesView from "../styles/views/stylesViewsLoginRegistration.module.css";

export type LoginFormData = {
    login: string;
    password: string;
}

type FormProps = {
    onSubmit: (data: LoginFormData) => void;
}

export default function LoginForm({onSubmit}: FormProps) {
    const [login, setLogin] = useState("");
    const [loginError, setLoginError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const isValid = (): boolean => {
        let result = true;

        // очищаем ошибки
        setLoginError("");

        // if (!/^([a-z0-9]{6,20})$/.test(login)) {
        //     setLoginError("Логин должен содержать от 6 до 20 символов латинского алфавита и цифры.");
        //     result = false;
        // }

        if (login.length === 0) {
            setLoginError("Логин не может быть пустым.");
            result = false;
        }

        setPasswordError("");

        if (password.length === 0) {
            setPasswordError("Пароль не может быть пустым.");
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
            <h3>Авторизация</h3>
            <form onSubmit={handleSubmit}>
                <div className={styles.form_group}>
                    <input defaultValue="login" value={login} onChange={e => setLogin(e.target.value)} placeholder="login" autoComplete="off"/>
                    {loginError && <div className={styles.error}> {loginError}
                    </div>}
                    <label className={styles.form_label}>login</label>
                </div>
                <div className={styles.form_group}>
                    <input defaultValue="password" type="password" value={password}
                           onChange={e => setPassword(e.target.value)} placeholder="password" autoComplete="off"/>
                        {passwordError && <div className={styles.error}>
                        {passwordError}
                    </div>}
                    <label className={styles.form_label}>password</label>
                </div>
                <button type="submit">Войти</button>
            </form>
        </div>
    </>;
}