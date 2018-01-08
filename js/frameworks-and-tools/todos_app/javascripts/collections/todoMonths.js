var TodoMonthsCollection = Backbone.Collection.extend({
  initialize: function() {
    this.loadList();
    this.on('remove', App.resetmonthFilter);
  },
  loadList: function() {
    var months = JSON.parse(localStorage.getItem('monthsList')) || {};
    if (months.length) { this.reset(months); }
  },
  model: TodoMonth,
  saveToLocalStore: function() {
    window.localStorage.setItem('monthsList', JSON.stringify(this.toJSON()));
  },
  withCompletedTodos: function() {
    return this.models.filter(function countCompletedInMonth(month) {
      return month.completed().length;
    });
  },
  comparator: 'dateKey',
});
