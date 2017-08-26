var CartView = Backbone.View.extend({
  attributes: {
    id: 'cart',
  },
  initialize: function() {

    this.render(); // render each image (or just first) when view is created on initialization - will need to address what to do with saved images since only creates view on add atm

    this.listenTo(this.collection, 'add', this.renderCartImage);
  },
  render: function() {
    this.$el.html(this.template);
    $('main').prepend(this.$el);

    this.collection.each(this.renderCartImage, this);
  },
  renderCartImage: function(item) {
    var cartItem = new CartItemView({ model: item });
    this.$el.find('.cart-items').append(cartItem.el);
  },
  template: Handlebars.templates.cart,
});
