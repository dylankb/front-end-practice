var FoodModel = Backbone.Model.extend({
  initialize: function() {
    this.set('date_formatted', moment().format('MMMM Do YYYY, h:mm:ss'));
    this.set('datetime', moment().format('YYYY-MM-DD[T]hh:mm:ss'));

    this.on('change', this.render);
    this.render();
  },
  renderArticle: function() {
    $('article').html(templates.product(this.toJSON()));
  },
  renderForm: function() {
    $('form fieldset').html(templates.form(this.toJSON()));
  },
  render: function() {
    this.renderArticle();
    this.renderForm();
  },
  updateFood: function(e) {
    e.preventDefault();

    var $form = $(e.target).closest('form');
    var newProps = {
      "name": $form.find('input[name=name]').val(),
      "description": $form.find('textarea[name=description]').val(),
    };

    this.set(newProps);
  }
});

var templates = {};
$('script[type="text/x-handlebars"]').each(function() {
  templates[this.id] = Handlebars.compile($(this).html());
});

var food = new FoodModel(product_json);

$('form').on('submit', food.updateFood.bind(food));
