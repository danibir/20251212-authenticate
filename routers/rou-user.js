const router = require('express').Router()
const mid_auth = require('../middleware/mid-auth')
const controller = require('../controllers/con-user')

router.get('/login', controller.login_get);

router.post('/login', controller.login_post);

router.get('/profile', controller.profile_get);

router.post('/logout', controller.logout_post);


module.exports = router;