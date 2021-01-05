# DATES in JS

Objeto Date

```js
const today = new Date();
const today = new Date('3-29-1990');

today.getFullYear();
today.getMonth();  // Jan = 0 
today.getMinutes();
today.getHours();
today.getTime(); // from 1970 up to now miliseconds


```
En los prototypes del objeto se pueden ver todos los métodos

```js
// get 
today.getFullYear();
 
// set
today.setFullYear();
 ```

Recomendación --> Moment.js