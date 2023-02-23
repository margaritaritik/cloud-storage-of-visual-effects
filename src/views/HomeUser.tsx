import React, {useEffect, useState} from 'react';
import {API} from "../servises/api";
import Effect from "../components/Effect/Effect";
import Header from "../components/Header/Header"

const HomeUser = () => {
    const [result, setResult] = useState("");
    const [error, setError] = useState("");
    const [isLogged, setLogged] = useState(false);

    useEffect(() => {
        const userRequest = async () => {
            setLogged(false);
            setResult("");
            setError("");
            try {
                const result=await API.user.getCurrentUser();
                console.log(result);
                setResult(`Добро пожаловать,${result.user.name}!`);
                setLogged(true);
            } catch (e) {
                if (e instanceof Error) {
                    setError(e.message);
                }
            }
        };
        userRequest();
    }, []);

    return <>
        <Header></Header>
        {result && <div>{result}</div>}
        {error && <div>{error}</div>}
        <Effect></Effect>
    </>;
};

export default HomeUser;