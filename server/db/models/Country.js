'use strict';
var Sequelize = require('sequelize');
var { db } = require('../_db.js');

const Country = db.define('country', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  GFI: {
    type: Sequelize.DECIMAL,
    validate: {
      min: 0,
      max: 10
    }
  },
  flagUrl: {
    type: Sequelize.STRING,
    defaultValue: ''
  }
})


Country.getTopFive = function() {
  return (
    this.findAll()
    .then(country => {
      const sorted = country.sort((a, b) => b.GFI - a.GFI)
      return sorted.slice(4);
    })
  )
}

module.exports = Country;
