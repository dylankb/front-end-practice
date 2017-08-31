var MenuItemDetail = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  attributes: {
    id: 'item_details',
  },
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    $('.content').prepend(this.$el);
  },
  template: Handlebars.templates.menuItemDetail,
});
