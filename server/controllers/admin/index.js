const express = require('express');
const router = express.Router();
const ctrl = require('./admin.ctrl');
const bodyParser = require('body-parser');
const { checkTokens, checkUser } = require('../../middlewares/user');

var jsonParser = bodyParser.json()
 
router.get('/', jsonParser, ctrl.get_admin);

router.get('/:id', jsonParser, ctrl.get_adminContent);

router.post('/publish/:id', jsonParser, ctrl.post_publish);

router.post('/delete/write', checkTokens, checkUser, jsonParser, ctrl.post_writeDelete);

router.post('/delete/:id', checkTokens, checkUser, jsonParser, ctrl.post_delete);

module.exports = router;