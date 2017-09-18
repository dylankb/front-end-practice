var Todo = Backbone.Model.extend({
  initialize: function(data) {
    if (!this.get('dueDate')) { this.set('dueDate', data.dueDate); }

    this.set('completed', data.completed || false);
    this.categorizeByMonth();
    this.setId(data);

    this.listenToOnce(this, 'remove', this.removeFromMonth);
  },
  setId: function(data) {
    if (data.id) {
      this.set('id', data.id);
      todoCounter(data.id);
    } else {
      this.set('id', todoCounter());
    }
  },
  categorizeByMonth: function() {
    var month = App.TodoMonths.get(this.getDateKey());
    if (!month) {
      month = new TodoMonth(this.getDateKey());
      App.TodoMonths.add(month);
    }
    // this.TodoMonth = month;
    month.Todos.add(this);
  },
  getDateKey: function() {
    if (!this.get('dueDate')) {  // When would there not be a dueDate? It's set in gatherForm inputs and initialize
      return "No Due Date";
    } else {
      return this.get('dueDate').replace(/(\d{4})-(\d{2})-(\d{2})/, '$1-$2-01'); // Hard coded '01' - should we just ignore day?
    }
  },
  removeFromMonth: function() {
    var month = App.TodoMonths.get(this.getDateKey());

    if (month.Todos.models.length === 1) {
      App.TodoMonths.remove(month);
    } else {
      month.Todos.remove(this);
    }
  },
  toggleState: function() {
    this.set('completed', !this.get('completed'));
  },
  updateTodo: function(todoInfo) {
    this.removeFromMonth();
    this.updateTodoInfo(todoInfo);
    this.categorizeByMonth();
  },
  updateTodoInfo: function(todoInfo) {
    return Object.assign(this, todoInfo);
  },
});
