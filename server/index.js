var express = require('express');

var router = require('./router/router');

var app = express();

app.use('/', router);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
