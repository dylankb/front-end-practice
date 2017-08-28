(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['cartItem'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<figure>\n  <img src=\"images/"
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\"cart-item\">\n</figure>\n<p>"
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + " x $"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"useData":true});
templates['cartSummary'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h3>Your<br>shopping cart</h3>\n<p class=\"total\">$"
    + container.escapeExpression(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"total","hash":{},"data":data}) : helper)))
    + "</p>\n<p></p>\n<footer>\n  <a class=\"left empty_cart\" href=\"#\">Empty cart</a><!--\n  --><a class=\"right checkout\" href=\"/checkout\">Checkout</a>\n</footer>\n";
},"useData":true});
templates['checkout'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"img_top\"></div>\n<section>\n  <h1>Order Details</h1>\n  <table>\n    <thead>\n      <tr>\n        <th>Item</th>\n        <th></th>\n        <th>Quantity</th>\n        <th>Price</th>\n      </tr>\n    </thead>\n  </table>\n  <p>Total: <span class=\"total\">$"
    + container.escapeExpression(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"total","hash":{},"data":data}) : helper)))
    + "</span></p>\n  <footer>\n    <a href=\"/\">Cancel order</a>\n    <form action=\"/\" method=\"post\">\n      <input type=\"submit\" value=\"ORDER NOW!\">\n    </form>\n  </footer>\n</section>\n<div class=\"img_bottom\"></div>\n";
},"useData":true});
templates['checkoutItem'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<td><img src=\"images/"
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\"cart-item\"></td>\n<td>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\n<td>\n  <span class=\"quantity_modifier\">\n    <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\n  </span>\n  <p>1</p>\n  <span class=\"quantity_modifier\">\n    <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n  </span>\n</td>\n<td>$"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</td>\n";
},"useData":true});
templates['header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<a class=\"logo\" href=\"/\"><img src=\"images/logo.png\" alt=\"logo\"></a>\n<div class=\"cart\">\n  <a href=\"/\">\n    <span class=\"left\">Shopping Cart</span><span class=\"right\"><!--\n    --><span class=\"count\">"
    + container.escapeExpression(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"count","hash":{},"data":data}) : helper)))
    + "</span>\n      item\n    </span>\n  </a>\n</div>\n";
},"useData":true});
templates['menu'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul id=\"items\">\n</ul>\n";
},"useData":true});
templates['menuItems'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <li data-id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ">\n    <article>\n      <header>\n        <figure>\n          <img src=\"images/"
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\"menu-item\">\n        </figure>\n        <h2 class=\"name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n      </header>\n      <p class=\"price\">$"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</p>\n      <footer>\n        <a href=\"#\" class=\"add_cart\">Add to cart</a>\n      </footer>\n    </article>\n  </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();