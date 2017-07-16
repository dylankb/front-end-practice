var path = require('path');
var fs = require('fs')
var filePath = path.resolve(path.dirname(__dirname), 'data/albums.json');

function getAlbums() {
  return JSON.parse(fs.readFileSync(filePath, 'utf8')).data;
}

function nextID() {
  return JSON.parse(fs.readFileSync(filePath, "utf8")).last_id + 1;
}

function writeAlbums(data) {
  fs.writeFileSync(filePath, JSON.stringify(data), "utf8")
}

module.exports = function(router) {
  router.post("/albums", function(req, res) {
    var album = req.body;
    var albums = getAlbums();

    album.id = nextID();
    albums.push(album);
    writeAlbums({ lastID: album.id, data: albums }); // update data in file
    res.json(album);// send a response back
  });

  /* GET /albums/new. */
  router.get('/albums/new', function(req, res) {
    res.render('new');
  });
}
