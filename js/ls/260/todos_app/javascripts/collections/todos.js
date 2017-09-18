var TodosCollection = Backbone.Collection.extend({
  initialize: function() {
    this.on('TOGGLE_TODO_STATE', this.toggleTodoState);
    this.on('REMOVE_TODO', this.removeTodo);
    this.on('PROCESS_TODO_INFO', this.processTodoInfo);
  },
  comparator: 'completed',
  completed: function() {
    return this.toJSON().reduce(function(acc, todo) {
      if (todo.completed) { acc.push(todo); }
      return acc;
    }, []);
  },
  createObject: function(todoInfo) {
    return new Todo(todoInfo);
  },
  loadList: function() {
    var todos = JSON.parse(localStorage.getItem('todosList')) || {};
    if (todos.length) { this.reset(todos); }
    this.models.forEach(function(todo) {
      todo.categorizeByMonth();
    });
  },
  notCompleted: function() {
    return this.toJSON().reduce(function(acc, todo) {
      if (!todo.completed) { acc.push(todo); }
      return acc;
    }, []);
  },
  model: Todo,
  processTodoInfo: function(id, todoInfo, markComplete) {
    var filterMonth = window.localStorage.getItem('filterMonth');
    id ? this.get(id).set(todoInfo) : this.add(todoInfo);

    App.saveToLocalStore();
    App.updateMainTodosHeading('All todos');

    if (!markComplete) { App.styleActiveGroup('.all-todos'); }
  },
  removeTodo: function(id) {
    App.Todos.remove(id);
  },
  toggleTodoState: function(id) {
    App.Todos.get(id).toggleState();
  },
  saveToLocalStore: function() {
    window.localStorage.setItem('todosList', JSON.stringify(this.toJSON()));
  },
});
