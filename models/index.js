const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false, // pour ne pas afficher les requêtes SQL dans la console, optionnel
});

const Blague = require('./blague')(sequelize, DataTypes);

module.exports = {
  sequelize,
  Blague,
};
