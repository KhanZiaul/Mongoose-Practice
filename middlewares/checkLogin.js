const jwt = require('jsonwebtoken');

const checkLogin = (req,res,next)=>{
    const {authorization} = req.headers
    try{
        const token = authorization.split(' ')[1]
        const decode = jwt.verify(token,process.env.JWT)
        const {user , id} = decode
        req.id=id
        req.user= user
        next()
    }
    catch(err){
        next("Authentication error");
    }
}

module.exports=checkLogin