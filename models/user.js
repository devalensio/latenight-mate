'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Place, {
      through: 'UserPlace',
      foreignKey: 'userId',
      otherKey: 'placeId'})
    User.belongsToMany(models.Genre, {
      through: 'UserGenre',
      foreignKey: 'userId',
      otherKey: 'genreId'
    })
  };
  return User;
};
