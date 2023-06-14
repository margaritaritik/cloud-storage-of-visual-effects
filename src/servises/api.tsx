export const BASE_URL='http://127.0.0.1:9003/auth';

type LoginData = {
    login: string;
    password: string;
};

type RegistrationData = {
    login: string;
    password: string;
};

type UploadImageData={
    file:object;
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
        changeDescription: async (data: object) => {
            const response = await fetch(`${BASE_URL}/changeDescription`, {
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
        changeLogin: async (data: object) => {
            const response = await fetch(`${BASE_URL}/changeLogin`, {
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
        changePass: async (data: object) => {
            const response = await fetch(`${BASE_URL}/changePass`, {
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

        getCurrentUser: async () => {
            console.log("user");
            const response = await fetch(`${BASE_URL}/users`, {
                credentials: "include",
                method: "GET",
            });
           await errorHandler(response);
           return await response.json();
        },

        getEffects: async () => {
            const response = await fetch(`${BASE_URL}/effects`, {
                credentials: "include",
                method: "GET",
            });
            await errorHandler(response);
            return await response.json();
        },
        getLikeRep: async (account_id:number) => {
            const response = await fetch(`${BASE_URL}/likeRep/${account_id}`, {
                credentials: "include",
                method: "GET",
            });
            await errorHandler(response);
            return await response.json();
        },
        getComments: async (effect_id:number) => {
            const response = await fetch(`${BASE_URL}/getComments/${effect_id}`, {
                credentials: "include",
                method: "GET",
                // body: JSON.stringify(effect_id)
                // params:{effect_id},
            });
            await errorHandler(response);
            return await response.json();
        },
        favorite: async (account_id:number,effect_id:number) => {
            const data={id_account:account_id,id_rep:effect_id};
            console.log("likeRep");
            const response = await fetch(`${BASE_URL}/like`, {
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
        favoriteDelete: async (account_id:number,effect_id:number) => {
            const data={id_account:account_id,id_rep:effect_id};
            const response = await fetch(`${BASE_URL}/favoriteDelete`, {
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

        uploadFile:async (data: FormData) => {
            console.log(data);
            const response = await fetch(`${BASE_URL}/uploadPhoto`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: data
            });
            await errorHandler(response);
            return await response.json();
        },
        comment: async (data:object) => {
            const response = await fetch(`${BASE_URL}/createComment`, {
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
        createRepository: async (data:object) => {
            const response = await fetch(`${BASE_URL}/createRepository`, {
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
        changeRepository: async (data:object) => {
            const response = await fetch(`${BASE_URL}/changeRepository`, {
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
        getAccount: async (account_id:number) => {
            const response = await fetch(`${BASE_URL}/getAccount/${account_id}`, {
                credentials: "include",
                method: "GET",

            });
            await errorHandler(response);
            return await response.json();
        },
        logout: async () => {
            const response = await fetch(`${BASE_URL}/`, {
                method: "DELETE",
                credentials: "include",
            });
            await errorHandler(response);
        },
        deleteRepository: async (data:number) => {
            const response = await fetch(`${BASE_URL}/deleteRepository/${data}`, {
                method: "DELETE",
                credentials: "include",
            });
            await errorHandler(response);
            return await response.json();
        },

    },
};