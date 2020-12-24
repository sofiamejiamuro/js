## **Strings**

```js
const string = "Monitor 20 pulgandas";
const string2 = String("Monitor 20 pulgadas");
const string3 = new String("Monitor 20 pulgadas")
```

Métodos para los strings
```js
// cuántas letras tiene la variable
string.length

// en qué posición se encuentra el string buscado
string.indexOf("Monitor") // -1 no lo encontró

// true false
string.includes("Monitor")

// Concatenar 
string.concat("En desuento");

string + "en descuento"

// template strings o template literals
`${string} en descuento`
 
// Eliminar espacios en blanco
string.trimStart();
string.trimEnd();
string.trimStart().trimEnd();
string.trim() 

// Reemplazar
string.replace("Monitor", "Monitor curvo");

// Slice(dónde comenzar a cortar, dónde finalizar)
string.slice(0,10)

// Substring
string.substring(0,10)

// solo corta la posición que le indicas
string.chartAt(0)

// repeat, si le pasasa un numero decimal se rendondea 
string.repeat(2.4) // 2x
string.repeat(3)

// split, divide un string por algun caracter que se le indique
string.split(" ");
string.split(", ");
string.split("#");

// A Mayúsculas
string.toUpperCase();

// A Minùsculas
stirng.toLowerCase();

// convertir a string
number.toString();
```

