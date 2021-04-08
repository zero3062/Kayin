const express = require('express');
const router = express.Router();
const ctrl = require('./user.ctrl');

const bodyParser = require('body-parser');

var jsonParser = bodyParser.json()
 
router.post('/signup', jsonParser, ctrl.post_signup);

module.exports = router;