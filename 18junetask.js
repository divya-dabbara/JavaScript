var x = 10;
function foo() {
  console.log(x);
}
foo();

// Output: 10


var x = 10;
function foo() {
  var x = 20;
  console.log(x);
}
foo();

// Output: 10


var x = 10;
function foo() {
  console.log(x);
  var x = 20;
}
foo();

// Output: 10


var x = 10;
function foo() {
  console.log(x);
}
var x = 20;
foo();

// Output: 20


function foo() {
  console.log(x);
}
var x = 10;
foo();

// Output: 10


function foo() {
  console.log(x);
}
foo();
var x = 10;

// Output: 10