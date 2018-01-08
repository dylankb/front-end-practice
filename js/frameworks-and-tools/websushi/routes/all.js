var express = require('express');
var router = express.Router();
var path = require('path');
var index = require('./index');
var checkout = require('./checkout');
var menu = require('./menu');
var nutrition = require('./nutrition');

var Sushi = require(path.resolve(path.dirname(__dirname), 'modules/sushi'));
var Nutrition = require(path.resolve(path.dirname(__dirname), 'modules/nutrition'));

/* GET home page. */
router.get('/', index.route);

/* GET checkout page. */
router.get('/checkout', checkout.route);

/* GET home page via menu. */
router.get('/menu', menu.route);
router.get('/menu/:id', menu.route);

/* GET nutritional data endpoint. */
router.get('/nutrition/:id', nutrition.route);

module.exports = router;
