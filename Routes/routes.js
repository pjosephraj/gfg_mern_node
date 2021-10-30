const app = require('express')()

// Routes
app.use('/api/v1/users', require('./userRoutes'))
app.use('/api/v1/products', require('./productRoutes'))
app.use('/api/v1/razorpay', require('./paymentRoutes'))


module.exports = app