var path = require('path');
var _ = require('underscore');
var Albums = require(path.resolve(path.dirname(__dirname), 'modules/albums'));
// Relative path for the module

module.exports = function routerFunc(router) {
  /* GET /albums/new. */
  router.get('/albums/new', function getRequestNew(req, res) {
    res.render('new', {
      albums: Albums.get(),
    });
  });

  router.route('/albums/:id')
    .get(function getRequestDetail(req, res) {
      res.render('detail', { albums: Albums.get() });
    })
    .put(function putRequestDetail(req, res) {
      var albums = Albums.get();
      var currentAlbum = _(albums).findWhere({ id: req.body.id });

      _.extend(currentAlbum, req.body);
      Albums.set(albums);
      res.json(currentAlbum);
    });

  router.route('/albums')
    .get(function getRequest(req, res) {
      res.json(Albums.get());
    })
    .post(function postRequest(req, res) {
      var album = req.body;
      var albums = Albums.get();

      album.id = String(Number(Albums.getLastId()) + 1);
      albums.push(album);
      Albums.set(albums, true); // update data in file
      res.json(album); // send a response back
    })
    .delete(function deleteRequest(req, res) {
      var albums = _(Albums.get()).reject(function findIdMatch(a) {
        return a.id === req.body.id;
      });

      Albums.set(albums);
      res.status(200).end();
      // Response on delete method can be success since will be using ajax.
    });
};
