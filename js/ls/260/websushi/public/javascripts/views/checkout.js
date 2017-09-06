var CheckoutView = Backbone.View.extend({
  attributes: {
    id: 'checkout',
  },
  destroyOrder: function() {
    App.trigger('EMPTY_CART'); // prevent default action breaks document click/submit listeners
  },
  events: {
    'click .destroy-order': 'destroyOrder',
  },
  initialize: function() {
    this.Total = new CheckoutTotal({ collection: this.collection });
    this.ItemsList = new CheckoutItems({ collection: this.collection });
    this.render();
  },
  render: function() {
    this.$el.html(this.template);
    this.ItemsList.setElement(this.$('.checkout-items-list')).render();
    this.Total.setElement(this.$('.checkout-total')).render();
    App.$content.html(this.el);
  },
  template: Handlebars.templates.checkout,
});
