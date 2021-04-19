const express = require('express');
const router = express.Router();
const ctrl = require('./user.ctrl');
const { checkTokens, checkUser } = require('../../middlewares/user');

const bodyParser = require('body-parser');

var jsonParser = bodyParser.json()
 
router.post('/signup', jsonParser, ctrl.post_signup);

router.post('/signin', jsonParser, ctrl.post_signin);

router.post('/forgot', jsonParser, ctrl.post_forgot);

router.get('/read', checkTokens, checkUser, ctrl.get_read);

module.exports = router;