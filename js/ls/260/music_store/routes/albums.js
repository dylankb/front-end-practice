var path = require('path');
var _ = require('underscore');
var Albums = require(path.resolve(path.dirname(__dirname), "modules/albums"));
// Relative path for the module

module.exports = function(router) {
  // router.route("/albums/:id")
  //   .get(function(req, res) {
  //   res.render('album', { albums: Albums.get() });

    /* If you wanted a JSON response */
    // var albums = Albums.get();
    // var currentAlbum = _(albums).findWhere({ id: Number(req.params.id) });
    // res.json(currentAlbum);
  // });

  router.route("/albums")
    // .get(function(req, res) {
    // res.json(Albums.get());  // Unecessary with Backbone config
  // })
  .post(function(req, res) {
    var album = req.body;
    var albums = Albums.get();

    album.id = Albums.getLastId() + 1;
    albums.push(album);
    Albums.set(albums) // update data in file
    res.json(album);  // send a response back
  }).put(function(req, res) {
    var albums = Albums.get();
    var currentAlbum = _(albums).findWhere({ id: req.body.id });

    _.extend(currentAlbum, req.body);
    Albums.set(albums);
    res.json(currentAlbum);
  }).delete(function(req, res) {
    var albums = _(Albums.get()).reject(function(a) {
      return a.id === +req.body.id;
    });

    Albums.set(albums);
    res.status(200).end();
    // Response on delete method can be success since will be using ajax.
  });

  /* GET /albums/new. */  // Unnecessary with current Backbone config
  // router.get('/albums/new', function(req, res) {
  //   res.render('new', {
  //     albums: Albums.get()
  //   });
  // });
}
