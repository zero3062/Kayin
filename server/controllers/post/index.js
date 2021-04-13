const express = require('express');
const router = express.Router();
const ctrl = require('./post.ctrl');
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json()
 
router.get('/', jsonParser, ctrl.get_notice);

module.exports = router;