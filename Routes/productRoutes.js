const router = require('express').Router()
const controller = require('../Controllers/productController')

router.get('/', controller.getProducts)
router.get('/:id', controller.getProduct)

module.exports = router