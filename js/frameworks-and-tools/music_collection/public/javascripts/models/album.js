var Album = Backbone.Model.extend({
  parse: function(attrs) {  // current objects attributes
    attrs.tracks_url = "/albums/" + attrs.title;
    return attrs;
  }
});
