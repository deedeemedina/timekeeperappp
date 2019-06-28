var router = require('express').Router();

router.use('/users', require('./users'));
router.use('/timeEntries', require('./timeEntries'));
router.use('/ping', require('./ping'));

module.exports = router;