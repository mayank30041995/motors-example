const wheelService = require('../services/wheel.service')

const listAllWheels = async (req, res) => {
  res.status(200).json(await wheelService.listAllWheels())
}

const createWheel = async (req, res) => {
  const book = await wheelService.createWheel(req.body)
  res.status(201).json(book)
}

module.exports = {
  listAllWheels,
  createWheel,
}
