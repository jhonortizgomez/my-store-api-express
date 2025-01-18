const { User, UsersSchema } = require('./users');

function setupModels(sequelize){
  User.init(UsersSchema, User.config(sequelize))
};

module.exports = setupModels;
