# FUNCIONES

Las funciones sirven para reutilizar código

## ALCANCE DE LAS FUNCIONES

```js
var nombre = "Sofia"

function printName(){
  nombre = nombre.toUpperCase()
  console.log(nombre) // SOFIA
}

printName()

console.log(nombre) // SOFIA

```
En el ejemplo de arriba:  

**Una variable de acceso global, al estar afuera de una funcion la variabel se le asigna al objeto global window**

Side effect, un efecto colateral porque modifica variables quu estan fuera de la función

¿Cómo evitar el side effect?

```js
var nombre = "Sofia"

// Aquí n soòlo tiene un alcance local, solo existe dentro de la función
// El valor de nombre se copia a n y se acaba el side effect, podemos remplazar n por nombre y auqnue se llamen igual actuan de la misma forma que n/nombre al ser un argumento de la funcion ya se refiere a n
function printName(n){
  n = n.toUpperCase()
  console.log(n) // "SOFIA"
}

printName(nombre)
console.log(n) // n is not defined
console.log(nombre) // "Sofia"
```

## OBJETOS

```js
var sofia = {
  nombre: 'Sofia',
  apellido: 'Mejia'
}

function printName({nombre}){
  console.log(nombre.toUpperCase())
}

// Puedo enviar el objeto completo
printName(sofia)

// Puedo crear un nuevo objeto con el paramatro que quiero enviar, el atributo debe tener el mismo nombre
printName({name: 'Pepito'})

// No va a funcionar porque no es el atributo que la funcion espera
printName({apellido: 'Lopez'})
```

### Destructuring

```js
var { nombre } = sofia
```

## Parametros como valor y como referencia

```js
var sofia = {
  nombre: 'Sofia',
  apellido: 'Mejia',
  edad: 30
}

function birthday(persona){
  persona.e dad += 1
}

birthday(sofia) // edad: 31
birthday(sofia) // edad: 32
birthday(sofia) // edad: 33
```

Es importante notar el comportamiento entre el ejemplo anterior en el cual se pasa un objeto y el de más arriba en el cual se pasa un string, en el primero aunque tambien es una variable global al ser el parametro de la funcion ```printName(nombre)``` los procesos  que se hacen dentro de la misma solo modifican a n pero no al objeto global nombre, mietras qu eel el ejemplo con el objeto sí esta modificando el obejto global sofia


Ahora hagamos la misma operacion pero pasando directamente la edad, no el objeto. No se afecta el objeto global sofia


```js
var sofia2020 = {
  nombre: 'Sofia',
  apellido: 'Mejia',
  edad: 30
}

function birthday(edad){
  edad += 1
}

birthday(sofia.edad) // edad: 31
birthday(sofia.edad) // edad: 31
birthday(sofia.edad) // edad: 31
```

¿Por qué ? **Los objetos que se pasan como parámetros, pasan como referencia (lugar de memoria),** es decir que si se modifican dentro de la función tambien se van a modificar fuera, como en el jemplo de arriba¿Por qué ? Los objetos que se pasan como parámetros, pasan como referencia, es decir que si se modifican dentro de la función tambien se van a modificar fuera, como en el jemplo de arriba.

Si quisieramos no modificar el objeto global, evitar el side effect, podemos retornar un nuevo objeto

```js
function birthday(persona){
  return{
    ...persona,
    edad: persona.edad + 1
  }
}

// sin modificar sofia 2020
var sofia2021 = birthday(sofia2020)
```

## COMPARACIONES DE OBJETOS EN JS

¿Quá pasa cuándo comparamos objetos? es diferente a tratar con valores primitivos


```js
var persona1 = {
  nombre: 'sofia'
}


var persona2 = {
  nombre: 'sofia'
}

// Al comparar dos objetos se hace referencia a las variables, es decir al espacio en memoria, aca son dos variables que ocupan dos espacios diferentes
persona1 === persona2 // FALSE 
```

```js
var persona1 = {
  nombre: 'sofia'
}
// 
var persona2 = {
  ...persona1
}

// También false porque estamos asignando a persona 2 un objeto literal nuevo con el contenido de persona1, ocupamos una referencia nueva
persona1 === persona2 // FALSE 
```

```js
var persona1 = {
  nombre: 'sofia'
}

// Acá estamos asignando la misma refrencia, el mismo espacio de memoria, a la nueva variable 
var persona2 = persona1 

persona2 === persona1 // TRUE porque apuntan al mismo espacio de memoria

// Si modificamos un atributo en este caso, se modificará en los dos obejetos porque hacen referencia al mismo espacio
persona2.nombre = 'Ana'

persona1.nombre // 'Ana'
persona2.nombre // 'Ana'

```

# ESCTRUCTURAS DE CONTROL

## Funciones que retornan valores

```js

function esMayorDeEdad(persona){
  return persona.edad >= 18 // true or false
};

function printSiEsMayorDeEdad(persona){
  if(esMayorDeEdad(persona)){

  }else{

  }
}

```

## Arrow functions

Es posibles guardar funciones en variables

```js
// CUando solo hay un argumento se pueden omitir los parentesis y cuando solo hay un return en la funcion , se puede ominit los bigotes y la palabra return
const esMayorDeEdad = persona => persona.edad >= 18 

const esMayorDeEdad = ({edad}) => edad >= 18 
```

**Estructuras de control:**

- FOR
- WHILE
- DO WHILE
- SWITCH

```js
case 'géminis':
case 'geminis':
case 'Géminis':
  console.log('bla bla')
``` 