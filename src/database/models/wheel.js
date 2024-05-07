const createWriterModel = (sequelize, DataTypes) => {
  const Wheel = sequelize.define(
    'Wheel',
    {
      name: DataTypes.STRING,
      numberOfWheels: DataTypes.INTEGER,
    },

    {
      underscored: true,
      tableName: 'wheels',
    }
  )

  return Wheel
}

module.exports = createWriterModel
