var path = require('path');
var Sushi = require(path.resolve(path.dirname(__dirname), 'modules/sushi'));

exports.route = function getRequestMenu(req, res) {
  res.render('menu', { sushiCollection: Sushi.get() });
};

exports.detail = function getRequestMenuItem(req, res) {
  var sushi = Sushi.get();
  var currentItem = _(sushi).findWhere({ id: req.body.id });
  res.json(currentItem);
};
