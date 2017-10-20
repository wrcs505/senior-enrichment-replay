const router = require('express').Router(); 

const db = require('../../db');
const Country = db.Country;

router.get('/:id/aircraft', (req, res, next) => {
    Country.findById(Number(req.params.id))
    .then(country => {
        return country.getAircraft()
    })
    .then(aircraft => {
        console.log(aircraft);
        res.json(aircraft);
    })
    .catch(next)
})  
module.exports = router; 
