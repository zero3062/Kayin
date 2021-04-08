const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>  {
    res.send({greeting: 'Hello react'});
});

module.exports = router;