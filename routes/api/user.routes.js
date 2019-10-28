const router = require('express').Router()
const auth = require('../../middleware/auth')

const {createUser , login, userData, updateData} = require('../../controller/user.controller')


router.post('/', createUser)
router.post('/login', login)
router.get('/',auth, userData)
router.put('/update',auth, updateData)


module.exports = router;