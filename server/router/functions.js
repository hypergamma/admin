var express = require('express');
var router = express.Router();
var func = require('../data/func');
router.get('/create', function (req, res) {
  func.testFunc(function(result){
    res.send(result);
  });
});

router.get('/test', function (req, res) {
  func.testFunc(function(result){
    res.send(result);
  });
});

module.exports = router;
