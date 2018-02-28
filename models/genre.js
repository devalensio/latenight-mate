'use strict';
module.exports = (sequelize, DataTypes) => {
  var Genre = sequelize.define('Genre', {
    name: DataTypes.STRING
  }, {});
  Genre.associate = function(models) {
    Genre.belongsToMany(models.User, {
      through: 'UserGenre',
      foreignKey: 'genreId',
      otherKey: 'userId'
    })
  };
  return Genre;
};
