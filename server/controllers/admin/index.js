const express = require('express');
const router = express.Router();
const ctrl = require('./admin.ctrl');
const bodyParser = require('body-parser');
const { checkTokens, checkUser } = require('../../middlewares/user');

var jsonParser = bodyParser.json()
 
router.get('/notice', jsonParser, ctrl.get_noticeAdmin);

router.get('/work', jsonParser, ctrl.get_workAdmin);

router.get('/notice/:id', jsonParser, ctrl.get_adminNoticeContent); //notice 수정 부분 들어갈 때 가져올 값들

router.get('/work/:id', jsonParser, ctrl.get_adminWorkContent);

router.post('/edit/:id', jsonParser, ctrl.post_edit); //notice 수정 post

router.post('/publish/:id', jsonParser, ctrl.post_publish);

router.post('/delete/write', checkTokens, checkUser, jsonParser, ctrl.post_writeDelete);

router.post('/notice/delete/:id', checkTokens, checkUser, jsonParser, ctrl.post_noticeDelete); //noice 삭제

router.post('/work/delete/:id', checkTokens, checkUser, jsonParser, ctrl.post_workDelete);

module.exports = router;