'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserGenre = sequelize.define('UserGenre', {
    userId: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER
  }, {});
  UserGenre.associate = function(models) {
    UserGenre.belongsTo(models.User, {
      foreignKey: 'userId'
    })
    UserGenre.belongsTo(models.Genre, {
      foreignKey: 'genreId'
    })
  };
  return UserGenre;
};
