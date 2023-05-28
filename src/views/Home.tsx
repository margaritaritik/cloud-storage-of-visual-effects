import React, { useEffect, useState } from 'react';
import { API } from "../servises/api";
import Effect from "../components/Effect/Effect";
import MainEffects from "../components/MainEffects/MainEffects";


function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return <>
        <MainEffects></MainEffects>
    </>;
}

export default Home;