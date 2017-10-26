const db = require('./_db'); 
const Country = require('./models/country'); 
const Aircraft = require('./models/aircraft');

// PLACE ASSOCIATIONS HERE

module.exports = {
    db,
    Country,
    Aircraft
};