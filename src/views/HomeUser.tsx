import React, {ReactNode, useEffect, useState} from 'react';
import {API} from "../servises/api";
import Effect from "../components/Effect/Effect";
import Header from "../components/Header/Header";
import { ToastContainer, toast } from 'react-toast';
import PreviewEffect from "../components/Effect/PreviewEffect";

const HomeUser = () => {
    const [result, setResult] = useState("");
    const [error, setError] = useState("");
    const [isLogged, setLogged] = useState(false);
    const [effect,setEffect]=useState<{}[]>();
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


                const eff=await API.user.getEffects();
                let effects:{ id: number, name: string ,description:string,html:string,js:string,typeeffect_id:number,css:string}[]= eff;
                setEffect(effects.map(item => <Effect effects={item}></Effect>));// = effects.map(item => <Effect effects={item}></Effect>)
                console.log(eff);
                console.log(effects);
            } catch (e) {
                if (e instanceof Error) {
                    setError(e.message);
                }
            }
        };
        userRequest();
    }, []);
    console.log(effect);

    return <>
        <Header avaPath={ava}></Header>
            {result && <div>{result}</div>}
            {error && <div>{error}</div>}
        <div>
            {effect as ReactNode}
        </div>

        {/*<button style={{position:"relative", left:"200px",right:"200px",background:'red',width:"100px",height:"100px"}} >{error}</button>*/}
        <ToastContainer />
    </>;
};

export default HomeUser;