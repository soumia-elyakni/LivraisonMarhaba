const User = require('../models/users.js')
const bcrypt=require('bcryptjs')
const jwt =require('jsonwebtoken')
const ls =require('local-storage')

const register= async(req,res) => {
    const {body}=req
    const email= await User.findOne({email: body.email})
    if(email) return res.send('user exist already')
    const hash= await bcrypt.hash(body.password,10)
    body.password= hash
    const create = User.create({...body})
    if(!create) return res.send('not created')
    res.json(create)
}

const login = async(req, res)=>{
    const {body} = req
    const email = await User.findOne({email: body.email})
    if (!email) return res.send('user not existed')
    const pass= await bcrypt.compare(body.password, email.password)
    if(!pass) return res.send('password invalid')
    const token = jwt.sign({email}, process.env.SECRET)
    ls('auth-token', token)
    res.json({
        token:ls('auth-token'),
        data :email,
    })
}

const logout = async (req, res)=>{
    ls.remove('auth-token')
}



module.exports= {register, login, logout}