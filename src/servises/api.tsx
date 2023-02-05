import Cookies from 'universal-cookie';
export const BASE_URL='http://127.0.0.1:9003/auth';

type LoginData = {
    login: string;
    password: string;
};

type RegistrationData = {
    login: string;
    password: string;
};

const errorHandler = async (response: Response) => {
    if (response.status !== 200) {
        const responseData = await response.json();
        throw Error(responseData.message);
    }
};

export const API = {
    auth: {
        login: async (data: LoginData) => {
            const response = await fetch(`${BASE_URL}/login`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            await errorHandler(response);
            return await response.json();
        },
        logout: async () => {
            const response = await fetch(`${BASE_URL}/auth`, {
                method: "DELETE",
                credentials: "include",
            });
            await errorHandler(response);
        },
    },
    user: {
        register: async (data: RegistrationData) => {
            const response = await fetch(`${BASE_URL}/registration`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            await errorHandler(response);
            return await response.json();
        },
        getCurrentUser: async () => {
            const cookies = new Cookies();
            console.log(cookies.get('token'));
            const response = await fetch(`${BASE_URL}/users`, {
                credentials: "same-origin",
                method: "GET",
                headers: {token:cookies.get('token')}
            });
            await errorHandler(response);
            return await response.json();
        },
    },
};