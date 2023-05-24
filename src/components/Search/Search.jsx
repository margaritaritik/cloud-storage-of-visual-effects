import React, {useEffect, useState} from 'react';
import styles from './stylesSearch.module.css';
import TextField from "@material-ui/core/TextField";
import Menu from './menu';

const Search = ({searchTitle}) => {

    const [title, setTitle] = useState('');
    const search=(event)=>{
        setTitle(event.target.value)
    }

    useEffect(() => { searchTitle(title)}, [title]);

    return (
        <div className={styles.container}>
            <div className={styles.textForWrite}>
                <TextField name="title"
                type="text" value={title}
                label="🔍" variant="outlined" onChange={search}/>
                <div className={styles.filter}>
                    {/*<img src="http://127.0.0.1:9003/image/svg/filter.svg"/>*/}
                    <Menu></Menu>
                </div>

            </div>


        </div>
    );
};

export default Search;