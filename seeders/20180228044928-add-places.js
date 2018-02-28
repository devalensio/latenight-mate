'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Places', [{
      name: 'Dragonfly',
      address: 'Jl. Jend. Gatot Subroto Kav. 23, Jakarta Pusat',
      priceRange: '$$$$',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Venue',
      address: 'Jl. Kemang Selatan no. 2, Jakarta Selatan',
      priceRange: '$$',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Jenja',
      address: 'Cilandak Town Square, Jakarta Selatan',
      priceRange: '$$$',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Blowfish',
      address: 'Jl. Jend. Gatot Subroto no. 42, Jakarta Pusat',
      priceRange: '$$$$',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Skye',
      address: 'Jl. MH Thamrin no. 1, Jakarta Pusat',
      priceRange: '$$$$',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Places', null, {});
  }
};
