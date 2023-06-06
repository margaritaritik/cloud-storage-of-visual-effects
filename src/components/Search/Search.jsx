import React, {useEffect, useState} from 'react';
import styles from './stylesSearch.module.css';
import TextField from "@material-ui/core/TextField";
import Menu from './menu';

const Search = ({searchTitle}) => {

    const [title, setTitle] = useState('');
    const [filtered, setFiltered] = useState(false);
    const search=(event)=>{
        setTitle(event.target.value)
    }
    const filter =(flag)=>{
        setFiltered(flag);
        console.log("filterrrrrrrrrrrrr")
    }


    useEffect(() => { searchTitle(title,filtered)}, [title]);
    useEffect(() => { searchTitle(title,filtered)}, [filtered]);

    return (
        <div className={styles.container}>
            <div className={styles.textForWrite}>
                <TextField name="title"
                type="text" value={title}
                label="🔍" variant="outlined" onChange={search}/>
                <div className={styles.filter}>
                    <Menu SearchFilter={filter}></Menu>
                </div>

            </div>


        </div>
    );
};

export default Search;