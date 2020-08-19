# Hoisting

  In the creation phase of execution context function declaration (only works this on function declaration) is stored on the variable object
even before the code is executed, that's why it is avaiable when we actually execute the code, and it is possible to 
have the function call before the function itself


**Function declaration**

```js
calculateAge(1990);
function calculateAge(year) {
  console.log('function declaration',2020 - year);
}

// calculateAge(1990);
```
**Function expression**
In the case of FUNCTION EXPRESSION, hoisting does not work because it is stored in a variabla, thus is not defined.
```js

var retirement = function(year) {
  console.log('function expression', 65- (2020 - year));
}
retirement(1990)
```

**Variables**

In the case of VARIABLES, if it is called before it is declase and definded it it will be undefined
```js
console.log('age',age);
var age = 23;

function foo() {

    console.log('age inside foo and before the var declaration',age); // undefinded because is before de declaration and defining of the variable and hoisting just store the variable but not its content
    var age = 65;
    console.log('age inside foo and after the var declaration',age); // 65 because it in the foo execution context
}
foo();

console.log('age outside and after foo',age); // 23 beacuse the var age on line 21 is stored on the variable object of the global execution context
```

