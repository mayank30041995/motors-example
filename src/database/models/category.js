const createCategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      name: { type: DataTypes.STRING, allowNull: false },
      wheelId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      underscored: true,
      tableName: 'categories',
    }
  )

  Category.associate = (models) => {
    Category.belongsTo(models.Wheel)
  }
 
  return Category
}

module.exports = createCategoryModel
