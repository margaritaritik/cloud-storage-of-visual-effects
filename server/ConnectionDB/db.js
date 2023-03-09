const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "db_cloud_storage_of_visual_effects",
    password: "Rita2003/",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

connection.connect((error)=>{
    if(error){
        return console.log('ошибка подключения к БД!');
    }
    else{
        return console.log('Подключение успешно!')
    }
});

module.exports=connection;
