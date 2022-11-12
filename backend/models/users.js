const mongoose= require('mongoose')

const user_schema= new mongoose.Schema({
    username : {
        type : String
    },
    email:{
        type : String
    },
    password : {
        type : String
    },
  
})

const User = mongoose.model('user', user_schema)
module.exports = User