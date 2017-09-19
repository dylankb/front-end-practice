var TodoMonthCompletedView = Backbone.View.extend({
  initialize: function() {
    this.render();
    this.listenTo(this.model.Todos, 'change:completed', this.renderMonthTodosCount);
  },
  events: {
    'click .todo-month-container': this.renderTodosByMonth,
  },
  render: function() {
    this.$el.html(App.templates.monthTodosCompleted(this.model.toJSON()));
    this.renderMonthTodosCount();
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
