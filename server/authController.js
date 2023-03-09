const mysql = require("mysql");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {secret} = require("./config");
const db=require("./ConnectionDB/db");
const fs = require('fs');


const COOKIE_NAME = "token";

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' +file.originalname)
    }
})

const upload = multer({ storage: storage }).single('file')

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
            db.query('select * from user where name=(?);', [username], function (err, results, fields) {
                if (results.length > 0) {
                    console.log("Пользователь уже есть с таким логином!");
                    return res.json({message:'Пользователь уже есть с таким логином!'});
                } else {
                    const hashPassword = bcrypt.hashSync(password, 7);
                    db.query('insert into user (name,password,typeuser_id) values(?,?,1)', [username, hashPassword], function (err, results, fields) {
                        if (err) console.log(err);
                        else {
                            console.log("Данные добавлены");
                            db.query('SELECT * FROM user ORDER BY id DESC LIMIT 1;', function (err, results, fields) {
                                if (results.length > 0) {
                                    console.log(results[0].id);
                                    db.query('insert into `account` (description,user_id) values(\'Это не баг, это фича\',?);',[results[0].id], function (err, results, fields) {
                                        console.log("Пользователь создан!");
                                        //res.status(200).json({message:"Пользователь успешно зарегистрирован!!!"});

                                    });
                                } else {
                                   return res.json("no no no")
                                }

                            });
                        }
                        // res.end();
                        return res.json({message:'Пользователь зарегистрирован!'});
                        res.end();
                    });
                }

            });
        } catch (e) {
            console.log(e);
        }
    }

    async login(req, res) {
        try {
            let username = req.body.login;
            let password = req.body.password;
            console.log(req.body)
            if (!username || !password) {
                res.status(400).json({message: 'Please enter Username and Password!'});
                return res.end();
            }
            db.query('select * from user where name=(?);', [username], function (err, results, fields){
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
                        secure: true
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
            if(req.user){
                res.status(200).json({user:req.user});
            }else{
                res.status(401).json({user:'nothing'});
            }
        } catch (e) {
            console.log(e);
        }
    }

    async uploadPhoto(req, res) {
        try {
            const blobData=req.body;
            const outputfile = "output.jpeg";
            console.log(req.body);
            db.query('insert into `account` (description,idUser,img) values("test",22,?);', [blobData], function(err, result) {
                console.log("BLOB data inserted!");
                res.status(200).json({message: 'Blob data inserted'});
                db.query('select img from account,user where user.id=22;', function (err,result) {
                    fs.writeFile('/uploadImages/1.jpeg', result[0], (err) => {
                        if (err) {
                            console.error(err)
                            return
                        }
                    })
                })
            });

        } catch (e) {
            console.log(e);
        }
    }

    async uploadUserPhoto(req, res) {
        try {
            const newName=req.file.filename+'.jpeg';
            fs.rename(`./images/${req.file.filename}`,`./images/${newName}`,function () {
                console.log('image ok');
                res.send("200");
            })
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new authController();