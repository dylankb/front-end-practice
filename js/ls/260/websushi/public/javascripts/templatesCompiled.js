(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['cart'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul>\n  <li data-id=\"1\">\n    <figure>\n      <img src=\"images/sashimi-salad.jpg\" alt=\"cart-item\">\n    </figure>\n    <p>2 x $12.00</p>\n  </li>\n</ul>\n<section>\n  <h3>Your<br>shopping cart</h3>\n  <p class=\"total\">$24.00</p>\n  <p></p>\n  <footer>\n    <a class=\"left empty_cart\" href=\"#\">Empty cart</a><!--\n    --><a class=\"right checkout\" href=\"/checkout\">Checkout</a>\n  </footer>\n</section>\n";
},"useData":true});
templates['header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a class=\"logo\" href=\"/\"><img src=\"images/logo.png\" alt=\"logo\"></a>\n<div class=\"cart\">\n  <a href=\"/\">\n    <span class=\"left\">Shopping Cart</span><span class=\"right\"><!--\n    --><span class=\"count\">1</span>\n      item\n    </span>\n  </a>\n</div>\n";
},"useData":true});
})();