# ES-6

## LET AND CONST


// function scope 
var name5 = 'sofia mejia';
var age5 = 23;

name5 = 'sofia muro';

//console.log(name5);


// block scope

// const are inmmutably 
const name6 = 'sofia mejia';
let age6 = 23;
//name6 = 'sofia muro';
//console.log(name6);

// ES5 
function driversLicence5(passedTest) {
  if (passedTest) {
    var firstName = 'John';
    var yearOfBirth = 1990;
  }

  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
// var is function scope so console lod does not work here
driversLicence5(true);

// ES&

function driversLicence6(passedTest) {
  //console.log(firstName);

  let firstName;
  const yearOfBirth = 1990;

  if (passedTest) {
    firstName = 'jonh'
  /*   let firstName;
    const yearOfBirth = 1990;
   */
  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
  }
  // console.log does not work here beacuse let and const are block scope 
  // in order to use them we neet to declare de variables ouside an defined and it will only work for let 
}

// cosole.log would work here neither

driversLicence6(true);

// In ES6 a varible called before its declaration gave back 'undefined' but in ES& it is not even possible to use them 
// Uncaugh erro : x is not defined, the variabels are hpisted as well as in es5 but it it not possible to access to them

let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// let i = 24  // error of redeclartion

console.log(i);
// 0 
// 1 
// 2 
// 3 
// 4 
// 23

var i = 23;

for (var i = 0; i < 5; i++) {
    console.log(i);
}


console.log(i);
// 0 
// 1 
// 2 
// 3 
// 4 
// 23

## BLOCKS AND IIFIS

In ES6 they waay to create daata privacy is ising blocks of code, as in es5 iifis

That`s a block
{} 





// ES6 block 
{
  const a = 1;
  let b =2;
  var c = 3;
}


// ES5 iifes
(function () {
  var a = 1;
  var b =2;
  var c = 5;
})();

// TThis values are not acceced from the outside as in a iife
console.log(a + b);
console.log(c); // 3 Beacuse var si fucntion scope not block scope



## strings

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
  return 2020 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// Template literals `` --> we want to use a tempalte literal  ${} --> inside variables, call functions
// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

// new string methods
const n = `${firstName} ${lastName}`;
// this three methods return a boolean, it is case sesitive
console.log(n.startsWith('j'));
console.log(n.startsWith('J'));
console.log(n.endsWith('Sm'));
console.log(n.includes('oh'));


console.log(`${firstName} `.repeat(5));
console.log(firstName.repeat(5));

## arrow functions

/// arrow functions

const years = [1990, 1965, 1982, 1937];

/////  ES5  /////
//  map method returns a new array , map(current, index, array)
var ages5 = years.map(function(el) {
  return 2020 - el;
});
console.log(ages5);

/////  ES6  /////
// with one argument and one line, no curly brances and implict return
let ages6 = years.map(el => 2020 - el);
console.log(ages6);

// more than one arguement aand one line, no curly braces and implicit return 
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el} yo.`);
console.log(ages6);

// More than one line in the return, curly braces and explicit return 
ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);




// ES5
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
   
    // Create a new vriable to store 'this' and be able to use it inside the function callback
    var self = this;  
    //this do work
    console.log(this.color); // green
    console.log(self); // Object { color: "green", position: 1, clickMe: clickMe() }

    document.querySelector('.green').addEventListener('click', function() {
      // var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      // Now it works!
      var str = 'This is box number ' + self.position + ' and it is ' + self.color;
      alert(str);
      // This is box number undefined and it is undefined
      // this in a normal function(in this case the callback, beacuse clcik me is amethod, there this works) do not work, is in amethod, thats why, here this is pointing to wiondow object
    });
  }
}
//box5.clickMe();

// ES6
const box6 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    // We aare usign an arrow function '() => {}' instead of a 'function(){}'
    // changing to arow function share this with their surroundings
    document.querySelector('.green').addEventListener('click', () => {
        var str = 'This is box number ' + this.position + ' and it is ' + this.color;
        alert(str);
    });
  }
}
//box6.clickMe();

// ES6
/* 
  const box66 = {
  color: 'green',
  position: 1,
  clickMe: () => {
    // changing this method from es5 fucntiomn to arrow functions alñlow to share the thiis with the upper object, in this case the window object
    console.log(this); // window object
    console.log(this.box5); // remeber why you can only retireve box5 
    // We aare usign an arrow function '() => {}' instead of a 'function(){}'
    // changing to arow function share this with their surroundings
    document.querySelector('.green').addEventListener('click', () => {
        var str = 'This is box number ' + this.position + ' and it is ' + this.color;
        alert(str);
    });
  }
}
box66.clickMe();
*/

// ES5
/*
  var Person = function(name) {
  // this.name is the name we want the parameter to have = name that is the parameter we are passing to the function
  this.name = name;

}*/

// ES6
function Person(name) {
  this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(function(el) {
     return this.name + ' is friends with ' + el; 

  }.bind(this));
  
  //console.log(arr); // " is friends with Mark" Can not access to this.name for the same reasons mentioned above, in order to fix this we can use the bind method
  // Onve we use the bind method crete the copy of the fucntion
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function(friends) {

  let arr = friends.map(el => `${this.name} is friends with ${el}`);

  console.log(arr); // "Mike is friends with Bob"

}

new Person('Mike').myFriends6(friends);


## Destructuring

// extract data from an object or an array

// Destrucuring
// ES5
var john = ['John', 26];

// store each element in a single variable, what would happen if we needed to store a lot or elements, say 10
/* var name = john[0];
var age = john[1];
 */

// ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
  firstName: 'John',
  lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

// I f we dont want the name to match with the keys of th eobject
const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

// reutnr multiple values from a function using destructuring

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);


## Arrays in ES6