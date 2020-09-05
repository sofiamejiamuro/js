// ES5
var john = ['John', 26];

// store each element in a single variable, what would happen if we needed to store a lot or elements, say 10
/* var name = john[0];
var age = john[1];
 */

// ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);