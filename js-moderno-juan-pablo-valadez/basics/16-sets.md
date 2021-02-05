# SETS

Una lista de valores sin duplicados, como filtrar un arreglo para aue no tenga elementos repetidos, tienenn forma de objeto pero no son llave/ valor

```js
const carrito = new Set();

carrito.add('Disco 1');
carrito.add('Disco 2');
carrito.add('Disco 3');
carrito.add('Disco 4');
carrito.delete('Disco 4');

carrito.add('Disco 1'); // No lo agregaría para que no se duplicara
carrito.size // Cuanto mide 
carrito.has('Disco 2'); // true

console.log(carrito);
// {"Disco 1", "Disco 2", "Disco 3"}

carrito.clear(); // Elimina todos los elementos
```

Los Sets son iterables

```js
carrito.forEach( producto => console.log(producto))
```

EL método forEach acepta tres parámetros en este caso producto que es el item mismo, el index que es también el item y por último el set-completo

```js
carrito.forEach( (producto, index, set-completo) => console.log(producto))
```

Ejemplo

Eliminar duplicados del siguiente arreglo
```js
const numeros = [10, 10, 10, 20, 20, 30, 40, 40, 40];
const numerosNoDuplicados = new Set(numeros);

console.log(numerosNoDuplicados); // {10, 20, 30, 40}
```