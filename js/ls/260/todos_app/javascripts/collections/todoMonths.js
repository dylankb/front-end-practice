var TodoMonthsCollection = Backbone.Collection.extend({
  initialize: function() {
    this.loadList();
    this.on('remove', this.resetTimeFilter);
  },
  loadList: function() {
    var months = JSON.parse(localStorage.getItem('monthsList')) || {};
    if (months.length) { this.reset(months); }
  },
  model: TodoMonth,
  saveToLocalStore: function() {
    window.localStorage.setItem('monthsList', JSON.stringify(this.toJSON()));
  },
  resetTimeFilter: function() {
    App.timeFilter = '';
    App.EventBus.trigger('UPDATED_FILTER');
    App.saveFilterSettings();
    App.styleHeaderFilters();
  },
  withCompletedTodos: function() {
    return this.models.filter(function countCompletedInMonth(month) {
      return month.completed().length;
    });
  },
  comparator: 'dateKey',
});
