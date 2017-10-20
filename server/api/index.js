const router = require('express').Router(); 

//build more routes here. 
router.use('/aircraft', require('./aircraft'));
router.use('/countries', require('./country'));

module.exports = router;