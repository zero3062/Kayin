const express = require('express');
const router = express.Router();
const ctrl = require('./work.ctrl');
const bodyParser = require('body-parser');
const { checkTokens, checkUser } = require('../../middlewares/user');

var jsonParser = bodyParser.json()
 
router.get('/', jsonParser, ctrl.get_work);

router.get('/:id', jsonParser, ctrl.get_workContent);

router.post('/create', checkTokens, checkUser, jsonParser, ctrl.post_work);

module.exports = router;