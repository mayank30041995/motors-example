const createUserModel = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      wheelId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      underscored: true,
      tableName: 'users',
    }
  )

  User.associate = (models) => {
    User.belongsTo(models.Wheel)
  }

  return User
}

module.exports = createUserModel
