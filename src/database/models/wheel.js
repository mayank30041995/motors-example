const createWheelModel = (sequelize, DataTypes) => {
  const Wheel = sequelize.define(
    'Wheel',
    {
      name: DataTypes.STRING,
      numberOfWheels: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },

    {
      underscored: true,
      tableName: 'wheels',
    }
  )
  Wheel.associate = (models) => {
    Wheel.belongsTo(models.Category, {
      as: 'category',
      foreignKey: 'categoryId',
    })
  }
  return Wheel
}

module.exports = createWheelModel
