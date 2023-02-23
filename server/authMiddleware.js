const jwt=require('jsonwebtoken');
const {secret}=require('./config');
const db=require("./ConnectionDB/db");

module.exports=function (req,res,next){
    // console.log(req.cookies.token);
    // const token =((req.headers.cookie.split(`; token=`)[0]).toString()).slice(6);
    // console.log('vot');
    // console.log(token);
    // if(!token){
    //     res.status(401);
    // }
    if(!req.cookies.token) return next();
    try {
        const decoded=jwt.verify(req.cookies.token,secret);
        db.query('SELECT * FROM users WHERE id=?',[decoded.id],(err,result)=>{
            if(err) return next();
            req.user=result[0];
            return next();

        })
        // console.log(jwt.verify(token,secret));
        // return res.json(jwt.verify(token,secret));
    }catch (e) {
        if(e) return next();
       // console.log(e);
    }
    // next();
};