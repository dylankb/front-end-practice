var counterCreator = function() {
  var id = 0;

  return function determineId(lastId) {
    lastId ? id = lastId : id += 1;
    return id;
  };
};

var generateNextId = counterCreator();

var App = {
  init: function() {
    this.cacheTemplates();
    this.createHelpers();

    this.TodoMonths = new TodoMonthsCollection();
    this.Todos = new TodosCollection();

    this.loadSavedAppData();

    this.EventBus = _.extend({}, Backbone.Events);
    this.Navigation = new NavigationView();
    this.Content = new ContentView();
  },
  cacheTemplates: function() {
    $("script[type='text/x-handlebars']").each(function() {
      var $template = $(this);
      App.templates[$template.attr('id')] = Handlebars.compile($template.html());
    });

    $("script[data-type='partial']").each(function() {
      var $partial = $(this);
      Handlebars.registerPartial($partial.attr('id'), $partial.html());
    });
  },
  createHelpers: function() {
    Handlebars.registerHelper('formatDateMonthYear', function(dateKey) {
      var dateObj = new Date(dateKey + 'T08:00:00');

      if (isNaN(dateObj.getTime())) { return dateKey; }

      var year = String(dateObj.getFullYear()).slice(2, 4);
      var month = dateObj.getMonth() + 1;

      return month + '/' + year;
    });

    Handlebars.registerHelper('todosCompletedByMonth', function(dateKey) {
      return App.TodoMonths.get(dateKey).completed().length;
    });

    Handlebars.registerHelper('selectedMonth', function(todoGroup) {
      var filterMonth = App.timeFilter;
      var completedFilter = App.completedFilter;
      if (todoGroup.dateKey === filterMonth && !completedFilter) {
        return true;
      }
      return false;
    });

    Handlebars.registerHelper('selectedMonthCompleted', function(todoGroup) {
      var filterMonth = App.timeFilter;
      var completedFilter = App.completedFilter;
      if (todoGroup.dateKey === filterMonth && completedFilter) {
        return true;
      }
      return false;
    });

    Handlebars.registerHelper('selectedSection', function(sectionType) {
      var filterMonth = App.timeFilter;
      var completedFilter = App.completedFilter;
      if (!filterMonth) {
        if (!completedFilter && (sectionType === 'All Todos')) {
          return true;
        } else if (completedFilter && (sectionType === 'Completed')) {
          return true;
        }
      }
      return false;
    });
  },
  formatInputs: function(formData) {
    var data = formData.reduce(function(acc, input) {
      acc[input.name] = input.value;
      return acc;
    }, {});

    if ((data.year && data.month)) {
      data.dueDate = data.year + '-' + data.month;
      if (data.day) { data.dueDate += '-' + data.day; }
    } else {
      data.dueDate = 'No Due Date';
    }

    return data;
  },
  getSelectedMonth: function(e) {
    return $(e.currentTarget).data('date-key');
  },
  loadFilters: function() {
    var timeFilter = localStorage.getItem('timeFilter');
    this.timeFilter = timeFilter || '';

    var completedFilter = localStorage.getItem('completedFilter');
    this.completedFilter = completedFilter || '';
  },
  saveToLocalStore: function() {
    this.Todos.saveToLocalStore();
    this.TodoMonths.saveToLocalStore();
  },
  saveFilterSettings: function() {
    localStorage.setItem('completedFilter', this.completedFilter);
    localStorage.setItem('timeFilter', this.timeFilter);
  },
  loadSavedAppData: function() {
    this.Todos.loadList();
    this.loadFilters();
  },
  templates: {},
  resetFilters: function() {
    App.timeFilter = '';
    App.completedFilter = '';
    App.saveFilterSettings();

    App.EventBus.trigger('UPDATED_FILTER');
  },
};

$(function() {
  App.init(); // Could also include this in a script tag at the bottom of the body element
});
