var express = require('express');

var router = require('./router/router');
var bodyParser = require('body-parser');

var app = express();

var port = process.argv[2] || 8080;

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use('/', router);

console.log(process.argv[2]);

app.listen(port, function () {
  console.log('Example app listening on '+port)
});
