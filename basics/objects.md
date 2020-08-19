# Objects

In arrays order is really important while in objects it is not

An object literal is a container that we can fill with properties 

**key - value pair**

**Initializing an object using object literal**
```json
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
```

To access to the properties we use dot notation or brackets
```js
console.log(john.firstName);
console.log(john['lastName']);
```
Here we are creating a variable that stores a string, and this string is equal to a property of the object so it is possible to acces to its correspondant value
```js
var x = 'birthYear';
console.log(john[x]); // 1990
```

**Mutating a object**
Using dot notation or brackets we can modify a property

```js
john.job = 'designer';
john['isMarried'] = true;
console.log(john); 
/* var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'designer',
    isMarried: true
  }; 
*/
```

**Initializing an Object using new Object()**

```js
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane); 
/* var jane = {
    firstName: 'Jaane',
    lastName: 'Smith',
    birthYear: 1969
  }; 
*/
```

# Objects and methods
We can also have functions inside objects, called methods

```js
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

console.log(john);
/* var john = {
      firstName: 'John',
      lastName: 'Smith',
      birthYear: 1992,
      family: ['Jane', 'Mark', 'Bob', 'Emily'],
      job: 'teacher',
      isMarried: false,
      age: 28
      calcAge: function() {
          this.age = 2018 - this.birthYear;
      }
  }; 
*/
```
this == the current object