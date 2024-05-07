const createCategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      name: DataTypes.STRING,
    },
    {
      underscored: true,
      tableName: 'categories',
    }
  )

  return Category
}

module.exports = createCategoryModel
