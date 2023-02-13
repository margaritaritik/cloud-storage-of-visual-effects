import React from 'react';
import { useForm } from "react-hook-form";
import styles from "../../styles/stylesAccountUser.module.css";


const UploadImageTest = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data:any) => {
        const formData = new FormData();
        console.log(data.file[0])
        formData.append("file", data.file[0]);

        const res = await fetch("http://127.0.0.1:9003/auth/upload-file", {
            method: "POST",
            body: formData,
        }).then((res) => res.json());
        alert(JSON.stringify(`${res.message}, status: ${res.status}`));
    };
    return (
        <div className={styles.containerTest}>
            test
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="file" {...register("file")} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default UploadImageTest;