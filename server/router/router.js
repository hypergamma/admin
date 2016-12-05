var express = require('express');

var functions = require('./functions');

var router = express.Router();

router.use('/functions', functions);

router.get('/', function (req, res){
  res.send("yap yap")
});

module.exports = router;
