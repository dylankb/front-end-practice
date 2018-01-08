var path = require('path');
var _ = require('underscore');
var Nutrition = require(path.resolve(path.dirname(__dirname), 'modules/nutrition'));

exports.route = function getRequestNutrition(req, res) {
  var nutrition = Nutrition.get();

  var selectedItemNutritionInfo = _(nutrition).findWhere({ id: Number(req.params.id) });
  res.json(selectedItemNutritionInfo);
};
