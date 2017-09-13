var TodoMonthsCollection = Backbone.Collection.extend({
  loadList: function() {
    this.list = JSON.parse(localStorage.getItem('monthsList')) || {};

    var monthObjects = Object.values(this.list);
    if (monthObjects) { this.loadMonthsFromObjects(monthObjects); }
  },
  loadMonthsFromObjects: function(monthObjects) {
    monthObjects.forEach(function createAndAddMonth(monthInfo) {
      this.add(monthInfo)
    }.bind(this));
  },
  model: TodoMonth,
  saveToLocalStore: function() {
    window.localStorage.setItem('monthsList', JSON.stringify(this.toJSON()));
  },
  withCompletedTodos: function() {
    return this.toJSON().filter(function countCompletedInMonth(month) {
      return month.completed().length;
    });
  }
});
