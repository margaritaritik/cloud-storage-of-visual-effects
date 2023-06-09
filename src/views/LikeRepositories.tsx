import React, {useEffect} from 'react';
import Header from "../components/Header/Header";
import Effect from "../components/Effect/Effect";
import {API} from "../servises/api";

const LikeRepositories = () => {
    const getStorageData = (keyName:string, defaultValue:string) =>{
        const savedItem = localStorage.getItem(keyName);
        // @ts-ignore
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || defaultValue;
    }
    const effects=getStorageData('effects','no');
    const getFiltered = () => {
        let filteredList1 = [...effects];

            filteredList1= filteredList1.filter(employee => {
                return employee.id === 1 ;
            });

        return filteredList1;
    }
    const getLike=async ()=>{
        const result=await API.user.getLikeRep();
        return result;
    }
    useEffect(()=>{

    },[])
    return (
        <div>
            <Header></Header>
            {/*{getFiltered().filter(item => item.id === user.id).map(filtered => (*/}
            {/*    <Effect effects={filtered} check={true}></Effect>)*/}
            {/*)}*/}
        </div>
    );
};

export default LikeRepositories;