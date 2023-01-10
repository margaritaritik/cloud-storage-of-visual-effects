const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "my_web_application",
    password: "Rita2003/",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});