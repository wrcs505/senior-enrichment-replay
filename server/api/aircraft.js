const router = require('express').Router();
const { Aircraft } = require('../db/models');

// GET Routes


// GET all aircraft: api/aircraft
router.get('/', function (req, res, next) {
  Aircraft.findAll()
    .then(aircraft => res.json(aircraft))
    .catch(next);
});

// GET aircraft by ID: api/aircraft/:id

router.get('/:aircraftId', function (req, res, next) {
  Aircraft.findById(req.params.aircraftId)
    .then(aircraft => res.json(aircraft))
    .catch(next);
});

//GET aircraft by type: api/aircraft/types/:type

router.get('/types/:type', function (req, res, next) {
  console.log('route log test')
  Aircraft.getAircraftByType(req.params.type)
    .then(aircraftList => {
      console.log('the route log: ', aircraftList)
      res.json(aircraftList)
    })
    .catch(next);
});

// POST new aircraft: api/aircraft

router.post('/', function (req, res, next) {
	Aircraft.create(req.body)
	.then(aircraft => res.json(aircraft))
	.catch(next);
});

// PUT a single aircraft: api/aircraft/:aircraftId

router.put('/:aircraftId', function (req, res, next) {
  const aircraftId = req.params.aircraftId;
  Aircraft.findById(aircraftId)
		.then(aircraft => aircraft.update(req.body))
		.then(res.sendStatus(204))
    .catch(next);
});

// DELETE a single aircraft: api/aircraft/:aircraftId

router.delete('/:aircraftId', function (req, res, next) {
  const ID = req.params.aircraftId;
  Aircraft.destroy({where: {ID}})
		.then(aircraft => aircraft.update(req.body))
		.then(res.sendStatus(204))
    .catch(next);
});

module.exports = router;
