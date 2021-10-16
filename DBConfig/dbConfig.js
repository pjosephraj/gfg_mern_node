require('dotenv').config()

const mongoose = require('mongoose')

const mongoURI = process.env.MONGO_URI

const dbConnect = {

  connect: () => {
    mongoose
      .connect(mongoURI, { useNewUrlParser: true })
      .then(console.log(`MongoDB connected ${mongoURI}`))
      .catch(err => console.log(err))
  }

}

module.exports =  dbConnect