var TodoList = function(){
  this.tasks = []
};

TodoList.prototype.addTask = function(task){
  this.tasks.push(task);
}