const { Wheel, Category } = require('../database/models/index')

const createWheel = async ({ name, numberOfWheels, categoryId }) => {
  try {
    const wheel = await Wheel.create({
      name,
      numberOfWheels,
      categoryId,
    })
    return wheel
  } catch (err) {
    return 'Failed'
  }
}

const listAllWheels = async () => {
  const wheels = await Wheel.findAll()

  let results = JSON.parse(JSON.stringify(wheels))
  const data = await results.map(
    async (p) => await Wheel.findByPk(p.id, { include: Category })
  )
  if (!data) return 'Data not found'

  return Promise.all(data).then((values) => {
    return values
  })
}

module.exports = {
  createWheel,
  listAllWheels,
}
