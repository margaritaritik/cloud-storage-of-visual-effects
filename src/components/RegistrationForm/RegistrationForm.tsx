import { FormEvent, useState } from "react";
import styles from "../styles/input/stylesloginInput.module.css"

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
    const [passwordError, setPasswordError] = useState("");

    const isValid = (): boolean => {
        let result = true;

        // очищаем ошибки
        setLoginError("");

        if (!/^([a-z0-9]{6,20})$/.test(login)) {
            setLoginError("Логин должен содержать от 6 до 20 символов латинского алфавита и цифры.");
            result = false;
        }

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
        <h3>Регистрация</h3>
        <form onSubmit={handleSubmit}>
            <div className={styles.form_group}>
                <input value={login} onChange={e => setLogin(e.target.value)} placeholder="login"/>
                <label className={styles.form_label}>login</label>
            </div>
            <div className={styles.form_group}>
                <input  type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="password"/>
                {passwordError && <div className={styles.error}>
                    {passwordError}
                </div>}
                <label className={styles.form_label}>password</label>
            </div>
            <button type="submit">Войти</button>
        </form>
    </>;
}