var Controller = function(todoList, view){
  this.view = view;
  this.todoList = todoList;
};

Controller.prototype.createTask = function( title ){
  var task = new Task(title);
  this.todoList.addTask(task);
  this.view.clearList();
  this.view.drawList(this.todoList);
};

Controller.prototype.ShowList = function(){
  this.view.drawList(this.todoList);
};