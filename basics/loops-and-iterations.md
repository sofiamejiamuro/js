# Loops
Are control structures

**for loop**
```js
for (var i = 0; i <= 10; i++) {
    console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to the console, i++
//...
// i = 9, 9 < 10 true, log i to the console, i++

// i = 10, 10 < 10 FALSE, exit the loop!
```

```js

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]); 
    // Jonh at postiion i e.g. if i = 2, print position 2 of array, that is, 1990 

    // i = 0, 0 < 6 true, Jonh, i++
    // i = 1, 1 < 6 true, Smith, i++
    // i = 2, 2 < 6 true, 1990, i++
    // i = 3, 3 < 6 true, designer, i++
    // i = 4, 4 < 6 true, false, i++ 
    // i = 5, 5 < 6 true, blue, i++

    // i = 4, 4 < 5 FALSE, exit the loop!
}
```

**While loop**
```js
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}
```

**Continue and break statements**
```js
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
    /*
      Jonh
      Smith
      designer
      blue
    */
}
```
```js
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
    /*
      Jonh
      Smith
    */
}
```

**Looping backwards**
```js
// jonh.length is equal to 6 but due to positions start with 0 we use -1 resulting in position 5
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
    // i = 5, 5 >= 0 true, blue, i--
    // i = 4, 4 >= 0 true, false, i--
    // i = 3, 3 >= 0 true, designer, i--
    // i = 2, 2 >= 0 true, 1990, i--
    // i = 1, 1 >= 0 true, smith, i-- 
    // i = 0, 0 >= 0 true, Jonh, i--

    // i = -1, -1 >= 0 FALSE, exit the loop!
}
```