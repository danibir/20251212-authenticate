const express = require('express')
const session = require('express-session');
const mongoose = require('mongoose')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000
const rou_default = require('./routers/rou-default')
const rou_user = require('./routers/rou-user')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(session({
    secret: 'supersecretkey',
    resave: false,
    saveUninitialized: true,
}));
app.use(express.static(path.join(__dirname, 'public')))

const MONGODB_URI = "mongodb://localhost"
const DB_NAME = "userDB"

mongoose.connect(MONGODB_URI, {dbName:DB_NAME})
    .then((resu)=>{
        console.log('connected')
        app.listen(3000)


        app.use('/', rou_default)
        app.use('/', rou_user)
    })