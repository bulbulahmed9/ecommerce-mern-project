const router = require('express').Router()
const auth = require('../../middleware/auth')
const { addCart, getItem } = require('../../controller/cart.controller')

// add to cart
router.post('/', auth,  addCart)

module.exports = router