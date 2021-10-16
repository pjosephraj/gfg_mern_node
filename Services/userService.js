const User = require('../Models/User')
const bcrypt = require("bcrypt")

const getUsers = async () => {
  return await User.find({}, { password: 0, __v: 0 })
}

const getUser = async (_id) => {
  if (!_id) throw { message: 'Invalid user data' }
  const user = await User.findOne({ _id }, { password: 0, __v: 0 })
  if (user) {
    return user
  }
  throw { message: 'User does not exists!' }
}

const saveUser = async (data) => {
  let { first_name, last_name, phone_number, email, password } = data
  const existingUser = await User.findOne({ email })
  if (existingUser) { throw { message: 'User already exists!' } }
  const salt = await bcrypt.genSalt(10)
  password = await bcrypt.hash(password, salt)
  const user = new User({ first_name, last_name, phone_number, email, password })
  await user.save()
  return { _id: user._id, first_name, last_name, phone_number, email }
}

const updateUser = async (data) => {
  const { _id, first_name, last_name, phone_number } = data
  if (!_id) throw { message: 'Invalid user data' }
  const user = await User.findOne({ _id })
  if (user) {
    if (!first_name && !last_name && !phone_number) {
      throw { message: 'No data to update!' }
    }
    const saveData = {}
    first_name && (saveData.first_name = first_name)
    last_name && (saveData.last_name = last_name)
    phone_number && (saveData.phone_number = phone_number)
    await User.updateOne({ _id }, saveData)
    return User.findOne({ _id }, { password: 0, __v: 0 })
  }
  throw { message: 'User does not exists!' }
}

const removeUser = async (_id) => {
  const user = await User.findOne({ _id })
  if (user) {
    await User.deleteOne({ _id })
    return { message: 'User removed successfully!' }
  }
  throw { message: 'User does not exists!' }
}

const authenticateUser = async (data) => {
  const { email, password } = data
  if (email && password) {
    const user = await User.findOne({ email })
    if (user) {
      const isValidUser = await bcrypt.compare(password, user.password)
      if (isValidUser) {
        return { isAuthenticated: true }
      }
      throw { message: 'Entered wrong Password!' }
    }
    throw { message: 'User does not exists!' }
  }
  throw { message: 'Entered wrong Email/Password!' }
}

module.exports = {
  getUsers, getUser, saveUser, removeUser, updateUser, authenticateUser
}
