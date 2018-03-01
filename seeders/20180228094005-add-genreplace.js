'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('GenrePlaces', [
      {
        genreId: 1,
        placeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        genreId: 2,
        placeId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        genreId: 3,
        placeId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        genreId: 1,
        placeId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        genreId: 4,
        placeId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        genreId: 5,
        placeId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        genreId: 7,
        placeId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        genreId: 1,
        placeId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('GenrePlaces', null, {});
  }
};
