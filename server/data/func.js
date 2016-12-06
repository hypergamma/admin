var Client = require('mariasql');
var dbConfig = require('../db/config');

var func = {
  testFunc: testFunc
};


function testFunc(callback) {
  exec("SELECT * FROM FUNC", null, callback);
}



function exec(query, params, callback) {
  var client = new Client(dbConfig);
  var prep = client.prepare(query);

  client.query(prep(params), function(err, rows){
    if(err) throw err;
    callback(rows)
  });

  client.end();
}

module.exports = func;