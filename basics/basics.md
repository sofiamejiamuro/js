# JS-basics
Variable: container of a value, a piece of memory.

## Data Types:
1. Number:Floating point numbers, for decimals and integers
2. String: Sequence of chaaracters, used for text
3. Boolean: Logical data type that can only be true of false
4. Undefined: Data type of a variable that does not have a value yet
5. Null: also means 'non-existent'

JS has dynamic typing: data types are automatically assigned to variables 

## Variable mutation and type coercion

Type coercion: Js converts data types as needed. 
  e.g. Here we are mixing a string and a number resulting in a string
  ```js
  var firstName = 'John'; 
  var age = 28;

  // Type coercion
  console.log(firstName + ' ' + age);
  ```

Variable mutation: change the value of a variable, regardless the data type

## Basic Operators

```js
var year, yearJohn, yearMark;
now = 2020;
ageJohn = 28;
ageMark = 33;
```

## Math Operators
```js
yearJohn = now - ageJohn;
yeahMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);
```

## Logical Operators
```js
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);
```

## typeof Operator
```js
console.log(typeof johnOlder); // boolean
console.log(typeof ageJohn); // number
console.log(typeof 'Mark is older tha John'); // string
var x;
console.log(typeof x); >> undefined, because there is no value stored on var x
```

## Operator precedence
That is, which operator is executed first: 

Operator precedence & associativity table MDN

https://www.markdownguide.org/extended-syntax/

```js
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators 
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y); // 26

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
x++;
console.log(x);

```

## If/Else statements
Allow us to take decitions using code

**if**

() if condition that results in the boolean value true

{} if block

{} else 

**if else** 

() if condition

{} if block 

() if else 

{} if else 

...

{} else

## Boolean Logic
Deals with true/false values 

NOT !

AND &&

OR  ||   

```js
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
```

## The Ternary Operator and Switch statement

### Ternary operator
```js
var firstName = 'John';
var age = 20;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink); // beer
```

### Switch statement

```js
var job = 'instructor';

switch (job) {
    // the condition and after : the thing we wanted to happend
    case 'teacher':
      // As we do not have a break here when evaluated if it is true will apply the next case statement
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        // we use break to stop keeping evaluating the other cases
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    // if none of the cases applies    
    default:
        console.log(firstName + ' does something else.');
}
```

```js
age = 56;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
```

## Truthy and Falsy Values and Equality Operators

Falsy value: undefined, null, 0, '', NaN. All of them became false when evaluated in a if statement, are falsy because they are not false per se, they became false.

Truthy valau: NOT falsy values

```js
var height;

height = 23;
// as 0 is falsy we have to consider this.
if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

```

## Equality Operators
```js
==  does type coersion, non strict
23 == '23' //true
=== does not type coersion, strict
23 === '23' // false
```

