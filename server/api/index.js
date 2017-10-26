const router = require('express').Router(); 

router.use('/aircraft', require('./aircraft')); 
router.use('/countries', require('./country')); 

module.exports = router;