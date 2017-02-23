$(function() {
  var templates = {};
  var photos;

  $('input[type="text/x-handlebars"]').each(function() {
    var $temp = $(this);
    templates[$template.attr('id')] = Handlebars.compile($temp.attr('id').html());
  });

  $.ajax({
    url: '/photos',
    // type: 'GET' / Default
    success: function(json) {
      console.log('sucess');
      photos = json;
      console.dir(photos);
    }
  });
  // var photoTemplate = $('#photos').html();
  // var photoTempScript = Handlebars.compile(photoTemplate);
  // $('#slides').append(photoTempScript());
});
