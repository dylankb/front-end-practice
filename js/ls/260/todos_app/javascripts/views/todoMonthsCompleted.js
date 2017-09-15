var TodoMonthsCompletedView = Backbone.View.extend({
  initialize: function() {
  },
  render: function() {
    _(this.collection.withCompletedTodos()).each(this.renderNewTodoMonth, this);
  },
  renderNewTodoMonth: function(month) {
    var todoMonth = new TodoMonthCompletedView({ model: month });
    this.$el.append(todoMonth.el);
  },
});
