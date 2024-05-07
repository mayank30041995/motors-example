const { Wheel } = require('../database/models/index')

const createWheel = async ({ name, userId }) => {
  const wheel = await Wheel.create({ name: 'mayank', numberOfWheels: 3 })
  return wheel
}

const listAllWheels = async () => {
  const wheels = await Wheel.findAll()
  return wheels
}

module.exports = {
  createWheel,
  listAllWheels,
}
