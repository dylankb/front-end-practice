/*jshint esversion: 6 */
var ProductModel = Backbone.Model.extend({
  setDate: function() {
    var date = new Date(this.get('date'));
    var dateFormatted = formatDate(date);
    this.set('date_formatted', dateFormatted);
  },
  setDatetime: function() {
    var date = new Date(this.get('date'));
    var dateTime = formatDatetime(date);
    this.set('datetime', dateTime);
  },
  renderForm: function() {
    $('form fieldset').html(templates.form(this.toJSON()));
  },
  renderInfo: function() {
    $('main article').html(templates.product(this.toJSON()));
  },
  updateInfo: function() {

  },
  initialize: function() {
    this.setDatetime();
    this.setDate();
    this.renderInfo();
    this.renderForm();
    this.on('change', this.renderInfo);
  }
});

$('form').on('submit', function(e) {
  e.preventDefault();

  var formInfo = $(this).serializeArray().reduce(function(acc, input) {
    acc[input.name] = input.value;
    return acc;
  }, {});
  var date = new Date();
  formInfo.date = date.valueOf();
  formInfo.datetime = formatDatetime(date);
  formInfo.date_formatted = formatDate(date);

  product.set(formInfo);
});

// Compile templates
var templates = {};
$('[type="text/x-handlebars"]').each(function() {
  var $template = $(this);
  templates[$template.attr('id')]= Handlebars.compile($template.html());
});

var product = new ProductModel(product_json);

var dateObj = new Date();

function formatDatetime(date) {
  var day = date.getDate();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  return `${year}-${leftPad(month)}-${leftPad(day)}T-${formatTime(date)}`;
}

function formatTime(date) {
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

function formatDate(date) {
  var day = date.getDate();
  var year = date.getFullYear();
  var month = date.toLocaleString("en", { month: "long" });
  var suffixes = ['st', 'nd', 'rd', 'th'];
  var suffixIdx = onesDigit(day) <= 3 ? onesDigit(day) - 1 : suffixes.length - 1;
  return `${month}, ${day}${suffixes[suffixIdx]}, ${year} ${formatTime(date)}`;
}

function onesDigit(num){
  return Number(String(num).match(/.$/g)[0]);
}

function leftPad(day) {
  var dayString = String(day);
  return dayString && dayString.length < 2 ? "0" + dayString : dayString;
}
