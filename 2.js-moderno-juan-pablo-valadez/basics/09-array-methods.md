# Array Methods

```js
const meses = ['Enero', 'Feb','Mar', 'Arb', 'May', 'Junio'];

const carrito = [
  { nombre: 'telefono', precio: 200 },
  { nombre: 'monitor', precio: 400 },
  { nombre: 'teclado', precio: 100 },
  { nombre: 'telefono', precio: 200 },
  { nombre: 'monitor', precio: 400 },
  { nombre: 'teclado', precio: 500 }
];
```
*Comprobar si un valor exite en un array*

Se podría hacer con nun forEach y revisando una  condición

## **array.includes( )**

**BOOLEAN**

```js
const meses = ['Enero', 'Feb','Mar', 'Arb', 'May', 'Junio'];

const carrito = [
  { nombre: 'telefono', precio: 200 },
  { nombre: 'monitor', precio: 400 },
  { nombre: 'teclado', precio: 100 },
  { nombre: 'celular', precio: 200 },
  { nombre: 'mouse', precio: 500 },
  { nombre: 'touchpad', precio: 500 }
];

// Arreglo de items
const resultado = meses.includes('Enero');
console.log(resutlado)  // true
```

## **array.some( )**
BOOLEAN

Uno de los elementos del array debe cumplir x condición para retornar true
```js
// Arreglo de objetos y de items
const producto = carrito.some( producto => { 
  return producto.nombre === 'Celular'
})
console.log(producto)  // true

const mes = meses.some( mes => { 
  return mes === 'Celular'
})
```


## **array.findIndex( )**

*Obtener el indice de un item* 

Se puede hacer con un forEach
```js
meses.forEach((mes, i) => {
  if(mes === 'Abril'){
    console.log(i) // 3
  }
})
```
```js
const meses = ['Enero', 'Feb','Mar', 'Arb', 'May', 'Junio'];

const carrito = [
  { nombre: 'telefono', precio: 200 },
  { nombre: 'monitor', precio: 400 },
  { nombre: 'teclado', precio: 100 },
  { nombre: 'celular', precio: 200 },
  { nombre: 'mouse', precio: 500 },
  { nombre: 'touchpad', precio: 500 }
];

// Retorna solo el valor del primer indice que cumpla la condición
// Array de items
const indice = meses.findIndex(mes => mes === 'Abril');
console.log(indice) // 3
// -1 no se pudo encontrar

// Array de objetos
const producto = carrito.findIndex( producto => producto.precio === 100 )
console.log(producto) // 2
```

## **array.reduce( )**

Función reductora: tomar una gran cantidad de datos y reducirlos

```js
const carrito = [
  { nombre: 'telefono', precio: 200 },
  { nombre: 'monitor', precio: 400 },
  { nombre: 'teclado', precio: 100 },
  { nombre: 'celular', precio: 200 },
  { nombre: 'mouse', precio: 500 },
  { nombre: 'touchpad', precio: 500 }
];

// FOR EACH
// total += producto.precio ; se reasigna el valor
let total = 0
carrito.forEach(producto => total += producto.precio)
console.log(total)

// reduce(total, valor actual)
// total + producto.precio ; solo se hace la suma 
// 0 es el valor inicial
let resutlado = carrito.reduce((total, producto) => total + producto.precio, 0 )
```

## **array.filter( )**

```js
const carrito = [
  { nombre: 'telefono', precio: 200 },
  { nombre: 'monitor', precio: 400 },
  { nombre: 'teclado', precio: 100 },
  { nombre: 'celular', precio: 200 },
  { nombre: 'mouse', precio: 500 },
  { nombre: 'touchpad', precio: 500 }
];

let resultado;

resultado = carrito.filter( producto => proudcto.precio > 400 );
// Nos va a regresar un arreglo con los items filtrados

console.log(resultado) /*  [
                              { nombre: 'mouse', precio: 500 },
                              { nombre: 'touchpad', precio: 500 }
                            ] */

```

## **array.find( )**

```js
const carrito = [
  { nombre: 'telefono', precio: 200 },
  { nombre: 'monitor', precio: 400 },
  { nombre: 'teclado', precio: 100 },
  { nombre: 'celular', precio: 200 },
  { nombre: 'mouse', precio: 500 },
  { nombre: 'touchpad', precio: 500 }
];

// FOR EACH
let resultado = '';

carrito.forEach((prod, i) => {
  if(prod.nombre === 'teclado'){
    // carrito[2]
    resultado = carrito[index]
  }
});

console.log(resultado) // { nombre: 'teclado', precio: 100 },

// FIND
// Sólo va a retornar el primer elemento que cumpla la condición
const resultado = carrito.find( prod => prod.nombre === 'Teclado');
console.log(resultado) // { nombre: 'teclado', precio: 100 },

```
## **array.every( )**

BOOLEAN

Todos los elementos de un arreglo deben cumplir x condición para retornar un true
```js
const carrito = [
  { nombre: 'telefono', precio: 200 },
  { nombre: 'monitor', precio: 400 },
  { nombre: 'teclado', precio: 100 },
  { nombre: 'celular', precio: 200 },
  { nombre: 'mouse', precio: 500 },
  { nombre: 'touchpad', precio: 500 }
];

const resultado = carrito.every( prod => prod.precio < 1000);
console.log(resultado) // true
```

## **array.concat( )**

El orden es importante para concatenar

```js
const frutas1 = ['manzana']
const frutas2 = ['melon', 'piña']
const frutas3 = ['pera']

const frutas4 = frutas1.concat(frutas2);
const frutas5 = frutas1.concat(frutas2, frutas3, 'uvas');
```

## **spread operator**

El orden es importante para concatenar

```js
const frutas6 = [...frutas1, ...frutas2, ...frutas3]
const frutas7 = [...frutas1, ...frutas2, ...frutas3, 'uvas'] // nuevo item del array 'uvas'
const frutas8 = [...frutas1, ...frutas2, ...frutas3, ...'uvas'] // un nuevo item por cada letra de 'uvas'
```

El spread operator no modifica el array original

