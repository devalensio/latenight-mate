'use strict';
module.exports = (sequelize, DataTypes) => {
  var Place = sequelize.define('Place', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    priceRange: DataTypes.STRING
  }, {});
  Place.associate = function(models) {
    // associations can be defined here
  };
  return Place;
};