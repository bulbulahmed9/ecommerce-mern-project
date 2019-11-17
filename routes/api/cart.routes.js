const router = require('express').Router()
const auth = require('../../middleware/auth')
const { addCart, getItem, updateCart, deleteCart } = require('../../controller/cart.controller')

// add to cart
router.post('/', auth,  addCart)

// get from cart
router.get('/', auth,  getItem)

// update cart
router.put('/', auth,  updateCart)

// delete cart
router.delete('/:id', auth,  deleteCart)

module.exports = router