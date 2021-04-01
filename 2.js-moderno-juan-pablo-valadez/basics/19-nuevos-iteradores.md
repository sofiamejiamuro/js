# Entries, Values, Keys y Default

```js
const ciudades = ['París','Londres','Tokio','NY'];
const ordenes = new Set([233,435,786,986]);
const datos = new Map();

datos.set('nombre','Pedro');
datos.set('profesion','Desarrollador web');
```

## Entries

Imprime llave y valor dentro de un array, en el caso de los Sets que no tienen llave le crea una con el mismo valor que su valor
```js
for (let entry of ciudades.entries()){
  console.log(entry)
  /*
  [0,'Paris]
  [1,'Londres']
  [2,'Tokio']
  [3,'NY']
  */
}

for (let entry of ordenes.entries()){
  console.log(entry)
  /*
  [233,233]
  [435,435]
  [786,786]
  [968,968]
  */
}

for (let entry of datos.entries()){
  console.log(entry)
  /*
  ['nombre','Pedro']
  ['profesion','desarrolador web']
  */
}
```
## Keys

Imprime las llaves.

Las llaves de un arreglo son sus posiciones, las llaves de un Set son el iguales que su valor
```js
for (let keys of ciudades.keys()){
  console.log(keys)
  /*
  'Paris
  'Londres'
  'Tokio'
  'NY'
  */
}

for (let keys of ordenes.keys()){
  console.log(keys)
  /*
  233
  435
  786
  968
  */
}

for (let keys of datos.keys()){
  console.log(keys)
  /*
  'nombre'
  'profesion'
  */
}
```
## Values

Imprime los valores
```js
for (let value of ciudades.values()){
  console.log(value)
  /*
  'Paris
  'Londres'
  'Tokio'
  'NY'
  */
}

for (let value of ordenes.values()){
  console.log(value)
  /*
  233
  435
  786
  968
  */
}

for (let value of datos.values()){
  console.log(value)
  /*
  'Pedro'
  'desarrolador web'
  */
}
```
## Default

```js
for (let ciudad of ciudades){
  console.log(ciudad)
  /*
  'Paris
  'Londres'
  'Tokio'
  'NY'
  */
}

for (let orden of ordenes){
  console.log(orden)
  /*
  233
  435
  786
  968
  */
}

for (let dato of datos){
  console.log(dato)
  /*
  ['nombre','Pedro']
  ['profesion','desarrolador web']
  */
}
```