# Asincronismo

Se pueden mandar funciones como parámetros

Para revisar si una función trae un parametro o no :
```js
saludar(fn){
  if(fn){
    // la función saludar sí trae un parámetro
  } else {
    // la función saludar no trae un parámetro
  }
}

saludar()
saludar(fn)
```

Es muy importante el concepto de valores truthy y falsy, cuando se evalúa la condición de algo en terminos de verdadero y falso dentroe de una funcion , como parametros, el valor del paraametro no necesariamente tendría que ser true o false, también podrian ser valores que se evaluan en terminos de truthy y falsy


## ¿Qué son los callbacks y cómo utilizarlos?

Es la ejecucuión de código asíncrono

Modelo de concurrencia: **EVENTLOOP** es delegar la ejecución de ciertas tareas a otras funciones, porque JS solo puede hacer una cosa a la vez

**CALLSATACK/pila de ejecución**: Donde se van apilando las llamadas a funciones según el orden de ejecución.

Cuando una de estas funciones manda llamar un callback que es una funcion que se ejecutara cuando exista la respuesta, cuando esa repuesta llegue la función a ejecutar no va a ir al call stack sino a la cola de tareas, segun el orden en que van llegando

Cuando se terminen las funciones del callsatack se ejecutarán las funciones en la cola de tareas, si hay muchas tareas pesadas en el callstack y muchas tareas en la cola de tareas se tardará en ejecutar las funciones en cola, por eso es importante no bloquear el eventloop

## ¿Cómo funciona el tiempo en JS?

JAvascript va a ejecutar primero las instrucciones que estan en el callstack, console.log(a), setTimeout() y console.log(c), al ejecutar setTimeout va a mandar se callback , console.log(b) a la cola de tareas, que se ejecutará hasta que se terminen de ejecutar todas las tareas del callstack

```js
console.log(a)
setTimeout(()=> console.log(b), 0)
console.log(c)

// a
// c
// b
```

cdn --> content delivery network

## ¿Qué son los callbacks?

Una función que se va a ejecutar en algún futuro  si se cumplen los requisitos

Se incian los request en un orden pero no sabemos en que orden se van a responder, eso depende del servidor.

**Orden y Asincronismo**

Si estuvieramos haciendo multiples request y los quisieramos en cierto orden porque no sabemos cuanto tiempo tardará el servidor en devolver la respuesta, usariamos un callback que se va a ejecutar cuando se obtenga el primer request and so on 

```js
// Acá estamos haciendo peticiones en orden y no en paralelo
getCharacter(id, callback)
getCharacter(1, callback)
getCharacter(2, callback)

getCharacter(1, function(){
  getCharacter(2, function(){
    getCharacter(3)
  })
})

// OJO , así no porque se esta llmando a la función inmediatamente
getcharacter(1, character(2))
```

## Promesas

Tienen tres estados:

- Pending
- Fullfilled, cuando se resuelve --> .then()
- Rejected, cuando se rechaza ---> .catch()

**Crear una promesa**
```js
new Promise(function(resolve, reject){
...
})
.then(valor =>{
  ...
})
.catch(valor => {
  ...
})
``` 

Las promesas cuano llegan al estado de fullfilled puede encadenar más promesas


```js
// Crear la promesa
function getCharacter(id){
  return new Promise((resolve, reject) => {
    // Realizar acá el llamado asincrono

    // Nos va a retornar cualquiera de las dos respuestas según sea el caso
    resolve(data)
    reject(id)
  })
}

getCharacter(id)
.then((character) => {
  console.log(characeter.name)
})
.catch((id) => {
  concole.log(`hay un errror al obtener el personaje ${id}`)
})
```

Encadenar promesas:

Es una secuencia de requests, no es paralelo

```js
getCharacter(1)
.racter) => {
  console.log(characeter.name)
})then((character) => {
  console.log(characeter.name)
  return getCharacter(2)
})
.then((character) => {
  console.log(characeter.name)
  return getCharacter(3)
})
.then((cha
// El catch es el mismo para todo
.catch((id) => {
  concole.log(`hay un errror al obtener el personaje ${id}`)
})
```

Hacer las peticiones en paralelo mejoraria el performance pero se necesita obtener en orden las respuestas del server

```js
// Promesa
function getCharacter(id){
  return new Promise((resolve, reject) => {
    // Realizar acá el llamado asincrono

    // Nos va a retornar cualquiera de las dos respuestas según sea el caso
    resolve(data)
    reject(id)
  })
}

var ids = [1, 2, 3, 4, 5, 6, 7]

var promesas = [ids.map(id => getCharacter(id))]
// promesas = [Promise, Promise, Promise, Promise, Promise, Promise, Promise]

Promise
  // me vas a resolver todas, asi que me vas a regresar el array en orden
  .all(promesas)
  // Al array promesas me vas a mostrar cada valor de la resolución de esa promesa, es decir cada personaje, que es un objeto
  .then(personajes => console.log(personajes))
  .cath(console.log('hubo un error'))
```

## Async/Await

```js
asyc function getCharacters() {
  var ids = [1,2,3,4,5,6,7]
  var promises = ids.map(id => getCharacter(id))
  
  try{
    var characters = await Promise.all(promises)
    console.log(characters)
  } catch(id){
    console.log(`Hubo un error al requerir ${id}`)
  }
}

getCharacters()
```