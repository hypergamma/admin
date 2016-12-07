var express = require('express');

var router = require('./router/router');
var bodyParser = require('body-parser');
var influx = require('./influxdb/config');
var app = express();

var port = process.argv[2] || 8080;

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use('/', router);


app.listen(port, function () {
  console.log('Example app listening on '+port)
});

console.log(influx);