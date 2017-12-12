const router = require('express').Router();
const { Aircraft } = require('../db/models');
const { Country } = require('../db/models');

// GET Routes


// GET all aircraft: api/aircraft
router.get('/', function (req, res, next) {
  Aircraft.findAll({include: {model: Country}})
    .then(allAircraft => res.json(allAircraft))
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
  Aircraft.getAircraftByType(req.params.type)
    .then(aircraftList => {
      res.json(aircraftList)
    })
    .catch(next);
});

// POST new aircraft: api/aircraft

router.post('/', function (req, res, next) {
  console.log('backend log: ', req.body.make)
  const newAircraft = Aircraft.build(req.body)

  Aircraft.findOrCreate({where: {model: newAircraft.model}})
  .spread((aircraft, bool) => {
    if (!bool) {
      return aircraft.update({
        make: newAircraft.make,
        model: newAircraft.model,
        year: newAircraft.year,
        type: newAircraft.type,
        cost: newAircraft.cost,
        imageUrl: newAircraft.imageUrl,
        description: newAircraft.description
      })
    }
  })
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

router.delete('/:aircraftModel', function (req, res, next) {
  const model = req.params.aircraftModel;
  Aircraft.destroy({where: {model}})
		// .then(aircraft => aircraft.update(req.body))
		.then(res.sendStatus(204))
    .catch(next);
});

module.exports = router;
