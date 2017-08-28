var MenuView = Backbone.View.extend({
  attributes: {
    id: 'items',
  },
  render: function() {
    // this.$el.empty(); // Allows MenuItemView events to attach to DOM on re-render
    this.collection.each(this.renderMenuItem, this);
    $('.content').html(this.$el);
  },
  renderMenuItem: function(sushi) {
    var menuItem = new MenuItemView({ model: sushi });
    this.$el.append(menuItem.el);
  },
  tagName: 'ul',
});
