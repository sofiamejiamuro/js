# SETS

Una lista de valores sin duplicados, como filtrar un arreglo para que no tenga elementos repetidos, tienen forma de objeto pero no son llave/ valor

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
// Disco 1
// Disco 2
// Disco 3
```

EL método forEach acepta tres parámetros en este caso producto que es el item mismo, el index que es también el item y por último el set-completo

```js
carrito.forEach( (producto, index, set-completo) => console.log(producto))
```

Ejemplo:

Eliminar duplicados del siguiente arreglo:
```js
const numeros = [10, 10, 10, 20, 20, 30, 40, 40, 40];
const numerosNoDuplicados = new Set(numeros);

console.log(numerosNoDuplicados); // {10, 20, 30, 40}
```

## WEAK SETS

Sólo acepta objetos, a diferencia del Set que acepta todo tipo de valores

```js
const weakSet = new WeakSet();
const cliente = {
  "nombre": "juan",
  "saldo":1000
};
weakSet.add(cliente);
weakSet.has(cliente); // true
weakSet.delete(cliente); 
```
No tiene el método size ni tampoco son iterables.


# MAPS

Son listas ordenadas, llave/valor, cualquier tipo de dato tanto llave como en valor, unlike objetos normales

```js
const cliente = new Map();
cliente.set("nombre","sofia");
cliente.set("tipo","premium");
cliente.set("saldo",2000);
cloente.size; // extensión
cliente.has("nombre");
cliente.get("nombre"); // "sofia"
cliente.clear();
```

Crear el map con el constructor, importante la sintaxis
```js
const paciente = new Map([['nombre', 'pedro'],['cuarto','no definido']]);
```
Se pueden rescribir los valores, también son iterables

## Weak Map

No se puede conocer laextensión de un weakMap, tampoco iterar

## Symbols

Crea una propiedad única, no son iterables

```js
// Nunca son inguales

const nombre = Symbol('Sofia');
const apellido = Symbol('Mejia');

const persona = {};

// Agregar nombre y apellido como llaves del objeto, no permite notación de punto
persona[nombre] = 'Sofia';
persona[apellido] = 'Mejia';

// Acceder a las propiedades,  no permite notación de punto
console.log(persona[apellido])

console.log(persona) 
/*
{
  Symbol(): "sofia"
  Symbol(): "Mejia"
}
*/

// Descripción del Symbol

const nombre = Symbol('Nombre del cliente');
const persona = {};

persona[nombre] = "Sofia"
console.log(perona)
/*
{
  Symbol(Nombre del cliente) : "Sofia"
}
*/ 
```