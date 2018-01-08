var path = require('path');
var Sushi = require(path.resolve(path.dirname(__dirname), 'modules/sushi'));

exports.route = function rootRoute(req, res) {
  res.render('index', { sushiCollection: Sushi.get() });
};
