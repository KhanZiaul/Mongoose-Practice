const jwt = require('jsonwebtoken');

const checkLogin = (req,res,next)=>{
    try{
        
    }
    catch(err){
        res.status(401).json({ error: "Authentication error" });
    }
}

module.exports=checkLogin