var App = {
  init: function() {
    this.createTemplates();
    this.Items = new ItemsCollection(items_json);
    this.View = new ItemsView({ collection: this.Items }),
    this.Items.comparator = 'name';
    this.Items.sort();
    this.bindEvents();
  },
  addItem: function(e) {
    e.preventDefault();

    var $form = $(e.target).closest('form');
    var itemData = {
      "name": $form.find('input[name=name]').val(),
      "quantity": $form.find('input[name=quantity]').val(),
    };

    this.Items.add(itemData);
  },
  bindEvents: function() {
    $('form').on('submit', this.addItem.bind(this));
    $('p a').on('click', this.deleteAll.bind(this));
    $('thead th').on('click', this.sortSelect.bind(this));
  },
  createTemplates: function() {
    Handlebars.registerPartial('item', $('#item').html());
  },
  deleteAll: function(e) {
    this.Items.reset();
  },
  deleteItem: function(e) {
    e.preventDefault();

    var target = e.target
    var id = Number(target.dataset.id);
    var item = this.Items.findWhere({ id: id });

    this.Items.remove(item);
    $(target).closest('tr').remove();
  },
  sortSelect: function(e) {
    e.preventDefault();
    var prop = e.target.dataset.prop;

    this.Items.comparator = prop;
    this.Items.sort();
  },
};

var ItemsView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'sync reset', this.render);
  },
  deleteItem: function(e) {
    e.preventDefault();

    var target = e.target;
    var id = Number(target.dataset.id);
    var item = this.collection.findWhere({ id: id });

    this.collection.remove(item);
    $(target).closest('tr').remove();
  },
  el: 'tbody',
  events: {
    'click a': 'deleteItem',
  },
  template: Handlebars.compile($('#items').html()),
  render: function() {
    this.$el.html(this.template({items: this.collection }));
  },
});

var ItemView = Backbone.View.extend({
  template: Handlebars.compile($('#item').html()),
  render: function() {
    $('tbody').append(this.template(this.model.toJSON()));
  },
});

// create item model view on init
var ItemModel = Backbone.Model.extend({
  initialize: function() {
    this.setID();
    this.View = new ItemView({ model: this });
    this.View.render();
  },
  setID: function() {
    this.set('id', ++this.collection.lastID);
  },
});

var ItemsCollection = Backbone.Collection.extend({
  model: ItemModel,
  lastID: 0,
});

App.init();
