const router = require('express').Router();
const { Country } = require('../db/models');

// GET Routes


// GET all countries: api/countries/
router.get('/', function (req, res, next) {
  Country.findAll()
    .then(country => res.json(country))
    .catch(next);
});

// GET top 5 GFI, highest to lowest:

router.get('/topfive', function (req, res, next) {

  Country.getTopFive()
    .then(countryList => {
      console.log('the route log: ', countryList)
      res.json(countryList)
    })
    .catch(next);
});

// GET country by ID: api/countries/:id (exclude description)

router.get('/:countryId', function (req, res, next) {
  Country.findById(req.params.countryId)
    .then(country => res.json(country))
    .catch(next);
});

// POST new country: api/countries

router.post('/', function (req, res, next) {
	Country.create(req.body)
	.then(country => res.json(country))
	.catch(next);
});

// PUT a single country: api/countries/:countryId

router.put('/:countryId', function (req, res, next) {
  const countryId = req.params.countryId;
  Country.findById(countryId)
		.then(country => country.update(req.body))
		.then(res.sendStatus(204))
    .catch(next);
});

// DELETE a single country: api/countries/:countryId

router.delete('/:countryId', function (req, res, next) {
  const ID = req.params.countryId;
  Country.destroy({where: {ID}})
		.then(country => country.update(req.body))
		.then(res.sendStatus(204))
    .catch(next);
});

module.exports = router;
