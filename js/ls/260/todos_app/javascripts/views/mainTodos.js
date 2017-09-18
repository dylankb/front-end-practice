var MainTodosView = Backbone.View.extend({
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'update sort change:title change:dueDate', this.render);
    this.listenTo(this.collection, 'change:completed', this.sortCompleted);
  },
  el: '.todos-main',
  events: {
    'click .todo-title': 'displayEditTodoModal',
    'click .todo-item-container': 'processToggleState',
    'click .trash-icon': 'processDeleteTodo',
  },
  displayEditTodoModal: function(e) {
    e.preventDefault();
    e.stopPropagation();
    var id = App.getTodoId(e, 'tr');
    this.TodoModalView = new TodoModalView({ model: this.collection.get(id) });
    this.$el.append(this.TodoModalView.el);
  },
  processDeleteTodo: function(e) {
    var id = App.getTodoId(e, 'tr');
    e.preventDefault();

    App.Todos.trigger('REMOVE_TODO', id);
    App.saveToLocalStore();
  },
  processToggleState: function(e) {
    var id = App.getTodoId(e, 'tr');
    e.preventDefault();
    debugger;

    App.Todos.trigger('TOGGLE_TODO_STATE', id);
    App.saveToLocalStore();
  },
  sortCompleted: function() {
    this.collection.sort();
  },
  render: function() {
    debugger;
    var todosJSON = App.completedFilter ? this.collection.completed() : this.collection.toJSON();
    this.$el.html(App.templates.todoItems({ todoItems: todosJSON }));
  },
});
