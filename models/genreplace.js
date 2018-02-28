'use strict';
module.exports = (sequelize, DataTypes) => {
  var GenrePlace = sequelize.define('GenrePlace', {
    genreId: DataTypes.INTEGER,
    placeId: DataTypes.INTEGER
  }, {});
  GenrePlace.associate = function(models) {
    GenrePlace.belongsTo(models.Genre, {foreignKey: 'genreId'})
    GenrePlace.belongsTo(models.Place, {foreignKey: 'placeId'})
  };
  return GenrePlace;
};
