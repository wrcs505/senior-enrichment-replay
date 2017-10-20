const db = require('./_db'); 

//want to put associations here. 
const Country = require('./models/country'); 
const Aircraft = require('./models/aircraft'); 


//Aircraft.getAirplanesByCountry
Aircraft.belongsTo(Country);
//puts countryId on aircraft table. 

//if i have a country instance Country.prototype.
Country.hasMany(Aircraft); 

Aircraft.belongsTo(Aircraft, {as: 'previous'});

module.exports = {
    db,
    Country,
    Aircraft
};