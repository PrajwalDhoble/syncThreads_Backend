const express = require('express')
require('dotenv').config()

const connect = require('./configs/db')

const app = express()
app.use(express.json())


const user = require('./controller/user.controller')
const {register, login} = require('./controller/auth.controller')




app.post('/register',register)
app.use('/findUser', user)
app.post('/login', login)




const port = process.env.PORT || 8080


app.listen(port,async()=>{
    try{
        await connect()
        console.log("listening on port", port)
    }
    catch(err){
        console.log(err.message)
    }
})