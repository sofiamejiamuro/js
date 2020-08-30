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

function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game(); 


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
