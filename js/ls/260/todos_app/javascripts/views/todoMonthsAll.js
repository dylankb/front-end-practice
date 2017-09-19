var TodoMonthsAllView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'update', this.render);
  },
  render: function() {
    this.$el.empty();
    this.collection.each(this.renderNewTodoMonth, this);
  },
  renderNewTodoMonth: function(month) {
    var todoMonth = new TodoMonthView({ model: month });
    this.$el.append(todoMonth.el);
  },
});
