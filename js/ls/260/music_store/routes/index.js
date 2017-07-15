var express = require('express');
var path = require('path'); // sets a normalized path for the file. As long as view directory relative to that file, the path will be correct

var fs = require('fs')
var filePath = path.resolve(path.dirname(__dirname), 'data/albums.json');
var router = express.Router();

function getAlbums() {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

module.exports = function(router) {
  /* GET home page. */
  router.get('/', function(req, res, next) {      // responding to index path
    res.render('index', { albums: getAlbums() }); // take index jade view, and pass it data
  });
}
