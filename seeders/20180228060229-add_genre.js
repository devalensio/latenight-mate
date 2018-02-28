'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('Genres', [{
      name: 'House',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'RnB',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Hip Hop',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Trance',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Trap',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkDelete('Genres', null, {});
  }
};
