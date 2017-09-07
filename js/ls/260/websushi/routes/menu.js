var path = require('path');
var Sushi = require(path.resolve(path.dirname(__dirname), 'modules/sushi'));

exports.route = function getRequestMenu(req, res) {
  res.render('menu', { sushiCollection: Sushi.get() });
};
