const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: [true, 'First Name is required.']
  },
  last_name: {
    type: String,
    required: [true, 'Last Name is required.']
  },
  phone_number: {
    type: String,
    required: [true, 'Phone Number is required.']
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: [true, 'Email already exists!']
  },
  password: {
    type: String,
    required: [true, 'Password is required.']
  }
})

UserSchema.post('save', function (error, doc, next) {
  error.customErrorMessage = '';
  if (error.code === 11000) {
    error.customErrorMessage = 'Email already exists!'
  } else if (error.errors) {
    for (let [, err] of Object.entries(error.errors)) {
      error.customErrorMessage += ` ${err.message}`
    }
  }
  next(error);
})

module.exports = model('User', UserSchema)