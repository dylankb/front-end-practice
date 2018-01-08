var path = require('path');
var Sushi = require(path.resolve(path.dirname(__dirname), 'modules/sushi'));

exports.route = function getRequestCheckout(req, res) {
  res.render('checkout', { sushiCollection: Sushi.get() });
};
