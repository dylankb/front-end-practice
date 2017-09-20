var TodoMonthView = Backbone.View.extend({
  initialize: function() {
    this.render();
    this.listenTo(this.model.Todos, 'update', this.renderMonthTodosCount);
  },
  events: {
    'click .todo-month-container': this.renderTodosByMonth,
  },
  render: function() {
    this.$el.html(App.templates.monthTodos({
      month: this.model.toJSON(),
      todosCount: this.model.completed().length,
    }));
  },
  renderTodosByMonth: function() {
    this.trigger('DISPLAY_BY_MONTH', this.model.get('dateKey'));
  },
  renderMonthTodosCount: function() {
    this.$('.todo-month-count').html(this.model.Todos.length);
  },
});
