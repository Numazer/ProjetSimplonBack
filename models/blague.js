module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Blague', {
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reponse: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
