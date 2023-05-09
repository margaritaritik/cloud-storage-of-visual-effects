import React, {ReactNode, useEffect, useState} from 'react';
import {API} from "../servises/api";
import Effect from "../components/Effect/Effect";
import Header from "../components/Header/Header";
import { ToastContainer, toast } from 'react-toast';
import PreviewEffect from "../components/Effect/PreviewEffect";
import Search from '../components/Search/Search';

const HomeUser = () => {
    const [searchTitleEffect, setSearchTitleEffect] = useState('');
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
        console.log("hey")
        const userRequest = async () => {
            setLogged(false);
            setResult("");
            setError("");
            try {
                const result=await API.user.getCurrentUser();
                setResult(`Добро пожаловать,${result.user.name}!`);
                customToast(`Добро пожаловать,${result.user.name}!`);
                setAva(`${result.user.srcImg}`);
                setLogged(true);
                const eff=await API.user.getEffects();
                let effects:{id:number,name:string,description:string,typeeffect_id:number,css:string,js:string,html:string,account_id:number,srcImg:string}[]=eff;
                localStorage.setItem('user',JSON.stringify(result));
                localStorage.setItem('effects',JSON.stringify(effects));
                setEffect(effects.map(item => <Effect effects={item}></Effect>));
            } catch (e) {
                if (e instanceof Error) {
                    setError(e.message);
                }
            }
        };
        userRequest();
    }, []);

    const getStorageData = (keyName:string, defaultValue:string) =>{
        const savedItem = localStorage.getItem(keyName);
        // @ts-ignore
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || defaultValue;
    }
    const effects=getStorageData('effects','no');


    const getFiltered = () => {
        let filteredList1 = [...effects];
        if(searchTitleEffect.length>0)
        {
            filteredList1= filteredList1.filter(obj => (obj.name).includes(searchTitleEffect));
        }
        else if(searchTitleEffect.length===0){
            filteredList1= [...effects];
        }
        return filteredList1;

    }

    const searchTitle=(title:string)=>{
        setSearchTitleEffect(title);
    }



    return <div>
        <Header></Header>
            {result && <div>{result}</div>}
            {error && <div>{error}</div>}
        <Search searchTitle={searchTitle}></Search>
        <div>
            <div className="containerItem">
                {getFiltered().map(item => <Effect effects={item}></Effect>)}
            </div>
            {/*{effect  as ReactNode}*/}
        </div>

        {/*<button style={{position:"relative", left:"200px",right:"200px",background:'red',width:"100px",height:"100px"}} >{error}</button>*/}
        <ToastContainer />
    </div>;
};

export default HomeUser;