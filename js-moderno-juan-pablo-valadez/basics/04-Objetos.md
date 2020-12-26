# Objetos

Son la pieza principal de JS.

Un objeto agrupa todo en una sola varibale, un conjunto de key-value

- Object Literal

- Acceder a los valores de un objeto

```js
const producto = {
  nombre: "Monitor",
  precio: 300,
  disponible: true
};

console.log(producto.nombre);    // "Monitor"
console.log(producto['nombre']); // "Monitor"

// Agregar nuevas propiedades

producto.imagen = "imagen.jpg";
producto['imagen'] = "imagen.jpg";

// Eliminar 

delete producto['disponible'];
```

## Object Destructuring

```js
const { nombre } = producto;
const { precio } = producto;

const { nombre, precio } = producto;
```

# Objeto dentro de otro objeto

```js
const producto = {
  nombre: "Monitor",
  precio: 300,
  disponible: true,
  informacion : {
    medidas: {
      peso: "1kg",
      medida: "1m"
    },
    fabricacion: {
      pais: "China"
    }
  }
};

console.log(producto.informacion.medidas.peso) // "1kg"
 
// Destructuring

const { nombre, informacion:{ medidas, medidas: { peso } } } = producto
// nombre "Monitor"
// medidas {  peso: "1kg",  medida: "1m" }
// peso "1kg"
// informacion undefined
```

Las propiedades de los objetos **SÍ** se pueden reasignar aunque estén dentro de una variable **const**

## Object methods

Cómo hacer para que un objeto se comporte como una constante y **NO** pueda ser modificado

```js
"use strict"

// mejores prácticas
// al usar el modo estricto se habilitan ciertos métodos (object methods)

const producto = {
  nombre: "Monitor",
  precio: 300,
  disponible: true
};

Object.freeze( producto ); // Nos va a prohibir modificar el objeto
console.log(Object.isFrozen(producto)) // true

Object.seal( producto ); //  no se puede agregar o quitrar propiedades pero sí modificar las ya existentes 
console.log(Object.isSeal(producto)) // true

```

### Unir Objetos

```js
const producto = {
  nombre: "Monitor",
  precio: 300,
  disponible: true
};

const medidas: {
  peso: "1kg",
  medida: "1m"
};

// Assign
const resultado = Object.assign(producto, medidass)

// Spread Operator
const resultado = {...producto, ...medidas}
```

# THIS

Los valores que existen dentro del scope del objeto, los valores que se declararon dentro del objeto

# OBJECT CONSTURCTOR

Object Literal vs Object Constructor 

```js
function Producto(nombre, precio){
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
};

// Crea en objeto nuevo a partir del constructor
// Es como anteriormente funcionaba la POO , antes de que js soportara clases
const producto1 = new Product('Monitor', '3000');
```

## Objects methods

El método keys y values retornan un array

El método entries retorna un array por cada key-value dentro del objeto
```js
Object.keys( producto );

Object.values( producto );

Objects.entries( producto );
```