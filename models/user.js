'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [['male', 'female']],
          msg: 'Gender diisi dengan male / female, tidak boleh di antaranya'
        }
      }
    },
    age: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 18,
          msg: 'Masih kecil ga boleh dugem, nanti dimarahin mama'
        }
      }
    }
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Place, {
      through: 'UserPlace',
      foreignKey: 'userId',
      otherKey: 'placeId'
    })
    User.belongsToMany(models.Genre, {
      through: 'UserGenre',
      foreignKey: 'userId',
      otherKey: 'genreId'
    })
    User.beforeCreate((user, options) => {
      return bcrypt.hash(user.password, 10)
        .then(hash => {
          user.password = hash
        })
        .catch(error => {
          res.send(error);
        })
    })
    User.prototype.login = function(password, callback) {
      bcrypt.compare(password, this.password)
        .then(isLoggedin => {
          callback(isLoggedin);
        })
        .catch(error => {
          res.send(error);
        });
    };
  };
  return User;
};
