import React, { useEffect, useState } from 'react';
import { API } from "../servises/api";

function Home() {
    const [result, setResult] = useState("");
    const [error, setError] = useState("");
    const [isLogged, setLogged] = useState(false);

    useEffect(() => {
        const userRequest = async () => {
            setLogged(false);
            setResult("");
            setError("");
            try {
                const user = await API.user.getCurrentUser();
                setResult(`Добро пожаловать, ${user.name}!`);
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
        {result && <div>{result}</div>}
        {error && <div>{error}</div>}
    </>;
}

export default Home;