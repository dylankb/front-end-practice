var express = require('express');
var path = require('path'); // sets a stable path for the file, no matter where the load is placed
var fs = require('fs')
var filePath = path.resolve(path.dirname(__dirname), 'data/albums.json');
var router = express.Router();

function getAlbums() {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

/* GET home page. */
router.get('/', function(req, res, next) {   // responding to index path
  res.render('index', { albums: getAlbums() }); // take index jade view, and pass it data
});

module.exports = router;
