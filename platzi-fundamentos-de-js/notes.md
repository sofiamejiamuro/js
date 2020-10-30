# Fundamentos de JS

Funciones 

```js 
var nombre = "sofia";

function imprimirNombre(){
  nombre = nombre.toUpperCasee();
  console.log(nombre);
}

imprimirNombre();

console.log(nombre); // SOFIA
// ya mutamos el nombree, la variable global

```

Para evitar modificar la variable global, se pasa un parametro la variable como parametro , n se define solo dentro de la función, nombre se copia a n y queda local, cuando se termina de ejecutar la función n desaparece. n podria llamarse 'nombre' y aunque tenga el mismo nombre que nombre son diferentes


```js 
var nombre = "sofia";

function imprimirNombre(n){
  n = n.toUpperCasee();
  console.log(n);
}

imprimirNombre(nombre);

console.log(nombre); // sofia
console.log(n); // SOFIA
```