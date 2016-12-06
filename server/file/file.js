var fs = require('fs');

var startFilePath = '/mnt/functions';
var fileName = 'index.js';

var file = {
  writeFunc: writeFunc
};

function writeFunc(req, callback) {
  checkPath(req, function(path) {
    fs.writeFile(path + fileName, req.func, function(err) {
      if (err) throw err;
      callback(path)
    });

  });
}

function checkPath(req, callback) {
  var userPath = startFilePath+ '/'+ req.nuser;
  var funcPath = userPath + '/' + req.nfunc;
  fs.mkdir(userPath, function(err){
    if(!err || (err && err.code === 'EEXIST') ) {
      fs.mkdir(funcPath, function(err){
        if(!err || (err && err.code === 'EEXIST') ) {
          callback(funcPath + '/')
        } else {
          throw err
        }
      });
    } else {
      throw err
    }
  });
}

module.exports = file;