const db = require('../_db');
const Sequelize = require('sequelize');

let Country = db.define('country', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    GFI: {
        type: Sequelize.FLOAT,
        validate: {
            min: 0,
            max: 10
        }
    }
})

// let Aircraft = require('./aircraft');

// Country.prototype.getAircraft = function(){
//     return Aircraft.findAll({
//         where: {
//             countryId: this.id
//         }
//     })
// }



module.exports = Country;
//import is NOT a real thing.
