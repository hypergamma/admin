var Client = require('mariasql');
var dbConfig = require('../db/config');

var func = {
  testFunc: testFunc
};
function testFunc(callback) {
  var client = new Client(dbConfig);
  var result = "";
  var query = client.query("SELECT * FROM FUNC");
  query.on('result', function(res) {

    res.on('data', function(row) {
      result += JSON.stringify(row);
    }).on('end', function() {
      // 굳이 여기서 할게.. 없을듯
    });
  }).on('end', function() {
    callback(result);
  });

  client.end();
}

module.exports = func;