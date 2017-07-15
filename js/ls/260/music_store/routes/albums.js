var express = require('express');
var path = require('path');
var fs = require('fs')
var filePath = path.resolve(path.dirname(__dirname), 'data/albums.json');
var router = express.Router();

function getAlbums() {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function getFormData() {
  $('#album_new').find('form').serializeForm().reduce(function(acc, input) {
    return acc.input.key = input.value;
  }, {});
}

/* GET home page. */
router.get('/albums/new', function(req, res) {      // responding to index path
  res.render('new'); // take index jade view, and pass it data
});

module.exports = router;
