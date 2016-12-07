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

router.get('/test', function (req, res) {
  var result = '';
  influx.query('select * from handler order by time desc limit 30').then(results => {
    //results.forEach(row => result += `num_invokes ${row.num_invokes} num_errors ${row.num_errors} latency ${row.latency} \n`);
    results.forEach(row => result += JSON.stringify(row) + '<br>');
    res.send(result);
  });


});

module.exports = router;
