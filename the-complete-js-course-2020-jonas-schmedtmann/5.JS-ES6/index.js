// DEafult parameters when we want to preset the value of a parameter

// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'american' : nationality = nationality; 
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;

}

var john = new SmithPerson('John', 1990);
// we are oinly specifing 2 values of the object, so when we console tthe jonh object the resutl will be that the nod defined values will be 'undefined'
console.log(john);

// we cana stablish the values inside the object constructor as above
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
console.log(emily);

// ES6 Values are passed in the parameters
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var mark = new SmithPerson('Mark', 1990);
console.log(mark);
