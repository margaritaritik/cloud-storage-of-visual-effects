const {BASE_URL} = require("../servises/api");
const login =async (data)=>{
    const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}

module.exports = login;
