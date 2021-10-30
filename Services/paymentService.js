const Razorpay = require('razorpay')
// const crypto = require('crypto')
require('dotenv').config()
const {v4: uuidv4} = require('uuid')

const Model = require('../Models/Product')

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET
})

const createOrder = async (_id) => {
  if (!_id) throw { message: 'Invalid Product Id' }
  const product = await Model.findOne({ _id })
  const options = {
    amount: parseInt(product.price) * 100,
    currency: 'INR',
    receipt: uuidv4(),
    payment_capture: true
  }
  const order = await instance.orders.create(options)
  if (!order) throw { message: 'Error occured on the order!' }
  return order
}

const verifyOrder = async (data) => {
  // const {
  //   orderCreationId,
  //   razorpayPaymentId,
  //   razorpayOrderId,
  //   razorpaySignature,
  //   amount,
  //   currency
  // } = data
  // const signature = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET)
  // signature.update(`${orderCreationId}|${razorpayPaymentId}`)
  // const digest = signature.digest('hex')
  // if (digest !== razorpaySignature) throw { message: 'Not valid transaction!' }
  // const captureResponse = await instance.payments.capture(
  //   razorpayPaymentId,
  //   amount,
  //   currency
  // )
  // return { orderId: razorpayOrderId, paymentId: razorpayPaymentId, captureResponse }
  return { success: 'Order placed successfully!' }
}


module.exports = {
  createOrder, verifyOrder
}
