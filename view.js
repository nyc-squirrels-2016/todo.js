var View = function(){
  this.addTaskForm = document.getElementById('addTask');
  this.taskListDiv = document.getElementById('list');
  this.controller = undefined; 
};


View.prototype.addTaskToList = function( htmlTask ){
  this.taskListDiv.appendChild( htmlTask ) 
}

View.prototype.drawTask = function(task){
  var taskElm = document.createElement('li');
  taskElm.innerHTML = (task.completed ? "[X]" : "[ ]") + ":" + task.title;
  return taskElm;
}