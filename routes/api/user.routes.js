const router = require('express').Router()
const auth = require('../../middleware/auth')

const {createUser , login, userData, updateData, deleteUser} = require('../../controller/user.controller')


router.post('/', createUser)
router.post('/login', login)
router.get('/',auth, userData)
router.put('/',auth, updateData)
router.delete('/',auth, deleteUser)


module.exports = router;