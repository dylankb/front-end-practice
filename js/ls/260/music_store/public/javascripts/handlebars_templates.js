this["JST"] = this["JST"] || {};

this["JST"]["album"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!-- <img src=\""
    + alias4(((helper = (helper = helpers.cover || (depth0 != null ? depth0.cover : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cover","hash":{},"data":data}) : helper)))
    + "\"><a class=\"album-remove album-remove-index\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" href=\"#\">Delete</a><h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2><h3>"
    + alias4(((helper = (helper = helpers.artist || (depth0 != null ? depth0.artist : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artist","hash":{},"data":data}) : helper)))
    + "</h3><p>"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</p><p>$"
    + alias4((helpers.format_price || (depth0 && depth0.format_price) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"format_price","hash":{},"data":data}))
    + "</p> --><p><a href=\"albums/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">Test without Data - Edit</a><!-- <p><a href=\"albums/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">Edit</a><p><a class=\"button add-album\" href=\"#\">Add to cart</a></p> -->";
},"useData":true});

this["JST"]["cart"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=helpers.helperMissing;

  return alias2(helpers.log.call(alias1,(depth0 != null ? depth0.quantity : depth0),{"name":"log","hash":{},"data":data}))
    + "<section class=\"cart\"><label for=\"cart-toggle\">"
    + alias2(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + " items</label><input type=\"checkbox\" id=\"cart-toggle\"><div id=\"items\"><ul>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><p class=\"total\">$"
    + alias2((helpers.format_price || (depth0 && depth0.format_price) || alias3).call(alias1,(depth0 != null ? depth0.total : depth0),{"name":"format_price","hash":{},"data":data}))
    + "</p></div></section>";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li><a class=\"album-remove\" data-id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + " href=\"#\"></a>Remove "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " x "
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + "&mdash;<small>$"
    + alias4((helpers.format_price || (depth0 && depth0.format_price) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"format_price","hash":{},"data":data}))
    + "</small></li>";
},"4":function(container,depth0,helpers,partials,data) {
    return "<p class=\"no-items\">0 items</p>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.quantity : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["detail"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Album</h1><ul class=\"albums\"></ul>";
},"useData":true});

this["JST"]["index"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Albums</h1><ul class=\"albums\"></ul><footer><a class=\"button showForm\" href=\"/albums/new\">Add album</a></footer>";
},"useData":true});

this["JST"]["new"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"album_new\"><form action=\"/albums\" method=\"post\"><fieldset><h1>Add Album</h2><dl><dt><label>Title</label><dd><input type='text' name='title'><dt><label>Artist</label><dd><input type='text' name='artist'><dt><label>Date</label><dd><input type='date' name='date'><dt><label>Cover</label><dd><input type='url' name='cover'><dt><label>Price</label><dd><input type='text' name='price'></dd><fieldset class=\"actions\"><input type=\"submit\" value=\"Create\"></fieldset></div>";
},"useData":true});