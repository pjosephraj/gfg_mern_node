const express = require('express')
const dotenv = require('dotenv')
const cors = require("cors")

const routes = require('./Routes/routes')

const app = express()
dotenv.config()
const PORT = process.env.PORT

// Mongo DB Connect
require('./DBConfig/dbConfig').connect()

// Middlewares
app.use(express.json())
app.use(cors())

// Routes
app.use(routes)

// App Initialize
app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`)
})

