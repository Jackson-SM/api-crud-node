const { DataTypes, Model } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
      },
    );
  }

  static associate(models) {
    this.hasMany(models.Task, { as: 'task', foreignKey: 'user_id' });
  }
}

module.exports = User;
