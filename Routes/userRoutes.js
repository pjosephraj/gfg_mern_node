
const router = require('express').Router()
const controller = require('../Controllers/userController')

router.get('/', controller.getUsers)
router.get('/:id', controller.getUser)
router.post('/', controller.saveUser)
router.put('/', controller.updateUser)
router.delete('/:id', controller.removeUser)
router.post('/authenticate', controller.authenticateUser)

module.exports = router