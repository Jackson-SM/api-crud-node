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
    this.belongsToMany(models.Task, { as: 'task', foreignKey: 'user_id', through: 'tasks' });
  }
}

module.exports = User;
