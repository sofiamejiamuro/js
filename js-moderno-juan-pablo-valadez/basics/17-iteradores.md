# Crear iteradores

¿Cómo funciona un iterador?

```js
const carrito = ['Prod1','Prod2','Prod3']
function iterador(carrito){
  // Definir contador
  let i = 0;

  // Que retorne un objeto con con una propiedad que es una función
  return {
    siguiente: () =>{

    }
  }

}

// esta variable va a retornar un objeto  key value donde el value es la resolucion de la función
const iterar = iterador(carrito);
/*
iterar = 
*/

```
