var express = require('express');
var router = express.Router();
var influx = require('../influxdb/influx');


// router.post('/create', function (req, res) {
//   var body = req.body;
//
//   file.writeFunc(body, function(path) {
//     body.path = path;
//     func.addFunc(body, function(){
//       // todo : 밀댈에게 호출
//       res.send(body)
//     })
//   });
// });


router.get('/data', function (req, res) {
  var nuser = req.query.nuser || '1';
  var nfunc = req.query.nfunc || '1';
  var limit = req.query.limit || 30;
  var query = `select * from handler 
    where nuser = ${nuser} 
    and nfunc = ${nfunc}
    order by time desc 
    limit ${limit}`;
  influx.query(query).then(results => {
    res.send(results);
  });


});

router.get('/test', function (req, res) {
  var result = '';
  influx.query('select * from handler order by time desc limit 30').then(results => {
    results.forEach(row => result += JSON.stringify(row) + '<br>');
    res.send(result);
  });


});

module.exports = router;
