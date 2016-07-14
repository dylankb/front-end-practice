$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();
    var age = $("#age").val();

    $(".first-name").append(firstName)
    $(".last-name").append(lastName);
    $(".age").append(age);

    $(".intro").show();

    event.preventDefault();
  });
});