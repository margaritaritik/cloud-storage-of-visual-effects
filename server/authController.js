const mysql = require("mysql");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {secret} = require("./config");
const db=require("./ConnectionDB/db");


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
                        // SameSite:'none',
                        //Secure:''
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
            // console.log('tadadadada');

        } catch (e) {
            console.log(e);
        }
    }

    async uploadPhoto(req, res) {
        try {

            // const newpath = __dirname + "/files/";
            // const file = req.files.file;
            // const filename = file.name;
            //
            // file.mv(`${newpath}${filename}`, (err) => {
            //     if (err) {
            //         res.status(500).send({ message: "File upload failed", code: 200 });
            //     }
            //     res.status(200).send({ message: "File Uploaded", code: 200 });
            // });
            res.json(req.body);
           //  if(!req.files){
           //      return res.status(400).json({msg:"No file uploaded"});
           //  }
           //  const file=req.files.file;
           //
           //  if(!file){
           //      return  res.json({error:'Incorrect input name'});
           //  }
           //  upload(req, res, (err) => {
           //      if (err) {
           //          res.sendStatus(500);
           //      }
           //      res.send(req.file);
           //  });
             // console.log(req.body);
             // res.json(req.body);
           // const newFileName=encodeURI(Date.now()+'-'+file.name);
           //  file.mv(`${__dirname}/public/uploads/${file.name}`,err=>{
           //      if(err){
           //          console.error(err);
           //          return res.status(500).send(err);
           //      }
           //      res.json({fileName:file.name, filePath:`/uploads/${file.name}`});
           //  });

        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new authController();