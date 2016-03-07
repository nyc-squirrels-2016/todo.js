var View = function(){
  this.addTaskForm = document.getElementById('addTask');
  this.taskList = document.getElementById('list');
  this.controller = undefined; 
  this.init();
};

View.prototype.init = function(){
  var self = this;
  this.addTaskForm.addEventListener('submit', function( event ){
    event.preventDefault();
    input = event.target.querySelector('[name="taskName"]').value
    this.controller.createTask(input);
  }.bind(self));
};

View.prototype.addTaskToList = function( htmlTask ){
  this.taskList.appendChild( htmlTask ) 
};

View.prototype.drawTask = function( task ){
  var taskElm = document.createElement('li');
  taskElm.innerHTML = (task.completed ? "[X]" : "[ ]") + ": " + task.title;
  this.addTaskToList( taskElm );
};

View.prototype.clearList = function(){
  while( this.taskList.firstChild ){
    this.taskList.removeChild( this.taskList.firstChild );
  }
};

View.prototype.drawList = function( list ){
  list.tasks.forEach(function( item ){
    this.drawTask(item);
  }.bind(this));
};