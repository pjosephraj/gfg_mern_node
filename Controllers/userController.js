const userService = require('../Services/userService')

// Get Users List
const getUsers = async (req, res) => {
  const data = await userService.getUsers()
  res.send({ data })
}

// Get User
const getUser = async (req, res) => {
  try {
    const data = await userService.getUser(req.params.id)
    res.send({ data })
  } catch (err) {
    res.status(400).send({ errors: { message: err.message || 'Unknown Server error!' } })
  }
}

// Save User
const saveUser = async (req, res) => {
  try {
    const data = await userService.saveUser(req.body)
    res.send({ data, message: 'User saved successfully' })
  } catch (err) {
    res.status(400).send({ errors: { message: err.customErrorMessage || err.message || 'Unknown Server error!' } })
  }

}

// Remove User
const removeUser = async (req, res) => {
  try {
    const data = await userService.removeUser(req.params.id)
    res.send({ message: data.message })
  } catch (err) {
    res.status(400).send({ errors: { message: err.message || 'Unknown Server error!' } })
  }
}

// Update User
const updateUser = async (req, res) => {
  try {
    const data = await userService.updateUser(req.body)
    res.send({ data, message: 'User updated successfully' })
  } catch (err) {
    res.status(400).send({ errors: { message: err.message || 'Unknown Server error!' } })
  }
}

// Authenticate User
const authenticateUser = async (req, res) => {
  try {
    const { isAuthenticated } = await userService.authenticateUser(req.body)
    res.send({ isAuthenticated, message: 'Authenticated successfully!' })
  } catch (err) {
    res.status(400).send({ errors: { message: err.message || 'Unknown Server error!' } })
  }
}

module.exports = {
  getUsers, getUser, saveUser, removeUser, updateUser, authenticateUser
}