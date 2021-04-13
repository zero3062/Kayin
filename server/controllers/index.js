const { Router } = require('express');
const router = Router()

router.use('/user', require('./user'));
router.use('/notice', require('./post'));

module.exports = router;