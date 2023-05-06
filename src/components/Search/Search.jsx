import React, {useEffect, useState} from 'react';
import styles from './stylesSearch.module.css';

const Search = ({searchTitle}) => {

    const [title, setTitle] = useState('');
    const search=(event)=>{
        setTitle(event.target.value)
    }

    useEffect(() => { searchTitle(title)}, [title]);

    return (
        <div className={styles.container}>
            <input type='text'
                   className={styles.textForWriteSearch}
                   placeholder="🔍"
                   value={title}
                   onChange={search}/>
            
        </div>
    );
};

export default Search;