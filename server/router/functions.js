var express = require('express');
var router = express.Router();
var func = require('../mariadb/func');
var file = require('../file/file');
var querystring = require('querystring');
var http = require('http');

router.post('/create', function (req, res) {
  var body = req.body;
  
  file.writeFunc(body, function(path) {
    body.path = body.nuser + '/' +body.nfunc;

    //var postData = JSON.stringify(body); //querystring.stringify(body);
    var postData = JSON.stringify(body);
    console.log(postData);
    var options = {
      hostname: '13.76.165.58',
      port: 8080,
      path: '/api/control/function',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    var req2 = http.request(options, (res2) => {
      console.log(`STATUS: ${res2.statusCode}`);
      res2.setEncoding('utf8');

      res2.on('data', (chunk) => {
        res.send(chunk)
      });

      // res2.on('end', () => {
      //   console.log('No more data in response.');
      // });
    });

    req2.on('error', (e) => {
      console.log(`problem with request: ${e.message}`);
      res.send(e)
    });

    // write data to request body
    req2.write(postData);
    req2.end();
  });
});

router.get('/test', function (req, res) {
  func.testFunc(function(result){
    res.send(result);
  });
});

module.exports = router;
