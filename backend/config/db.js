const mongoose= require('mongoose')
const dotenv= require("dotenv").config()


const db= mongoose.connect(process.env.DB_CONNECT,()=>{console.log("connect to database")})




module.exports = db