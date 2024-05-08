const userService = require('../services/user.service')

const listAllUsers = async (req, res) => {
  res.status(200).json(await userService.listAllUsers())
}

const createUser = async (req, res) => {
  const user = await userService.createUser(req.body)
  res.status(201).json(user)
}

module.exports = {
  listAllUsers,
  createUser,
}
