$(document).ready(function() {
  // var taskName = $('#taskName').val();
  // console.log("test");
  // var taskSelected = $("#taskSelected").val();
  // var assignee = $("#assignee").val();
  // var date = $("#date").val();

  var taskName = "Learn JS"
  // var taskSelected =
  // var assignee =
  // var date =
  newTask = new ToDoList.HomeTask(taskName, "High", people.thor);

  console.log(newTask);

  tasks.push(newTask);

  console.log(thorTasks);
  for(var i = 0; i < tasks.length; i++) {
    $('#output').append('<li>' + tasks[i].description + '</li>')
  }

});
