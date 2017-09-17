var MainTodosView = Backbone.View.extend({
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'update sort change:title change:dueDate', this.render);
    this.listenTo(this.collection, 'change:completed', this.sortCompleted);
  },
  events: {
    'click .todo-title': 'displayEditTodoModal',
    'click .todo-item-container': 'processToggleState',
    'click .trash-icon': 'processDeleteTodo',
  },
  displayEditTodoModal: function(e) {
    e.preventDefault();
    e.stopPropagation();
    var id = App.getTodoId(e, 'tr');
    this.TodoModalView = new TodoModalView({ model: App.Todos.get(id) });
    this.$el.append(this.TodoModalView.el);
  },
  processDeleteTodo: function(e) {
    e.preventDefault();
    var id = App.getTodoId(e, 'tr');
    var filterMonth = window.localStorage.getItem('filterMonth');
    App.Todos.trigger('REMOVE_TODO', id);
    var todosGroup = filterMonth ? App.TodoMonths.get(filterMonth) : App.Todos;
    var headingText = todosGroup ? todosGroup.models.length : '0';

    App.saveToLocalStore();

    App.updateMainTodosCount(headingText);
  },
  processToggleState: function(e) {
    e.preventDefault();
    var id = App.getTodoId(e, 'tr');
    var filterMonth = window.localStorage.getItem('filterMonth');
    var filterMonthType = window.localStorage.getItem('filterMonthType');
    App.Todos.trigger('TOGGLE_TODO_STATE', id);
    App.saveToLocalStore();

    var todosGroup = filterMonth ? App.TodoMonths.get(filterMonth) : App.Todos;

    App.updateMainTodosCount(todosGroup.completed().length);
  },
  sortCompleted: function() {
    this.collection.sort();
  },
  render: function() {
    this.$el.html(App.templates.todoItems({ todoItems: this.collection.toJSON() }));
  },
});
