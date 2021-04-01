## **Numbers**

- Operaciones básicas
- Módulo es el residuo
- Math Object:

```js
Math.PI
// Redondear
Math.round();

// Redondear hacia arriba
Math.ceil()

// Redondear hacia abajo
Math.floor();

// raíz cuadrada
Math.sqrt();

// valor absoluto
Math.abs(); 

// Potencia
Math.pow(2,4);

// Mínimo 
Math.min(3, 5, 1, 12, -3);

// Máximo
Math.max(3, 5, 1, 12, -3);

// Aleatorio, rara vez da un numero entero
Math.random()

//
Math.floor( Math.random() * 30 );

``` 

## Orden de las operaciones

multiplicación > división > suma > resta

```js
let puntaje = 5;
puntaje++; // 5
--puntaje; // 6

puntaje += 5 // 11 
```

## Métodos en números

```js
let numero = "30"
let numero2 = "30.5"

// Convierte un string a numero entero
Number.parseInt(numero) // 30

// Convierte a numero decimal
Number.parseFloat(numero2) // 30.5

// Revisar si es número entero o no
Number.isInteger(numero) // true
```

# Operadores

\> Mayor que

< Menor que

== igual que

\=== igual que , comparador estricto, de tipo de dato

!= diferente 

!== diferente, comparador estricto, de tipo de dato


# Null / undefined

```js
let numero; // undefined

let numero2 = null; //null
```
