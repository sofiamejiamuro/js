console.log('testing functions');

var years = [1990, 1965, 1937, 2005, 1998];

// fn is a callback function
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
  return 2020- el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
      return Math.round(206.9 - (0.67 * el));
  } else {
      return 'age not between the numbers';
  }
}
 
var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

/* console.log(ages);
console.log(fullAges);
console.log(rates); */


/////////////////////////////
// Lecture: Functions returning functions

/* function interviewQuestion(job) {
  if (job === 'designer') {
    //anonymous function
    return function(name) {
        console.log(name + ', can you please explain what UX design is?');
    }
  } else if (job === 'teacher') {
    return function(name) {
        console.log('What subject do you teach, ' + name + '?');
    }
  } else {
    return function(name) {
        console.log('Hello ' + name + ', what do you do?');
    }
  }
}

// This var stores the anonymoues functions that matched with 'teacher'
var teacherQuestion = interviewQuestion('teacher');
/* var teacherQuestion = function(name) {
  console.log('What subject do you teach, ' + name + '?');
} */
/*var designerQuestion = interviewQuestion('designer');

// Now we are calling the anonymous function
teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

// This works because it is read from right to left, first resolve the first fuction with the firt arumnet and then the retunr gfunction
interviewQuestion('teacher')('Mark'); */

/* function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game(); 
 */

// here we are creating a new scope for variables, data privacy dont interfere with other variables
/* (function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();


(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);

 */

// How many years leaft until rtirement

/* function retirement(retirementAge) {
  var a = ' years left until retirement.';
  return function(yearOfBirth) {
      var age = 2020 - yearOfBirth;
      console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
var retirementUS = function(yearOfBirth) {
  var age = 2020 - yearOfBirth;
  console.log((retirementAge - age) + a);
} 
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

// We are using retirment age and a outside de functions were they were created, ecven ther are stored 
// in a different place and the functione were they were cereated  finished, this is the closure
// scope chian object


retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);


function interviewQuestion(job) {
  return function(name) {
      if (job === 'designer') {
          console.log(name + ', can you please explain what UX design is?');
      } else if (job === 'teacher') {
          console.log('What subject do you teach, ' + name + '?');
      } else {
          console.log('Hello ' + name + ', what do you do?');
      }
  }
}

interviewQuestion('teacher')('John');

// The difference and how to use closures

function interviewQuestion(job) {
  if (job === 'designer') {
    //anonymous function
    return function(name) {
        console.log(name + ', can you please explain what UX design is?');
    }
  } else if (job === 'teacher') {
    return function(name) {
        console.log('What subject do you teach, ' + name + '?');
    }
  } else {
    return function(name) {
        console.log('Hello ' + name + ', what do you do?');
    }
  }
}

// vs
// we are using the same function

function interviewQuestion(job) {
    return function(name) {
      if (job === 'designer') {
          console.log(name + ', can you please explain what UX design is?');
      } else if (job === 'teacher') {
          console.log('What subject do you teach, ' + name + '?');
      } else {
          console.log('Hello ' + name + ', what do you do?');
      }
  }
}

interviewQuestion('teacher')('John');

interviewQuestion('designer')('Mark');

interviewQuestion('developer')('Sofia');


 */

// BIND, CALL AND APPLY 
/* var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
      if (style === 'formal') {
          console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
      } else if (style === 'friendly') {
          console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
      }
  }
};


var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
};
// suppose we want to use the presentacion method ond emily object, we can use the call method, it accepts three arguments
//this is called method borrowing 
john.presentation.call(emily,'friendly','konnichiwa!');


console.log(john.presentation);
john.presentation('formal','konbanwa!');

// apply method, accepts the arguments as an array , 2 arguments
// In this exaple this wont work beacuse the function is not accepting an array
//john.presentation.apply(emily,['friendly','konnichiwa!']);

//bind 'enlazar'/'atar' method; similar to the call, as the other two methods the first argument  sets the this variable explicitly
// does not inmmediatly call the functios intead make a copy and stores it 
// preset some arguments
// carrying : create a function based in another fuction but with preset parameters
var johnFriendly = john.presentation.bind(john, 'friendly');

console.log(johnFriendly);
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

 */

// Another cool example
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2020 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

// caalcula las edades
var ages = arrayCalc(years, calculateAge);

console.log(ages);
 // Here we are preseting the aargument
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(fullJapan); 

