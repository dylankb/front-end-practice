var TodosCollection = Backbone.Collection.extend({
  // list: {},
  count: function() {
    return Object.values(this.list).length;
  },
  completed: function() {
    return Object.values(this.list).reduce(function(acc, todo) {
      if (todo.completed) { acc.push(todo); }
      return acc;
    }, []);
  },
  createObject: function(todoInfo) {
    return new Todo(todoInfo);
  },
  createNewTodo: function(todoInfo) {
    var todo = new Todo(todoInfo);
    // todo.addToList();
    this.add(todo);
    todo.categorizeByMonth();
  },
  getTodos: function() {
    return Object.values(this.list);
  },
  loadList: function() {
    this.list = JSON.parse(localStorage.getItem('todosList')) || {};
    var todoObjects = Object.values(this.list);
    if (todoObjects) { this.loadTodosFromObjects(todoObjects); }
  },
  loadTodosFromObjects: function(todoObjects) {
    todoObjects.forEach(function(todoInfo) {
      // var todo = this.createObject(todoInfo);
      // todo.addToList();
      this.add(todoInfo);
    }.bind(this));
  },
  notCompleted: function() {
    return this.toJSON().reduce(function(acc, todo) {
      if (!todo.completed) { acc.push(todo); }
      return acc;
    }, []);
  },
  model: Todo,
  saveToLocalStore: function() {
    window.localStorage.setItem('todosList', JSON.stringify(this.toJSON()));
  },
});
