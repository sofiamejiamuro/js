# Temas complementarios

- const, let, var

- Meoización: ir almacenando el resultado invariable de una función para que no sea necesario volver a ejecutar todas las instrucciones de nuevo, cuando se vuelva a llamar con los mismos parámetros.

- Manejo de fechas

- Funciones recursivas

```js
/*
dividendo / divisor 
13 / 4 
13-4 = 9     1
9-4 = 5      1
5-4 = 1      1  // 4 cabe 3 veces en 13
1-4 = -3     0
*/
function divisionEntera(dividendo, divisor){
  if(dividendo < divisor){
    return 0
  }
  return 1 + divisonEntera(dividendo - divisor, divisor);
}

```

- Closures: Una funcion que recuerda el estado de las cosas cuando fue invocada
```js
function crearSaludo(finalFrase){
  return function(nombre){
    console.log(`Hola ${nombre} ${finalFrase}`)
  }
}

const saludoMexicano = crearSaludo('guey')
// 1. Aquí la función saludo mexicano es equivalente otra función, no al resultado de esa función, esa función que retorna, requiere de 1 argumento.
saludoMexicano = function(nombre){
  console.log(`Hola ${nombre} ${finalFrase}`)
}
// 2. Por eso se manda llamar --> saludoMexicano('Sofia'), porque la constante es en sí una función que necesita un argumento y mandarse llamar

// El closure es esta función que recuerda el saludo aunque no se le este pasando perse como argumento, sino que se le paso a la funcion que la contiene
saludoMexicano('Sofia')
// `Hola Sofia guey`

const saludoArgentino = crearSaludo('che')
const saludoColombiano = crearSaludo('parce')
saludoArgentino('Sofia')
saludoColombiano('Sofia')
```

- Estructura de datos inmutables, ayuda a evitar el side effect de modificar el contenido incial de la varible

```js
sofia2020 ={
  nombre: 'Sofia',
  edad: 30
}

const cumpleañosInmutable = persona => ({
  ...persona,
  edad: persona.edad + 1
})

const sofia2021 = cumpleañosInmutable(sofia2020)

sofia2021 ={
  nombre: 'Sofia',
  edad: 31
}
```

- Cambiando de contexto al llamar una función


El contexto es el objeto *this* de un código

**BIND()**
bind(contexto, ...los parametros de la funcion que bindea en el orden que aparecen) -> cambia el contexto de una función, bindo no ejecuta (por eso esta contenida dentro de un setTimeout en el ejemplo) ni modifica la función original, devuleve una nueva , lista para ejecutarse, con el contexto al qeu debe hacer referencia

```js
sofia ={
  nombre: 'Sofia',
  edad: 30
} 

// En esta función this NO hace referencia al objeto sofia sino al objeto window
function saludar(){
  console.log(`Hola, mi nombre es ${this.nombre}`)
}

// Para cambiar el contexto se usa el método bind, cuyo primer argumento es el contexto al que queremos cambiar
setTimeout(saludar.bind(sofia),1000)

function saludar(saludo = 'Hola'){
  console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

setTimeout(saludar.bind(sofia, 'Hola che'),1000)
// 'Hola che, mi nombre es Sofia
```

Los mñetodos call() y apply() **sí** ejecutan inmediatamnete la función
**CALL()**

```js
saludar.bind(sofia)
saludar.bind(sofia, 'Hola che')
```

En el método apply los parámetros se pasan como una array
```js
saludar.apply(sofia, ['hola che'])
```

