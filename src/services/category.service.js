const { Category } = require('../database/models/index')

const createCategory = async ({ name }) => {
  const category = await Category.create({ name: 'bikes' })
  return category
}

const listAllCategories = async () => {
  const categories = await Category.findAll()
  return categories
}

module.exports = {
  createCategory,
  listAllCategories,
}
