var TodoMonthView = Backbone.View.extend({
  initialize: function() {
    this.render();
    this.listenTo(this.model.Todos, 'update', this.renderMonthTodosCount);
    this.listenTo(this.model.collection, 'remove', this.removeTodoMonth);
  },
  events: {
    'click .todo-month-container': this.renderTodosByMonth,
  },
  render: function() {
    this.$el.html(App.templates.monthTodos({
      month: this.model.toJSON(),
    }));
  },
  removeTodoMonth: function() {
    if (this.model.Todos.models.length === 1) { this.remove(); }
  },
  renderTodosByMonth: function() {
    this.trigger('DISPLAY_BY_MONTH', this.model.get('dateKey'));
  },
  renderMonthTodosCount: function() {
    this.$('.todo-month-count').html(this.model.Todos.length);
  },
});
