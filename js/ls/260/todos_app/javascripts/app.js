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

    this.bindEvents();
    this.styleHeaderFilters();
  },
  bindEvents: function() {
    $('.navigation').on('click', '.all-todos, .completed-todos, .todo-month-container', this.styleCurrentSelection.bind(this));
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

    Handlebars.registerHelper('selectedGroupAll', function(todoGroup) {
      var filterMonth = App.timeFilter;
      var completedFilter = App.completedFilter;
      if (todoGroup.dateKey === filterMonth && !completedFilter) {
        return true;
      }
      return false;
    });

    Handlebars.registerHelper('selectedGroupCompleted', function(todoGroup) {
      var filterMonth = App.timeFilter;
      var completedFilter = App.completedFilter;
      if (todoGroup.dateKey === filterMonth && completedFilter) {
        return true;
      }
      return false;
    });
  },
  formatInputs: function(formData) {
    var data = formData.reduce(function(acc, input) {
      acc[input.name] = input.value;
      return acc;
    }, {});

    if ((data.year && data.month && data.day)) {
      data.dueDate = data.year + '-' + data.month + '-' + data.day;
    } else {
      data.dueDate = 'No Due Date';
    }

    return data;
  },
  getSelectedMonth: function(e) {
    var dateKey = $(e.currentTarget).data('date-key');
    return this.TodoMonths.get(dateKey);
  },
  getTodoId: function(e, selector) {
    return $(e.currentTarget).closest(selector).data('todo-id');
  },
  styleHeaderFilters: function() {
    if (!App.timeFilter && !App.completedFilter) {
      this.styleActiveGroup($('.all-todos'));
    } else if (!App.timeFilter && App.completedFilter) {
      this.styleActiveGroup($('.completed-todos'));
    }
  },
  loadFilters: function() {
    var timeFilter = localStorage.getItem('timeFilter');
    this.timeFilter = timeFilter || '';

    var completedFilter = localStorage.getItem('completedFilter');
    this.completedFilter = completedFilter || '';
  },
  styleActiveGroup: function(element) {
    $('.todo-month-container, .all-todos, .completed-todos').removeClass('active-todo-group');
    $(element).addClass('active-todo-group');
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
  styleCurrentSelection: function(e) {
    e.preventDefault();
    this.styleActiveGroup(e.currentTarget);
  },
  updateMainTodosHeading: function(headingText) {
    $('.tasks h1').text(headingText);
  },
  updateMainTodosCount: function(todosCount) {
    $('.tasks .todos-count').text(todosCount);
  },
};

$(function() {
  App.init(); // Could also include this in a script tag at the bottom of the body element
});
