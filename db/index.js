const db = require('./_db'); 

//want to put associations here. 
const Country = require('./models/country'); 
const Aircraft = require('./models/aircraft'); 


//Aircraft.getAirplanesByCountry
//Country.getAircraft()
Aircraft.belongsTo(Country);
Country.hasMany(Aircraft); 

Aircraft.belongsTo(Aircraft, {as: 'previous'});

module.exports = {
    db,
    Country,
    Aircraft
};