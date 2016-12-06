var express = require('express');

var router = require('./router/router');
var bodyParser = require('body-parser');

var app = express();


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use('/', router);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
