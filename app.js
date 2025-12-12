const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000
const rou_default = require('./routers/rou-default')
const rou_user = require('./routers/rou-user')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(rou_default)
app.use(rou_user)


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});