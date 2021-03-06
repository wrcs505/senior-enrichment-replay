'use strict';
const Sequelize = require('sequelize');
const { db } = require('../_db.js');

const Aircraft = db.define('aircraft', {
  make: {
    type: Sequelize.STRING,
    allowNull: false
  },
  model: {
    type: Sequelize.STRING,
    allowNull: false
  },
  year: {
    type: Sequelize.DECIMAL,
    validate: {
      min: 1903,
      max: 2018
    }
  },
  type: {
    type: Sequelize.ENUM('Attack', 'Bomber', 'Versatile', 'Transport', 'Reconoissance', 'Rescue')
  },
  cost: {
    type: Sequelize.DECIMAL,
    get() {
      return this.getDataValue('cost') + 'm';
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  description: {
    type: Sequelize.TEXT,
  }
})


// Other questions:
// 1 Use cases for class vs instance methods in model def
// 2 Where to store images--in public?
// 3 Seed dummy data for testing?
// 4 Naming convention for sequelize files--upper or lowercase?
// Naming counvention for models--singlular or plural (i.e. Country vs Countries, Aircraft)

Aircraft.getAircraftByType = function(type) {
  return this.findAll({
    where: {
      type: type
    }
  })
  .catch(err => err)
}

module.exports = Aircraft;
