$(function() {

  var $categories = $('input');
  var $titles = $('li');

  $categories.on('change', function() {
    var $checkbox = $(this);
    var category = $checkbox.val();
    var checked = $checkbox.is(":checked");

    // if ($(this).is(':checked')) {
    //   $('li').filter(':contains(' + title + ')').show();
    // } else {
    //   $('li').filter(':contains(' + title + ')').hide();
    // }
  });
});
