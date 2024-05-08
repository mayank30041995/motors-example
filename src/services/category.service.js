const { Category, Wheel } = require('../database/models/index')

const createCategory = async ({ name, wheelId }) => {
  try {
    const category = await Category.create({ name, wheelId })
    return category
  } catch (err) {
    return err
  }
}

const listAllCategories = async () => {
  const categories = await Category.findAll()
  return categories
}

module.exports = {
  createCategory,
  listAllCategories,
}
