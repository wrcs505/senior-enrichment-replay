const router = require('express').Router();
const { Country } = require('../db/models');
const { Aircraft } = require('../db/models');

// GET Routes


// GET all countries: api/countries/
router.get('/', function (req, res, next) {
  Country.findAll({include: {model: Aircraft}})
    .then(country => res.json(country))
    .catch(next);
});

// GET top 5 GFI, highest to lowest:

router.get('/topfive', function (req, res, next) {

  Country.getTopFive()
    .then(countryList => {
      // console.log('the route log: ', countryList)
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
  console.log('backend log: ', req.body)
	Country.findOrCreate({where:{name: req.body.name}})
  .spread((country, bool) => {
    return country.update({
      name: req.body.name,
      GFI: req.body.GFI
    })
  })
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

router.delete('/:countryName', function (req, res, next) {
  const name = req.params.countryName;
  Country.destroy({where: { name }})
		.then(res.sendStatus(204))
    .catch(next);
});

module.exports = router;
