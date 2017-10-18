const db = require('../_db');
const Sequelize = require('sequelize');

let Aircraft = db.define('aircraft', {
    make: {
        type: Sequelize.STRING
    },
    model: {
        type: Sequelize.STRING
    },
    year: {
        type: Sequelize.INTEGER,
        validate: {
            min: 1903
        }
    },
    unit_cost: {
        type: Sequelize.INTEGER,
        getter: function(){
            let unitCost = this.getDataValue('unit_cost');
            return unitCost * 1000000;
        }
    }, 
    image_url: {
        type: Sequelize.STRING,
        defaultValue: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Lockheed_SR-71_Blackbird.jpg/800px-Lockheed_SR-71_Blackbird.jpg'
    }
})

Aircraft.hook('beforeValidate', (instance) => {
    if(instance.unit_cost > 1000000){
        instance.unit_cost %= 1000000;
    }
})

Aircraft.prototype.liveWithTheWrightBrother = function(){
    this.year = 1903;
}



module.exports = Aircraft;
//import is NOT a real thing.
