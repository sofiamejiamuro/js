// CLASSES
// Makei t easier to implement ih neritances
//in es5 function contructores


//ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

john5.calculateAge();

//ES6
// all classes have to has a contructuor method
class Person6 {

    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    // static methods that are attached to the class but are not inherited to the instances
    static greeting() {
        console.log('Hey there!');
    }

}

// Creating an instance of the class
const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();
// we can not using it in john so john6.greeting() wont work

// Class are not hoisted as function contructures , 
// we canonly add methdos to classes and no t porperties
