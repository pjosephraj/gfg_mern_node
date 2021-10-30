const service = require('../Services/productService')

// Get Users List
const getProducts = async (req, res) => {
  try {
    const data = await service.getProducts()
    res.send({ data })
  } catch (err) {
    res.status(400).send({ errors: { message: err.message || 'Unknown Server error!' } })
  }
}

// Get User
const getProduct = async (req, res) => {
  try {
    const data = await service.getProduct(req.params.id)
    res.send({ data })
  } catch (err) {
    res.status(400).send({ errors: { message: err.message || 'Unknown Server error!' } })
  }
}

module.exports = {
  getProducts, getProduct
}