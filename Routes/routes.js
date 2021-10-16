const app = require('express')()

// User Route
app.use('/api/v1/users', require('./userRoutes'))


module.exports = app