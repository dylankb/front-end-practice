var HeaderView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(Handlebars.templates.header);
    $('header').html(this.$el);
  },
});
