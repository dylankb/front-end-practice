(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['cart'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul>\n  <li data-id=\"1\">\n    <figure>\n      <img src=\"images/sashimi-salad.jpg\" alt=\"cart-item\">\n    </figure>\n    <p>2 x $12.00</p>\n  </li>\n</ul>\n<section>\n  <h3>Your<br>shopping cart</h3>\n  <p class=\"total\">$24.00</p>\n  <p></p>\n  <footer>\n    <a class=\"left empty_cart\" href=\"#\">Empty cart</a><!--\n    --><a class=\"right checkout\" href=\"/checkout\">Checkout</a>\n  </footer>\n</section>\n";
},"useData":true});
templates['header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a class=\"logo\" href=\"/\"><img src=\"images/logo.png\" alt=\"logo\"></a>\n<div class=\"cart\">\n  <a href=\"/\">\n    <span class=\"left\">Shopping Cart</span><span class=\"right\"><!--\n    --><span class=\"count\">1</span>\n      item\n    </span>\n  </a>\n</div>\n";
},"useData":true});
templates['menu'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <li data-id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ">\n      <article>\n        <header>\n          <figure>\n            <img src=\"images/"
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\"menu-item\">\n          </figure>\n          <h2 class=\"name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n        </header>\n        <p class=\"price\">$"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</p>\n        <footer>\n          <a href=\"#\" class=\"add_cart\">Add to cart</a>\n        </footer>\n      </article>\n    </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul id=\"items\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.sushi : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true});
})();