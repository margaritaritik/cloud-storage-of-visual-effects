const jwt=require('jsonwebtoken');
const {secret}=require('./config');


module.exports=function (req,res,next){
    const token = req.headers.token;
    if(!token){
        res.status(401);
    }
    try {
        console.log(jwt.verify(token,secret));
        return res.json(jwt.verify(token,secret));
    }catch (e) {
        console.log(e);
    }
    next();
};