var CartItemView = Backbone.View.extend({
  attributes: function() {
    return {
      'data-id': this.model.attributes.id,
    };
  },
  initialize: function() {
    this.render();
    this.listenTo(this.model, 'change:quantity', this.render);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  tagName: 'li',
  template: Handlebars.templates.cartItem,
});
