const { Model, DataTypes, Sequelize } = require('sequelize');

const USERS_TABLE = 'users';
const UsersSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createAt: {
    allowNull: false,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
    type: DataTypes.DATE,
  }
}

class User extends Model {
  static associations() {
    //
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: USERS_TABLE,
      modelName: 'User',
      timestamp: false,
    }
  }
}

module.exports = { USERS_TABLE, UsersSchema, User }
