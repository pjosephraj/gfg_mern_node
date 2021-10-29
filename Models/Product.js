const {Schema, model} = require('mongoose')

const ProductSchema = new Schema({
  title: {
    type: String
  },
  price: {
    type: Number
  },
  description: {
    type: String
  },
  category: {
    type: String
  },
  image: {
    type: String
  },
})

module.exports = model('Product', ProductSchema)