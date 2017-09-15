var TodoMonthCompletedView = Backbone.View.extend({
  initialize: function() {
    this.render();
    this.listenTo(this.model.Todos, 'change:completed', this.renderMonthTodosCount);
    this.listenTo(this.model.collection, 'remove', this.removeTodoMonth);
  },
  events: {
    'click .todo-month-container': this.renderTodosByMonth,
  },
  render: function() {
    this.$el.html(App.templates.monthTodosCompleted(this.model.toJSON()));
    this.renderMonthTodosCount();
  },
  removeTodoMonth: function() {
    if (this.model.Todos.models.length === 1) { this.remove(); }
    // this won't work, doesn't know if the removed item was completed or not
  },
  renderTodosByMonth: function() {
    this.trigger('DISPLAY_BY_MONTH', this.model.get('dateKey'));
  },
  renderCompletedTodosByMonth: function() {
    this.trigger('DISPLAY_COMPLETED_BY_MONTH', this.model.dateKey);
  },
  renderMonthTodosCount: function() {
    this.$('.todo-month-count').html(this.model.Todos.completed().length);
  },
});
