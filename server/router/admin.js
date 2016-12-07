var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/template', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/template/template.html'));
});

module.exports = router;
