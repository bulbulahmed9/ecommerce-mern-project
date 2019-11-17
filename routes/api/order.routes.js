const router = require('express').Router()
const order = require('../../controller/order.controller')
const auth = require('../../middleware/auth')

router.post('/', auth, order)

module.exports = router