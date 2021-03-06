const express = require('express')
const app = express()
const mongoose = require('mongoose')
require ('dotenv').config()
const cors = require('cors')
app.use (cors())
app.use (express.json())


//mongoose
mongoose.connect(process.env.MONGO_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true
    },
    console.log('BANCO TA ON!'))


//Routes
const routes = require('./routes')
app.use(routes)


app.listen(2424, ()=> {
    console.log("Servidor ta ON!")
})