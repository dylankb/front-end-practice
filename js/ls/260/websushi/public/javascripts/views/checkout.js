var CheckoutView = Backbone.View.extend({
  attributes: {
    id: 'checkout',
  },
  destroyOrder: function() {
    App.trigger('EMPTY_CART');
  },
  events: {
    'click .cancel-order': 'destroyOrder',
    'submit input': 'destroyOrder',
  },
  initialize: function() {
    this.ItemsList = new CheckoutItems({ collection: this.collection });
    this.render();
  },
  render: function() {
    this.$el.html(this.template({ total: this.collection.total }));
    $('.content').html(this.$el);
    this.$el.find('table').append(this.ItemsList.el);
  },
  template: Handlebars.templates.checkout,
});
