# Crear iteradores

¿Cómo funciona un iterador?


```js
const carrito = ['Prod1','Prod2','Prod3']
function iterador(carrito){
  // Definir contador
  let i = 0;

  
  // Esta función retorna un objeto con una función
  return {
    siguienteElemento: () =>{
      // Cuántas veces debe repetirse el proceso , es decir, la longitud de la coleccion
      const fin = (i>= carrito.length); // true/false
      // Debemos conocer el item en el que vamos 
      const valorActual = !fin ? carrito[i++] : undefined ;
     
      return fin,valorActual
    }
  }

}
const iterar = iterador(carrito);
/*
iterar:{
  siguiente: ()=> {
  }
}
*/

// Entonces yo puedo mandar llamar la funcion 
const valorActual = iterar.siguienteElemento()
/*
valorActual :{
  fin: true,
  valorActual: Prod1
}
*/
```
