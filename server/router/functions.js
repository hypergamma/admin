var express = require('express');
var router = express.Router();

router.get('/create', function (req, res) {
  // todo : DB에 넣는 작업 해야 함
  // todo : 실제 instance 생성은 상태 확인 하는 곳에서 보고...
  res.send('Done');
});

module.exports = router;
