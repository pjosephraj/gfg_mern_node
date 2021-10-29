const Model = require('../Models/Product')

const getProducts = async () => {
  return await Model.find({}, { __v: 0, rating: 0 })
}

const getProduct = async (_id) => {
  if (!_id) throw { message: 'Invalid Product Id' }
  const product = await Model.findOne({ _id }, { rating: 0, __v: 0 })
  if (product) {
    return product
  }
  throw { message: 'Product does not exists!' }
}

module.exports = {
  getProducts, getProduct
}