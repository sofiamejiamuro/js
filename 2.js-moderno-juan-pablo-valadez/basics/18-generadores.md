# Generadores

Es una función que retorna un iterador.


```js
// * y yield están reservados para los gneeradores, yiedl actua como palabara para acceder a los valores
function *crearGenerador(){
  yield 1;
  yield 'Juan';
  yield 3+3;
  yield true
};
const iterador = crearGenerador();

// <suspended>
console.log(iterador) //crearGenerador <suspended>
// next() nos permite iterar sobre un valor, en cada next iteramos sobre el siguiente valor
console.log(iterador.next()) // {value:1 , done: false}
console.log(iterador.next().value) // 'Juan'
console.log(iterador.next()) // {value: 6 , done: false}
console.log(iterador.next().done) // false
// En este punto ya no hay mas elementos para iterar
console.log(iterador.next()) // {value: undefined, done: true} 
// <closed>
console.log(iterador) //crearGenerador <closed>
```

```js
function *generadorCarrito(carrito){
  for(let i = 0; i < carrito.length: i++){
    yield carrito[i]
  };
};

const carrito = ['Prod1','Prod2','Prod3'];
const iterador = generadorCarrito(carrito);
console.log(iterador.next())  
console.log(iterador.next().value) 
console.log(iterador.next()) 
console.log(iterador.next().done) // true
console.log(iterador) // generadorCarrito <closed>
```