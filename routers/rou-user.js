const router = require('express').Router()
const mid_auth = require('../middleware/mid-auth')
const controller_def = require('../controllers/con-default')
const controller = require('../controllers/con-user')
const db = require('../handler/dbhandler')

db.connectDB()
.then((resu)=>{
    if (resu)
    {
        router.get('/login', controller.login_get)

        router.post('/login', controller.login_post)

        router.get('/profile', controller.profile_get)

        router.post('/logout', controller.logout_post)
    }
    else
    {
        router.use(controller_def.missingdb)
    }
})

module.exports = router;