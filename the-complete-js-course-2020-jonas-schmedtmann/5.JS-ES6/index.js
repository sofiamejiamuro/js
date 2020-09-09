const question = new Map();

question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');
/* 
console.log(question);
console.log(question.get('question')); 
console.log(question.size);
 */
/* for (let key of question) {
    // returns an array where key is 0 an value is 1
   console.log(key); // Array [ "correct", 3 ]
} */
 // entries() return entries of map
for (let key of question.entries()) {
    // returns an array where key is 0 an value is 1 as above
  // console.log(key); // Array [ "correct", 3 ]
}

for (let [key] of question.entries()) {
   //console.log(key); // correct
}

for (let [key, value] of question.entries()) {
    // key and value separtely
   console.log(key, value); // correct 3
}

 for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
 } 

 