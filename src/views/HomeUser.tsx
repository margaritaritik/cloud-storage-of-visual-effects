import React, {ReactNode, useEffect, useState} from 'react';
import {API} from "../servises/api";
import Effect from "../components/Effect/Effect";
import Header from "../components/Header/Header";
import { ToastContainer, toast } from 'react-toast';
import PreviewEffect from "../components/Effect/PreviewEffect";
import Search from '../components/Search/Search';
import Menu from "../components/Menu/Menu";
import styles from '../styles/stylesHomeEffects.module.css';

const HomeUser = () => {
    const [searchTitleEffect, setSearchTitleEffect] = useState('');
    const [result, setResult] = useState("");
    const [error, setError] = useState("");
    const [isLogged, setLogged] = useState(false);
    const [effect,setEffect]=useState<{}[]>();
    const [ava,setAva]=useState("http://127.0.0.1:9003/image/avatar.svg");
    const [filtered,setFiltered]=useState(false);
    const customToast = (mass:string) =>
        toast(mass, {
            backgroundColor: '#8329C5',
            color: '#ffffff',
        })
    const getStorageData = (keyName:string, defaultValue:string) =>{
        const savedItem = localStorage.getItem(keyName);
        // @ts-ignore
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || defaultValue;
    }
    const effects=getStorageData('effects','no');
    const filterEffects=getStorageData('filter','no');


    useEffect(() => {
         window.scrollTo(0, 0);
        localStorage.setItem('filter',JSON.stringify({filter1:false, filter2:false, filter3:false, filter4:false}));
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
                setEffect(effects.map(item => <Effect effects={item} check={true}></Effect>));
            } catch (e) {
                if (e instanceof Error) {
                    setError(e.message);
                }
            }
        };
        userRequest();

    }, []);



    const getFiltered = () => {
        let filteredList1 = [...effects];
        if(searchTitleEffect.length>0)
        {
            filteredList1= filteredList1.filter(obj => (obj.name).includes(searchTitleEffect));
        }
        else if(searchTitleEffect.length===0){
            filteredList1= [...effects];
        }
        if(filterEffects.filter1){
            console.log("filter1");
            filteredList1= filteredList1.filter(employee => {
                return employee.typeeffect_id === 1;
            });
            console.log(filteredList1);
        }
        else if(filterEffects.filter2){
            console.log("filter2");
            filteredList1= filteredList1.filter(employee => {
                return employee.typeeffect_id === 2;
            });
            console.log(filteredList1);
        }
        else if(filterEffects.filter3){
            console.log("filter3");
            filteredList1= filteredList1.filter(employee => {
                return employee.typeeffect_id === 3;
            });
            console.log(filteredList1);
        }
        else if(filterEffects.filter4){
            console.log("filter4");
            filteredList1= filteredList1.filter(employee => {
                return employee.typeeffect_id === 4;
            });
            console.log(filteredList1);
        }
        else if(!filterEffects.filter1 && !filterEffects.filter2 && !filterEffects.filter3 && !filterEffects.filter4){
            filteredList1= [...effects];
            console.log("noooo");
        }
        console.log("noooo filtered");
        return filteredList1;

    }

    const searchTitle=(title:string,filter:boolean)=>{
        setSearchTitleEffect(title);
        setFiltered(filter);
    }



    return <div>
        <Header></Header>
       {result && <div>{result}</div>}
            {error && <div>{error}</div>}
        <Search searchTitle={searchTitle}></Search>
        <div>
            <div className={styles.effects}>
                {getFiltered().map(item => <Effect effects={item} check={true}></Effect>)}

            </div>
        </div>

        {/*<button style={{position:"relative", left:"200px",right:"200px",background:'red',width:"100px",height:"100px"}} >{error}</button>*/}
        <ToastContainer />
    </div>;
};

export default HomeUser;