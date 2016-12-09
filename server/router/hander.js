var express = require('express');
var router = express.Router();
var influx = require('../influxdb/influx');

router.get('/data', function (req, res) {
  var nuser = req.query.nuser || '1';
  var nfunc = req.query.nfunc || '1';
  var limit = req.query.limit || 30;
  var pastseconds = new Date();
  pastseconds.setSeconds(pastseconds.getSeconds() - 10);
  pastseconds.setDate(pastseconds.getDate() - 1);
  var query = `select * from handler 
    where nuser = '${nuser}' 
    and nfunc = '${nfunc}'
    and time > '${pastseconds.toISOString().slice(0,19).replace('T', ' ')}'
    and time < '${new Date().toISOString().slice(0,19).replace('T', ' ')}'
    order by time desc 
    limit ${limit}`;
  influx.query(query).then(results => {
    res.send(results);
  }).catch(err => {
    res.status(500).send(err.stack)
  });


});


router.get('/callcount', function (req, res) {
  var nuser = req.query.nuser || '1';
  var nfunc = req.query.nfunc || '1';
  var limit = req.query.limit || 30;
  var pastseconds = new Date();
  pastseconds.setSeconds(pastseconds.getSeconds() - 10);
  pastseconds.setDate(pastseconds.getDate() - 1);
  var query = `select sum(num_invokes) from handler 
    where nuser = '${nuser}' 
    and nfunc = '${nfunc}'
    and time > '${pastseconds.toISOString().slice(0,19).replace('T', ' ')}'
    and time < '${new Date().toISOString().slice(0,19).replace('T', ' ')}'
    group by time(500ms) fill(0)
    order by time desc 
    limit ${limit}`;
  console.log(query);
  influx.query(query).then(results => {
    res.send(results);
  }).catch(err => {
    res.status(500).send(err.stack)
  });

});

router.get('/test', function (req, res) {
  var result = '';
  influx.query('select * from handler where nuser = \'geunho\' order by time desc limit 30').then(results => {
    results.forEach(row => result += JSON.stringify(row) + '<br>');
    res.send(result);
  }).catch(err => {
    res.status(500).send(err.stack)
  });


});

module.exports = router;
