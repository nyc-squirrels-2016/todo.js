var Controller = function(todoList, view){
  this.view = view;
  this.todoList = todoList;
}

Controller.prototype.createTask = function( title ){
  var task = new Task(title);
  var htmlTask = this.view.drawTask(task);
  this.view.addTaskToList(htmlTask);
}