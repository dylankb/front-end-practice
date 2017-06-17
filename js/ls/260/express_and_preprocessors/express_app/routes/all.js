var express = require('express');
var router = express.Router();
var _ = require("underscore");


module.exports = function(app) {
  function setActiveNavTo(title) {
    var activeItem =  _(app.locals.links).findWhere({ active: true });
    if (activeItem) { activeItem.active = false; }
    _.findWhere(app.locals.links, { title: title }).active = true;
  }

  /* GET home page. */
  router.get('/', function(req, res, next) {
    var title = "Web Store";

    setActiveNavTo(title);

    // res.sendFile(__dirname.replace(/routes/, 'views') + '/index.html'); // , {
    res.render('index', {
      title: title,
    });
  });

  router.get('/about', function(req, res, next) {
    var title = "About";

    setActiveNavTo(title);

    res.render('about', {
      title: title,
    });
  });

  return router;
}