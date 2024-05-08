const { User, Wheel } = require('../database/models/index')

const createUser = async ({ firstName, lastName, wheelId }) => {
  try {
    const user = await User.create({ firstName, lastName, wheelId })
    return user
  } catch (err) {
    return err
  }
}

const listAllUsers = async () => {
  const users = await User.findAll()

  let results = JSON.parse(JSON.stringify(users))
  const data = await results.map(
    async (p) => await User.findByPk(p.id, { include: Wheel })
  )
  if (!data) return 'Data not found'

  return Promise.all(data).then((values) => {
    return values
  })
  //   return results
}

module.exports = {
  createUser,
  listAllUsers,
}
