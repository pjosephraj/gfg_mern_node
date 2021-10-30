const service = require('../Services/paymentService')


const createOrder = async (req, res) => {
  try {
    const order = await service.createOrder(req.params.id)
    return res.send({order})
  } catch (err) {
    res.status(400).send({ errors: { message: err.message || 'Unknown Server error!' } })
  }
}

const verifyOrder = async (req, res) => {
  try {
    const data = await service.verifyOrder(req.body)
    res.send({ data })
  } catch (err) {
    res.status(400).send({ errors: { message: err.message || 'Unknown Server error!' } })
  }
}

module.exports = {
  createOrder, verifyOrder
}