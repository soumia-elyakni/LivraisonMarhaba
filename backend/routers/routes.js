const router = require('express').Router();
const user= require('../controllers/userControllers.js')
const verify= require("../middelware/tokenVerify.js")
// const tryCatch=require("../errorHandler/")

router.post('/register',user.register)
router.post('/login',user.login)
router.post('/test',verify(['selya97']), (req,res)=>{
    res.send('hello')
})
router.get('/logout', user.logout)


module.exports = router