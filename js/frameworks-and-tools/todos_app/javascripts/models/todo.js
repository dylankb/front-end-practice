var Todo = Backbone.Model.extend({
  initialize: function(data) {
    if (!this.get('dueDate')) { this.set('dueDate', data.dueDate); }

    this.set('completed', data.completed || false);
    this.categorizeByMonth();
    this.setId(data);

    this.on('REMOVE_TODO', this.remove);
    this.on('TOGGLE_TODO_STATE', this.toggleState);
    // this.listenTo would fire action twice - once when removed from App.Todos
    // and once again when removed from App.TodoMonths[i].Todos
    this.listenToOnce(this, 'remove', this.removeFromMonth);
  },
  setId: function(data) {
    if (data.id) {
      this.set('id', data.id);
      generateNextId(data.id);
    } else {
      this.set('id', generateNextId());
    }
  },
  categorizeByMonth: function() {
    var month = App.TodoMonths.get(this.getDateKey());
    if (!month) {
      month = new TodoMonth(this.getDateKey());
      App.TodoMonths.add(month);
    }
    month.Todos.add(this);
  },
  getDateKey: function() {
    if (this.get('dueDate') === 'No Due Date') {
      return 'No Due Date';
    } else {
      // Example transformation: 2017-07-16 -> 2017-07
      return this.get('dueDate').replace(/(\d{4})-(\d{2})-(\d{2})/, '$1-$2');
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
});
