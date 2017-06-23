var path = require('path');
var router = require('express').Router();

// ROUTES - goes to root and returns html file
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

module.exports = router;