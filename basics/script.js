function calculateAge(birthYear) {
  return 2020 - birthYear;
}

var myAge = calculateAge(1990);
var ageJonh = calculateAge(1960);
var ageMary =calculateAge(1962);
console.log(myAge, ageJonh, ageMary);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement > 0) {
      console.log(firstName + ' retires in ' + retirement + ' years.');
  } else {
      console.log(firstName + ' is already retired.')
  }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');

var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1992,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function() {
   this.age = 2020 - this.birthYear;
  }
};

console.log(john.calcAge())
console.log(john);