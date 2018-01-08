var express = require('express');
var path = require('path');
var router = express.Router();

var routeFiles = ['index', 'albums'];

var i;
for (i = 0; i < routeFiles.length; i++) {
  /* eslint-disable global-require */
  require(path.resolve(path.dirname(__dirname), 'routes/' + routeFiles[i]))(router);
}

module.exports = router;
