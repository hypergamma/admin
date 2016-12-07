var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/admin/admin.html'));
});


router.get('/template', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/template/template.html'));
});

router.get('/test', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/template/testui.html'));
});


module.exports = router;
