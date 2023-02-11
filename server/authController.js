const mysql = require("mysql");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {secret} = require("./config");
const db=require("./ConnectionDB/db")

const COOKIE_NAME = "token";

const generateAccessToken = (id, name) => {
    const payload = {
        id,
        name
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"});
}

class authController {
    async registration(req, res) {
        try {
            let username = req.body.login;
            let password = req.body.password;
            db.query('select * from users where name=(?);', [username], function (err, results, fields) {
                if (results.length > 0) {
                    console.log("Пользователь уже есть с таким логином!");
                    return res.json({message:'Пользователь уже есть с таким логином!'});
                } else {
                    const hashPassword = bcrypt.hashSync(password, 7);
                    connection.query('insert into users (name,password,typeUser) values(?,?,2)', [username, hashPassword], function (err, results, fields) {
                        if (err) console.log(err);
                        else {
                            console.log("Данные добавлены");

                        }
                    });
                }
                res.end();
            });
        } catch (e) {
            console.log(e);
        }
    }

    async login(req, res) {
        try {
            let username = req.body.login;
            let password = req.body.password;
            if (!username || !password) {
                res.status(400).json({message: 'Please enter Username and Password!'});
                return res.end();
            }
            db.query('select * from users where name=(?);', [username], function (err, results, fields){
                if (results.length > 0) {
                    const validPassword = bcrypt.compareSync(password, results[0].password);
                    if (!validPassword) {
                        console.log("Данные не верны!");
                        return res.status(400).json({message: 'Не верный пароль!!'});
                    }
                    const token = generateAccessToken(results[0].id, results[0].name);
                    res.cookie(COOKIE_NAME, token, {
                        maxAge: 24 * 60 * 60 * 1000,
                        httpOnly: true,
                        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'none',
                        secure: process.env.NODE_ENV === 'production'
                    });
                    res.status(200).json(token);
                } else {
                    console.log("Данные не верны!");
                    res.status(401).json({message: 'Incorrect Username and/or Password!'});
                }
                res.end();
            });
        } catch (e) {
            console.log(e);
        }
    }

    async getUsers(req, res) {
        try {
             res.json("SERVER WORK get user");
        } catch (e) {
            console.log(e);
        }
    }

    async uploadPhoto(req, res) {
        try {
            let username = req.body.login;
            let password = req.body.password;
            if (!username || !password) {
                res.status(400).json({message: 'Please enter Username and Password!'});
                return res.end();
            }
            db.query('select * from users where name=(?);', [username], function (err, results, fields){
                if (results.length > 0) {
                    const validPassword = bcrypt.compareSync(password, results[0].password);
                    if (!validPassword) {
                        console.log("Данные не верны!");
                        return res.status(400).json({message: 'Не верный пароль!!'});
                    }
                    const token = generateAccessToken(results[0].id, results[0].name);
                    res.cookie(COOKIE_NAME, token, {
                        maxAge: 24 * 60 * 60 * 1000,
                        httpOnly: true,
                        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'none',
                        secure: process.env.NODE_ENV === 'production'
                    });
                    res.status(200).json(token);
                } else {
                    console.log("Данные не верны!");
                    res.status(401).json({message: 'Incorrect Username and/or Password!'});
                }
                res.end();
            });
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new authController();