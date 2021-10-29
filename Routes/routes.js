const app = require('express')()

// Routes
app.use('/api/v1/users', require('./userRoutes'))
app.use('/api/v1/products', require('./productRoutes'))


module.exports = app