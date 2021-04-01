// Hoisting practice

// Function declaration

calculateAge(1990);
function calculateAge(year) {
  //console.log('function declaration',2020 - year);
}

// calculateAge(1990);

// Function expression
var retirement = function(year) {
  //console.log('function expression', 65- (2020 - year));
}
retirement(1990)

// variables

//console.log('age',age);
var age = 23;

function foo() {

    //console.log('age inside foo and before the var declaration',age); // undefinded because is before de declaration and defining of the variable and hoisting just store the variable but not its content
    var age = 65;
    //console.log('age inside foo and after the var declaration',age); // 65 because it in the foo execution context
}
foo();

//console.log('age outside and after foo',age); // 23 beacuse the var age on line 21 is stored on the variable object of the global execution context



/*
Hoisting: 
  In the creation phase of execution context function declaration (only works this on function declaration) is stored on the variable object
even before the code is executed, that's why it is avaiable when we actually execute the code, and it is possible to 
have the function call before the function itself

In the case of FUNCTION EXPRESSION, hoisting does not work because it is stored in a variabla, thus is not defined.

In the case of VARIABLES, if it is called before it is declase and definded it it will be undefined


*/

// Lecture: Scoping


// First scoping example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        //console.log(a + b + c);
    }
}

// THIS

//console.log(this); // the window object, the default object

/* calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log('this',this); // the window object, the default object
} */

/* The function declaration always point to window object 
this is for methods */

var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function() {
      console.log(this); // the jonh object beacuse refers to the object that call the method
      console.log(2020 - this.yearOfBirth);

     /*  function innerFunction() {
        console.log('inner',this); // the window object, the default object because is a regular function 
      }
      innerFunction(); */

  }
}

john.calculateAge();

var mike = {
  name: 'Mike',
  yearOfBirth: 1984
};

// Method borrowing x to be y
mike.calculateAge = john.calculateAge;
console.log(mike);
//mike.calculateAge();

