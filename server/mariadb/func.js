var Client = require('mariasql');
var dbConfig = require('./config');

var func = {
  testFunc: testFunc,
  addFunc: addFunc
};


function testFunc(callback) {
  exec("SELECT * FROM FUNC", null, callback);
}

function addFunc(req, callback) {
  var query = "INSERT INTO FUNC (USER_NAME, FUNC_NAME, FUNC_PATH, FUNC_ENV, FUNC_ENV_VER) values (:nuser, :nfunc, :path, :func_env, :func_env_ver)";

  exec(query, req, callback);
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