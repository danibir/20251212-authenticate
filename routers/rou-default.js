const router = require('express').Router()
const con_def = require('../controllers/con-default')

router.get('/', con_def.index)


module.exports = router