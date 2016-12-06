var express = require('express');
var router = express.Router();
var func = require('../db/func');
var file = require('../file/file');

router.post('/create', function (req, res) {
  var body = req.body;
  file.writeFunc(body, function(path) {
    body.path = path;
    func.addFunc(body, function(){
      // todo : 밀댈에게 호출
      res.send(body)
    })
  });
});

router.get('/test', function (req, res) {
  func.testFunc(function(result){
    res.send(result);
  });
});

module.exports = router;
