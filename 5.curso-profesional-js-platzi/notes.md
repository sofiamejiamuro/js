# Curso profesional de JS

¿Qué forma a un profesional?

- Conocimiento del lenguaje
- Conocimiento de los entornos de programación
- Mejores prácticas
- Versado de Código
- Herramientas
- Ética/Profesionalismo
- Experiencia

El objetivo del proyecto es crear un media player

```js
npm init -y
```

la bandera -y le dice que sí a todas las preguntas que se hacen al inicializar npm

```js
npm i -D live-server
```

la bandera -D es para que sea una dependencia sólo de desarrollo

## Scripts embebidos

Los script embebidos detienen la ejecución del html

Es imporante el orden de los scripts

## SCOPE

- **Global Scope**

  Toda variable que se declare fuera de una función o un bloque tien ecomo scope a window, el scope global.
  
- **Function Scope**

```js
function printNumbers(){
  for(var i = 0; i <10, i++){
    setTimeout(function(){
      console.log(i)
    },100)
  }
}

printNumbers()
```

vs


```js
function printNumbers(){
  for(var i = 0; i <10, i++){
    function eventuallyPrintNumber(n){
      setTimeout(function(){
            console.log(i)
      },100)
    }
    
    eventuallyPrintNumber(i)
  }
}

printNumbers()
```

- **Block Scope**

let opera sobre el block scope

```js
function printNumbers(){
  for(let i = 0; i <10, i++){
    setTimeout(function(){
      console.log(i)
    },100)
  }
}

printNumbers()
```

- **Module Scope**

Es scope de la variable está limitado al archivo donde este se encuentra

Declarar en el script type="module" en el html limita el alcance de las variables y ya no son alcanzables desde la consola delnavegador porque ya estan limitadas a su archivo

El scope define el tiempo de vida de una variable, también sirve para no reutilizar por error una variable

## CLOSURES

SCOPE + FUNCIONES

- IIFE immedieatly-invoked function expression

```js
// Aqui la variable color está en el scope global, en window
let color = 'green';

function printColor(){
  console.log(color)
}

printColor()


// Al encapsularla en una IIFE restringimos su scope, al del iifee

// Un closuere es la combinacion del scope de una funcion y la ejecucuion de otra funcion y su acceso al scope de la función contenedora

(function(){
  let color = 'green';

  function printColor(){
    console.log(color)
  }

  printColor()
})

function makeColorPrinter(color){
  let colorMessage = `The color is ${color}`
  reutrn function(){
    console.log(colorMessage)
  }
}

let greenColorPrinter = makeColorPrinter('green')

console.log(greenColorPrinter) // nos retorna la funación , hay que ejecutarla

// Recuerda las variables aunque esta afuera del scope de la funcion donde fueron decalradas, se memorizo el scope

console.log(greenColorPrinter())

// Sirve para hacer variables privadas, se evita que se reescriban las variables
function makeCounter(n){
  let count = n;

  return {
    increase: function(){},
    decrease: function(){},
    getCount: function(){}
  }
}

let counter = makeCounter(7)

// No podemos acceder a la variable count 
console.log(counter.count)

// Pero si a las funciones que retorna
console.log(counter.increase)
console.log(counter.decrease)
console.log(counter.getCount)
```


## THIS

This se refiere a un objeto. Ese objeto es el que actualmente está ejecutando un pedazo de código

- **This en global scope**

Siempre se refiere al objeto globla window

- **This dentro de una función**

```js
// En esta función this también es el objeto global window

// Si se usa scritct mode this es undefined
function whoIsThis(){
  return this;
};

console-log(whoIsThis())
```

```js
// La función saludar está siendo ejecutada por un objeto, entonces this se refiere a este objeto
const person = {
  name: 'Gabriel',
  saludar: function(){
    console.log(`hola soy ${this.name}`)
    // Hola soy Gabriel
  };
}
;
person.saludar()


// si sacamos la función saludar del objeto persona ese this ya no se refiere a el objeto persona sino al objeto global

const accion = person.saludar;
accion()
// Hola soy
```

- **This en el contexto de una clase**

```js
// This no se va a referir al objeto Person se va a referir a la instancia Angela
function Person(name){
  this.name
}

Person.prototype.saludar = function(){
  console.log(`hola me llamo ${this.name}`)
};

const angela = new Person('Angela');
```

## CALL, APPLY & BIND

Son métodos del protoypo de function que nos sirven para asignar directamente el contexto de **this** 

**CALL**

Call y apply llaman la función inmediatamente

```js
// En esta función el this hace referencia al objeto global window porque es el objeto en el que se estña ejecutando la función
function saludar(){
  console.log(`hola soy ${this.name} ${this.apellido}`)
};

const richard = {
  name: 'Gabriel',
  apellido: 'Kauffman'
};

// Cuando mando llamar la función y le aplico el meteodo call el promer argumento de este metodo es el this al que queremos referenciar, entonces estoy cambiando de referencia, del objeto global window al objeto richard
saludar.call(richard);

// Cuando la función requiere argumentos
function caminar(metros, direccion){
  console.log(`${this.name} camina ${metros} metros hacia ${direccion}.`)
};

caminar.call(richard, 400, 'norte');
``` 

**APLY**

Funciona igual que call pero se pasan los argumentos de forma distinta, ejemplo si necesitamos pasar una lista como argumentos

```js
function caminar(metros, direccion){
  console.log(`${this.name} camina ${metros} metros hacia ${direccion}.`)
};

caminar.apply(richard, [800, 'sur']);

const valores = [800, 'sur']
caminar.apply(richard, valores);
```

**BIND**

Bind construye una nueva función con el this nuevo ya integrado

```js
const daniel = {
  name: 'Daniel',
  apellido: 'Sanchez'
};

const danielSaluda = saludar.bind(daniel)
danielSaluda()

const danielCamina = caminar.bind(daniel)
danielCamina(1000, 'este')

const danielCamina = caminar.bind(daniel,2000,'sur')
danielCamina()

// curing = guarda parcialmente los argumentos y depues se mandan los demas
const danielCamina = caminar.bind(daniel,500)
danielCamina('noroeste')
```

Ejemplo de uso

Si  atraves de un getElementsByClassName obtenemos una NodeList no vamos a poder acceder a los metodos que tiene un Array, por ejemplo un forEach, entonces podemos mandar llamar la funcion de los arrays y pasarle como this la NodeLits

```js
Array.prototype.forEach.call(buttons, button => {
  button.onclick = () => alert('Nunca pares de aprender')
});
```

## Prototype

En JS todo son objetos, no hay clases. 

```js
// Es ineficiente crar asi cada uno de los heroes
const zelda = {
  name: 'Zelda'
};

zelda.saludar = function(){
  console.log(`Hola soy ${this.name}`)
};

zelda.saludar();


const link = {
  name: 'Link'
};

link.saludar = function(){
  console.log(`Hola soy ${this.name}`)
};

link.saludar();
```

```js
// Una función que ayude a crear a los heroes de una forma más eficiente
function Hero(name){
  const hero = {
    name: name
  };

// Es inefieicente estar creado esta funcion en cada objeto 
  hero.saludar = function(){
    console.log(`Hola soy ${this.name}`)
  };

  return hero
};

const zelda = Hero('Zelda');
zelda.saludar();
```

```js
const heroMethods = {
  saludar: function(){
    console.log(`Hola soy ${this.name}`)
  };
};

function Hero(name){
  const hero = {
    name: name
  };
  hero.saludar = heroMethods.saludar;
  return hero
};

const zelda = Hero('Zelda');
zelda.saludar();
```

```js
// Este metodo crea un nuevo objeto
const heroMethods = {
  saludar: function(){
    console.log(`Hola soy ${this.name}`)
  };
};

function Hero(name){
  const hero = Object.create(heroMethods);
  hero.name = name
  return hero
};

const zelda = Hero('Zelda');
zelda.saludar();
```

```js
function Hero(name){
  const hero = Object.create(Hero.prototype);
  hero.name = name
  return hero
};

Hero.prototype.saludar =  function(){
  console.log(`Hola soy ${this.name}`)
};

const zelda = Hero('Zelda');
zelda.saludar();
```

```js
// Azucar Sintactica
function Hero(name){
  this.name = name
};

Hero.prototype.saludar =  function(){
  console.log(`Hola soy ${this.name}`)
};

const zelda = new Hero('Zelda');
zelda.saludar();
```

## HERENCIA PROTOTYPAL

\__proto__

```js
function Hero(name){
  this.name = name
};

Hero.prototype.saludar =  function(){
  console.log(`Hola soy ${this.name}`)
};

const zelda = new Hero('Zelda');

console.log('Name:', zelda.name) // Name: Zelda
console.log('Saludar:', zelda.saludar) //  function
console.log('toString:', zelda.toString) // toString() 

// hasOwnProperty revisa si el elemento es del objeto o lo hereda
console.log(zelda.hasOwnProterty('name')) // true

console.log(zelda.hasOwnProterty('saludar')) // false
```


