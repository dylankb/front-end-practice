var TodoMonthsCompletedView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(App.Todos, 'change:completed', this.render);
  },
  render: function() {
    this.$el.empty();
    _(this.collection.withCompletedTodos()).each(this.renderNewTodoMonth, this);
  },
  renderNewTodoMonth: function(month) {
    var todoMonth = new TodoMonthCompletedView({ model: month });
    this.$el.append(todoMonth.el);
  },
});
