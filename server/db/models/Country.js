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
    // validate: { min: 0, max: 11}
  },
  flagUrl: {
    type: Sequelize.STRING,
    defaultValue: ''
  }
})


Country.getTopFive = function() {
  console.log('model log test')

  const GFIarr = this.findAll()
    .then(countries => {
      console.log('the country map log: ', countries)
      // const GFIs = countries.map(country => country.GFI)
      const sorted = countries.sort((a, b) => b.GFI - a.GFI)
      return sorted.slice(0,5);
    })
    .catch(err => err)
  return GFIarr

}

module.exports = Country;
