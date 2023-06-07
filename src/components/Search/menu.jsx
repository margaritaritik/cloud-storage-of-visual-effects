import React, {useEffect, useState} from 'react';
import styles from './stylesMenu.module.css';
import UploadPhoto from "../UploadFile/UploadPhoto";
import TextField from "@material-ui/core/TextField";
import Popup from "reactjs-popup";
import {Button, Checkbox} from "@mui/material";


const Menu = ({SearchFilter}) => {
    const [check,setCheck]=useState(false);
    const MenuClick=()=>{
        setCheck(true);
    }
    const [options,setOptions] = useState({filter1:false, filter2:false, filter3:false,
        filter4:false});

    const closeModal = () => setCheck(false);
    const FilterClick=()=>{
        console.log(`filt ${options}`);
        localStorage.setItem('filter',JSON.stringify(options));
        SearchFilter(options);
        setCheck(false);
    }

    return (
        <div className={styles.container}>
            <button className={styles.menu_btn} onClick={MenuClick}>
                {<div> </div>}
            </button>
            <div className={styles.container_modal}>
                <Popup open={check} closeOnDocumentClick onClose={closeModal}>
                    <div className={check ? styles.modal:styles.close}>
                        <ul className="menu">
                            <div className={styles.check}>
                                <label>
                                    <Checkbox
                                        checked={options.filter1}
                                        value={options.filter1}
                                        onChange={()=>setOptions({filter1:!options.filter1, filter2:options.filter2, filter3:options.filter3,
                                            filter4:options.filter4})}
                                    />
                                    прелоадер
                                </label>
                            </div>
                            <div className={styles.check}>
                                <label>
                                    <Checkbox
                                        checked={options.filter2}
                                        value={options.filter2}
                                        onChange={()=>setOptions({filter1:options.filter1, filter2:!options.filter2, filter3:options.filter3,
                                            filter4:options.filter4})}
                                    />
                                    трехмерный эффект
                                </label>
                            </div>
                            <div className={styles.check}>
                                <label>
                                    <Checkbox
                                        checked={options.filter3}
                                        value={options.filter3}
                                        onChange={()=>setOptions({filter1:options.filter1, filter2:options.filter2, filter3:!options.filter3,
                                            filter4:options.filter4})}
                                    />
                                    типографика
                                </label>
                            </div>
                            <div className={styles.check}>
                                <label>
                                    <Checkbox
                                        checked={options.filter4}
                                        value={options.filter4}
                                        onChange={()=>setOptions({filter1:options.filter1, filter2:options.filter2, filter3:options.filter3,
                                            filter4:!options.filter4})}
                                    />
                                    природный эффект
                                </label>
                            </div>
                            <Button onClick={FilterClick}>применить фильтр</Button>
                        </ul>
                    </div>
                </Popup>
            </div>

        </div>
    );
};

export default Menu;