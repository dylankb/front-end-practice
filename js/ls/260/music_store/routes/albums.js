var path = require('path');
var fs = require('fs')
var filePath = path.resolve(path.dirname(__dirname), 'data/albums.json');

function getAlbums() {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function getFormData() {
  $('#album_new').find('form').serializeForm().reduce(function(acc, input) {
    return acc.input.key = input.value;
  }, {});
}

module.exports = function(router) {
  /* GET /albums/new. */
  router.get('/albums/new', function(req, res) { 
    res.render('new');
  });
}
