# Functions

- Function definition 

- Argument/parameter

- Return 

- Call the function

## Function Statements and Function Expressions

**Funtion declaration**

It is not stored

Consturtor functions


```js
function calculateAge(birthYear) {
  return 2020 - birthYear;
}
calculateAge(1992)
```

**Statements**

Just perform actions and do not result in any immediate value

**Function Expression**

It is stored in a variable

Always produce a single value

e.g. a JS expression // value

    3 + 5     // 8 

    typeof 23 // "number" 


```js
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
        // When we use a return the function stops immediatly, dos not continue evaluating the other cases
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.'
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
```

