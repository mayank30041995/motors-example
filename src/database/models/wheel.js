const createWheelModel = (sequelize, DataTypes) => {
  const Wheel = sequelize.define(
    'Wheel',
    {
      name: { type: DataTypes.STRING, allowNull: false },
      numberOfWheels: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      underscored: true,
      tableName: 'wheels',
    }
  )

  Wheel.associate = (models) => {
    Wheel.hasMany(models.Category)
  }

  return Wheel
}

module.exports = createWheelModel
