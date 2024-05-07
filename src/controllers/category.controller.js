const categoryService = require('../services/category.service')

const listAllCategory = async (req, res) => {
  res.status(200).json(await categoryService.listAllCategory())
}

const createCategory = async (req, res) => {
  const category = await categoryService.createCategory(req.body)
  res.status(201).json(category)
}

module.exports = {
  listAllCategory,
  createCategory,
}
