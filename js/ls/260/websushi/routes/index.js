var express = require('express');
var router = express.Router();
var path = require('path');
var Sushi = require(path.resolve(path.dirname(__dirname), 'modules/sushi'));

/* GET home page. */
router.get('/', function rootRoute(req, res) {
  res.render('index', { sushiCollection: Sushi.get() });
});

router.get('/checkout', function rootRoute(req, res) {
  res.render('checkout', { sushiCollection: Sushi.get() });
});

router.get('/menu', function rootRoute(req, res) {
  res.render('menu', { sushiCollection: Sushi.get() });
});

module.exports = router;
