const express= require('express')
const app = express()

const db = require('./config/db.js')
const router = require('./routers/routes.js')


app.use(express.json())
app.use(express.urlencoded({extended : true}))




app.use(router)
app.listen(7500, () => (console.log('server is connected')))