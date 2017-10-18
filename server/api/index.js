const router = require('express').Router(); 

//build more routes here. 
router.use('/aircraft', require('./aircraft'));


module.exports = router;