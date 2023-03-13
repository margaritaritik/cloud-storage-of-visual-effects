import React, {useEffect, useState} from 'react';
import {API} from "../servises/api";
import Effect from "../components/Effect/Effect";
import Header from "../components/Header/Header";
import { ToastContainer, toast } from 'react-toast';

const HomeUser = () => {
    const [result, setResult] = useState("");
    const [error, setError] = useState("");
    const [isLogged, setLogged] = useState(false);
    const [ava,setAva]=useState("http://127.0.0.1:9003/image/avatar.svg");
    const customToast = (mass:string) =>
        toast(mass, {
            backgroundColor: '#8329C5',
            color: '#ffffff',
        })
    useEffect(() => {
        const userRequest = async () => {
            setLogged(false);
            setResult("");
            setError("");
            try {
                const result=await API.user.getCurrentUser();
                console.log(result);
                setResult(`Добро пожаловать,${result.user.name}!`);
                customToast(`Добро пожаловать,${result.user.name}!`);
                setAva(`${result.user.srcImg}`);
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
        <Header avaPath={ava}></Header>
            {result && <div>{result}</div>}
            {error && <div>{error}</div>}
        <Effect></Effect>
        {/*<button style={{position:"relative", left:"200px",right:"200px",background:'red',width:"100px",height:"100px"}} >{error}</button>*/}
        <ToastContainer />
    </>;
};

export default HomeUser;