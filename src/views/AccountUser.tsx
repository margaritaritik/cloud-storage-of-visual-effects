import React, {useState} from 'react';
import Header from '../components/Header/Header'

const AccountUser = () => {
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");

    // const saveFile = (e) => {
    //     setFile(e.target.files[0]);
    //     setFileName(e.target.files[0].name);
    // };


    return <>
        <Header></Header>

        {/*<input type="file" onChange={saveFile} />*/}

    </>
};

export default AccountUser;