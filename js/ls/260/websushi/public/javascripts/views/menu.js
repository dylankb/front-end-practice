var MenuView = Backbone.View.extend({
  attributes: {
    id: 'items',
  },
  addToCart: function(e) {
    e.preventDefault();
    var id = $(e.target.closest('li')).data('id');

    App.trigger('ADD_TO_CART', id);
  },
  events: {
    'click .add_cart': 'addToCart',
  },
  render: function() {
    this.$el.html(this.template({ items: this.collection.toJSON() }));
    $('.content').html(this.$el);
  },
  tagName: 'ul',
  template: Handlebars.templates.menuItems,
});
