var CheckoutItemView = Backbone.View.extend({
  attributes: function() {
    return {
      'data-id': this.model.attributes.id,
    };
  },
  decrementQuantity: function() {
    App.Cart.trigger('REMOVE_ITEM', this.model);
  },
  events: {
    'click .fa-plus': 'incrementQuantity',
    'click .fa-minus': 'decrementQuantity',
  },
  incrementQuantity: function() {
    App.Cart.trigger('ADD_ITEM', this.model);
  },
  initialize: function() {
    this.render();
    this.listenTo(this.model, 'change:quantity', this.render);
    this.listenTo(this.model, 'remove', this.remove);
    this.listenTo(this.collection, 'add', this.renderCheckoutItem);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  tagName: 'tr',
  template: Handlebars.templates.checkoutItem,
});
