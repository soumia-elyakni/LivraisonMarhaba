const jwt=require('jsonwebtoken')
const ls=require('local-storage')
const dotenv = require("dotenv")

const verify= (access)=>(req, res, next)=>{
 if(ls('auth-token')){
    let token = ls('auth-token')
    if(jwt.verify(token, process.env.SECRET)){
        const tokendata = jwt.verify(token, process.env.SECRET)
        req.email = tokendata
        if(access.includes(req.email.email.name)){
            next()
        } else {
            res.send('unauthorised')
        }
      res.send('token valid')  
    } else {
        res.send('token invalid')
    }
    
 }else{
    res.send('no token!!')
 }
}

module.exports= verify