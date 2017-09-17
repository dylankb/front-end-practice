var ContentView = Backbone.View.extend({
  el: '.content',
  events: {
    'click .new-todo': 'displayTodoModal',
    'click .todo-title': 'displayEditTodoModal',
  },
  initialize: function() {
    this.render();
    this.MainTodosView = new MainTodosView({ collection: App.Todos, el: '.todos-main' });
  },
  displayTodoModal: function(e) {
    var id = App.getTodoId(e, 'tr');
    e.preventDefault();

    this.TodoModalView = new TodoModalView();
    this.$el.append(this.TodoModalView.el);
  },
  render: function() {
    this.$el.html(App.templates.content);
  },
});
