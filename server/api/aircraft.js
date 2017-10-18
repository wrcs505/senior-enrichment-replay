const router = require('express').Router(); 

const db = require('../../db');
const Aircraft = db.Aircraft;

//build more routes here.

// /api/aircraft
router.get('/', (req, res, next) => {
    Aircraft.findAll()
    .then(aircraft => {
        if(req.query.sorted){
            aircraft.sort((a,b) => a.year - b.year < 0)
        }
        res.json(aircraft);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
    let id = Number(req.params.id);
    Aircraft.findById(id)
    .then(aircraft => {
        res.json(aircraft);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
    Aircraft.create(req.body)
    .then(createdAircraft => {
        res.json({
            message: 'created successfully!',
            aircraft: createdAircraft
        })
    })
    .catch(next);
});

router.put('/:id', (req, res, next) => {
    let id = Number(req.params.id);
    Aircraft.findById(id)
    .then(aircraft => {
        return aircraft.update(req.body)
    })
    .then(updatedAircraft => {
        res.json({
            message: 'updated successfully!',
            aircraft: updatedAircraft
        })
    })
    .catch(next);
});

module.exports = router;