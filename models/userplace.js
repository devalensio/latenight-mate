'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserPlace = sequelize.define('UserPlace', {
    userId: DataTypes.INTEGER,
    placeId: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {});
  UserPlace.associate = function(models) {
    UserPlace.belongsTo(models.User, {foreignKey: 'userId'})
    UserPlace.belongsTo(models.Place, {foreignKey: 'placeId'})
  };
  return UserPlace;
};
