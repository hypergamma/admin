var express = require('express');

var functions = require('./functions');
var admin = require('./admin');

var router = express.Router();

router.use('/functions', functions);
router.use('/admin', admin);


router.get('/', function (req, res){
  res.send("Server alive")
});

module.exports = router;
