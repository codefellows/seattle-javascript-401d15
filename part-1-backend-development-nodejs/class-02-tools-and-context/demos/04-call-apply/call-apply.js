'use strict'

function lower(str){
  return String.prototype.toLowerCase.call(str)
}
lower("HELLO");


var state = {
  history: [],
  addToHistory: function(){
    Array.prototype.push.apply(this.history, arguments);
  }
};

state.addToHistory('move player', 'pickup item', 'update hp');
// state.history === ['move player', 'pickup item', update hp']

let upper = str => String.prototype.toUpperCase.call(str);
upper('hello');
// HELLO


function User(name, age) {
  this.name = name;
  this.age = age;
}

function SuperUser(name, age) {
  User.call(this, name, age);
  this.isAdmin = true;
}

let superUser = new SuperUser('Judy', 20);
console.log(superUser);


// The `new` keyword creates a empty object and invokes a function with that object as its context
// For constructor ABC to inherit constructor XYZ's property it should `XYZ.call(this)`
// For constructor ABC to inherit constructor XYZ's methods it should `ABC.prototype = Object.create(XYZ.prototype)`
function XYZ(shape){
  this.name = 'XYZ';
  this.size = 10;
  this.shape = shape;
}
