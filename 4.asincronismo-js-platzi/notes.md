# Asincronismo en Javascript

## Introducción

Js es un lenguaje de programación asíncrono, que sus acciones no ocurren al mismo tiempo, y no bloqueante con un manejador de eventos, el eventloop, implementado en un único hilo

Conceptos impotantes:

- Memory heap

- Pila de ejecución/ callstack

- Cola de tareas

- EventLoop 

El eventloop , el manejador, esta pendiente de la callstack y la cola de tareas

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

## Preparando el proyecto

```js
git init

npm init
```

## Callbacks

Es la función que es pasada como argumento/parametro de otra función.

**[AJAX - Server Response](https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp)**

The **readyState** property holds the status of the XMLHttpRequest.

The **onreadystatechange** property defines a function to be executed when the readyState changes.

The **status** property and the statusText property holds the status of the XMLHttpRequest object.


### readyState:
Holds the status of the XMLHttpRequest.

0: request not initialized

1: server connection established

2: request received

3: processing request

4: request finished and response is ready

### [status](https://www.w3schools.com/tags/ref_httpmessages.asp):

200: "OK"

403: "Forbidden"

404: "Page not found"

## Promesas

ECMA Script 6

## Async / await

Es importante notar que una de las diferencias entre async y await y las promesas es el scope, mientras que en una promesa se quedan restringidas al scope de then, en el async/await como se asigna a una connstante se podria decir que su scope es más amplio, según sea el caso


## Ventajas y desventajas entre estos tres métodos

**Callbacks**

PROS: Corren en cualquier navegador

CONS: Anidación

**Promises**

PROS: Se enlazan, es mñas sencillo de leer

CONS: Sólo existe un catch al final, requiere de transpilador para funcionar en los navegadores, scope

**Async/Await**

PROS: manejo de excepciones, scope

CONS: Tamnbién requiere de transpilación