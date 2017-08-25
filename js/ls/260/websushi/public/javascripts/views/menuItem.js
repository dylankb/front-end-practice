var MenuItemView = Backbone.View.extend({
  attributes: function() {
    return {
      'data-id': this.model.attributes.id,
    };
  },
  addToCart: function(e) {
    e.preventDefault();

    App.trigger('ADD_TO_CART', this.model);
  },
  events: {
    'click .add_cart': 'addToCart',
  },
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  tagName: 'li',
  template: Handlebars.templates.menuItem,
});
