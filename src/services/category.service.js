const { Category, Wheel } = require('../database/models/index')

const createCategory = async ({ name, wheelId }) => {
  try {
    const category = await Category.create({ name, wheelId })
    return category
  } catch (err) {
    return err
  }
}

const listAllCategories = async ({ wheelId }) => {
  const filter = {}

  if (wheelId) {
    filter.wheelId = wheelId
  }
  const categories = await Category.findAll({
    where: filter,
  })

  return categories
}

module.exports = {
  createCategory,
  listAllCategories,
}
