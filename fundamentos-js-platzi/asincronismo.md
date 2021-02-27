# Asincronismo

Se pueden mandar funciones como parámetros



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

## ¿Qué son los callbacks?


