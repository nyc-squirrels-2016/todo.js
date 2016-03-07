var Controller = function(todoList, view){
  this.view = view;
  this.todoList = todoList;
}

Controller.prototype.createTask = function( title ){
  var task = new Task(title);
  var htmlTask = this.view.drawTask(task);
  this.view.addTaskToList(htmlTask);
}

// User Input / Output
var View = function(){
  this.addTaskForm = document.getElementById('addTask');
  this.taskListDiv = document.getElementById('list');
};


View.prototype.addTaskToList = function( htmlTask ){
  this.taskListDiv.appendChild( htmlTask ) 
}

View.prototype.drawTask = function(task){
  var taskElm = document.createElement('li');
  taskElm.innerHTML = (task.completed ? "[X]" : "[ ]") + ":" + task.title;
  return taskElm;
}

var TodoList = function(){
  this.tasks = []
};

TodoList.prototype.addTask = function(task){
  this.tasks.push(task);
}

var Task = function(title){
  this.title = title;
  this.completed = false;
};

Task.prototype.complete = function(){
  this.completed = true;
}

view = new View();
list = new TodoList();
controller = new Controller(list,view);
