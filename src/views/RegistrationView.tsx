import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import RegistrationForm, { RegistrationFormData } from "../components/RegistrationForm/RegistrationForm";
import { API } from "../servises/api";

const RegistrationView = () => {
    const navigate = useNavigate();
    const [result, setResult] = useState("");
    const [error, setError] = useState("");
    const onSubmit = (data: RegistrationFormData) => {

        const registrationRequest = async () => {
            setResult("");
            setError("");
            try {
                let massageRegistration=await API.user.register(data);
                console.log(massageRegistration.message);
                if(massageRegistration.message=='Пользователь уже есть с таким логином!'){
                    return setResult(massageRegistration.message);
                }
                else{
                    setResult('Пользователь успешно зарегистрирован!');
                    setTimeout(() => {
                        navigate(`/login`);
                    }, 1000);
                }
            } catch (e) {
                if (e instanceof Error) {
                    setError(`ERROR ${e.message}`);
                }
            }
        };
        registrationRequest();
    };

    return (
        <div>
            <RegistrationForm onSubmit={onSubmit}/>
            {result && <>{result}</>}
            {error && <>{error}</>}
        </div>
    );
};

export default RegistrationView;