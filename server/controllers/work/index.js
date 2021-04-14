const express = require('express');
const router = express.Router();
const ctrl = require('./work.ctrl');
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json()
 
router.get('/', jsonParser, ctrl.get_work);

router.get('/:id', jsonParser, ctrl.get_workContent);

router.post('/create', jsonParser, ctrl.post_work);

module.exports = router;