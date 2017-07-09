var Items = {
  init: function() {
    Handlebars.registerPartial('item', $('#item').html());
    this.seedCollection();
    this.bindEvents();
  },
  addItem: function(e) {
    e.preventDefault();

    var $form = $(e.target).closest('form');
    var itemData = {
      "name": $form.find('input[name=name]').val(),
      "quantity": $form.find('input[name=quantity]').val(),
    };

    var item = new ItemModel(itemData);
    this.collection.push(item);
  },
  bindEvents: function() {
    $('form').on('submit', this.addItem.bind(this));
    $('tbody').on('click', 'a', this.deleteItem.bind(this));
    $('p a').on('click', this.deleteAll.bind(this));
    $('thead th').on('click', this.sortSelect.bind(this));
  },
  collection: [],
  deleteAll: function(e) {
    this.collection = [];
    this.render();
  },
  deleteItem: function(e) {
    e.preventDefault();

    var target = e.target
    var id = Number(target.dataset.id);
    var item = _.find(this.collection, function(item) {
      return item.get('id') === id;
    });

    this.collection = _.without(this.collection, item);
    $(target).closest('tr').remove();
  },
  lastID: 0,
  template: Handlebars.compile($('#items').html()),
  render: function() {
    $('tbody').html(this.template({ items: this.collection }));
  },
  seedCollection: function() {
    items_json.forEach(function(item) {
      var newItem = new ItemModel(item);
      this.collection.push(newItem);
    }, this);
  },
  sortSelect: function(e) {
    e.preventDefault();

    var prop = e.target.dataset.prop;
    this.collection = _.sortBy(this.collection, function(item) {
      return item.get(prop);
    });
    this.render();
  }
};

var ItemModel = Backbone.Model.extend({
  initialize: function() {
    this.setID();
    this.render();
  },
  render: function(data) {
    $('tbody').append(this.template(this.toJSON()));
  },
  template: Handlebars.compile($('#item').html()),
  setID: function() {
    this.set('id', ++Items.lastID);
  }
});

Items.init();
