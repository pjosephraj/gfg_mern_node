const router = require('express').Router()

const controller = require('../Controllers/paymentController')

router.get('/order/:id', controller.createOrder)
router.post('/verify', controller.verifyOrder)

module.exports = router;