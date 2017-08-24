(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a class=\"logo\" href=\"/\"><img src=\"images/logo.png\" alt=\"logo\"></a>\n<div class=\"cart\">\n  <a href=\"/\">\n    <span class=\"left\">Shopping Cart</span><span class=\"right\"><!--\n    --><span class=\"count\">1</span>\n      item\n    </span>\n  </a>\n</div>\n";
},"useData":true});
})();