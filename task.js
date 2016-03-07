var Task = function(title){
  this.title = title;
  this.completed = false;
};

Task.prototype.complete = function(){
  this.completed = true;
}