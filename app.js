const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000
const rou_default = require('./routers/rou-default')
const rou_user = require('./routers/rou-user')
const db = require('./handler/dbhandler')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

db.connectDB()
.then((resu)=>{
    
        app.listen(3000)
        app.use('/', rou_default)
        if (resu)
        {
            console.log(`Server is running on http://localhost:${PORT}`)
            app.use('/', rou_user)
        }
    })
