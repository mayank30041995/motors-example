const { Wheel } = require('../database/models/index')

const createWheel = async ({ name, categoryId }) => {
  const wheel = await Wheel.create({
    name: 'mayank2',
    numberOfWheels: 2,
    categoryId: 1,
  })
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
