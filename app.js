view = new View();
list = new TodoList();
controller = new Controller(list,view);
view.controller = controller;

console.log("view", window.view);


function f(){
  var bozo = "A Clown";
  console.log("bozo", bozo);
  console.log("view", window.view);
}

f();


function g(){
  console.log('this', this);
  console.log('arguments', arguments)
}

g();

function leave(){
  console.log("BYE");
}

function eat(){
  console.log("YUMMMYYYYY");
}

function arrive(){
  console.log("HELLLLLOOOOOO")
}

var fnArray = [arrive,eat,leave];

for(var i = 0; i< fnArray.length; i++){
  var func = fnArray[i];
  func();
}